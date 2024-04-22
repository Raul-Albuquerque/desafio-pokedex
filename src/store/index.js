import { createStore } from 'vuex'
import axios from 'axios'
import api from '@/services/api'


export default createStore({
  state: {
    language: 'en',
    searchIsOn: false,
    pokemons: [],
    filteredPokemons: [],
    loading: false,
    pokemonInfo: '',
    morePokemons: {
      start: 1,
      end: 13,
    },
    evolutionChain: [],
  },

  mutations: {
    changeLanguage (state, payload) {
      state.language = payload
    },
    changeInput (state, payload) {
      state.search = payload
    },
    setPokemons (state, payload) {
      state.pokemons = payload
    },

    setSearch (state, payload) {
      state.searchIsOn = payload
    },

    setFilteredPokemons (state, payload) {
      state.filteredPokemons = payload    
    },

    setLoading (state, status) {
      state.loading = status
    },

    setPokemonInfo (state, payload) {
      state.pokemonInfo = payload
    },

    setEvolutionChain (state, payload) {
      state.evolutionChain = payload
    },

  }, 

  getters: {
    allPokemonsPage(state) {
      return state.pokemons
    },

    allPokemons(state) {
      return state.filteredPokemons
    },

    getPokemonByName: (state) => (name) => {
      if(name) {
        state.searchIsOn = true
        return state.filteredPokemons = state.filteredPokemons.filter(pokemon => pokemon.data.name.includes(name))
      }
      return state.filteredPokemons
    },

    getPokemonById: (state) => (id) => {
      if(id) {
        state.searchIsOn = true
        return state.filteredPokemons = state.filteredPokemons.filter(pokemon => pokemon.data.id == id)
      }
      return state.filteredPokemons
    },

    getPokemonBySpecie: (state) => (specie) => {
      if(specie) {
        state.searchIsOn = true
        return state.filteredPokemons = state.filteredPokemons.filter(pokemon => pokemon.data.species.name.includes(specie))
      }
      return state.filteredPokemons
    },

    getPokemonsByType: (state) => (typeSearched) => {
      if(typeSearched) {
        state.searchIsOn = true
        return state.filteredPokemons = state.filteredPokemons.filter(poke => {
          return poke.data.types.some(type => type.type.name.includes(typeSearched))
        })
      }
      return state.filteredPokemons
    },

    updateNewPokemonsEnd: (state) => {
      return state.morePokemons.end += 12
    }
  }, 

  actions: {
    async getPokemons ({ commit, state }) {
      try {
        const urls = []
        for (let i = 1; i < state.morePokemons.end; i++) {
          urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        const responses = await Promise.all(urls.map(endpoint => axios.get(endpoint)))
        commit('setPokemons', responses)
      } catch (error) {
        console.error('Error fetching All Pokemons: ', error)
      }
    },

    async getAllPokemons ({ commit }) {
      try {
        const urls = []
        for (let i = 1; i < 750; i++) {
          urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        const responses = await Promise.all(urls.map(endpoint => axios.get(endpoint)))
        commit('setFilteredPokemons', responses)
      } catch (error) {
        console.error('Error fetching All Pokemons: ', error)
      }
    },

    async getPokemonsInfo ({ commit }, id) {
      try {
        const response = await api.get(`/pokemon/${id}`)
        const data = response.data
        commit('setPokemonInfo', data)
      } catch (error) {
        console.error('Error fetching Pokemon information: ', error)
      }
    },

    async getPokemonsEvolution({ commit }, id) {
      try {
        const response = await api.get(`/pokemon-species/${id}`)
        const data = response.data
        const evolutionChainURL = data.evolution_chain.url
    
        // Fetch evolution chain data
        const evolutionResponse = await api.get(evolutionChainURL)
        const evolutionData = evolutionResponse.data.chain
    
        // Extract evolution chain
        const pokemons = []
        const extractChain = (chain) => {
          const pokemon = {
            name: chain.species.name,
            id: chain.species.url.split('/').reverse()[1] // Extract ID from URL
          }
          pokemons.push(pokemon)
          if (chain.evolves_to.length > 0) {
            chain.evolves_to.forEach((evolution) => extractChain(evolution))
          }
        }
        extractChain(evolutionData)
    
        commit('setEvolutionChain', pokemons)
      } catch (error) {
        console.error('Error fetching Pokemon evolution: ', error)
      }
    }
  }
})