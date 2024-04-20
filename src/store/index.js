

import { createStore } from 'vuex'
import axios from 'axios'
import api from '@/services/api'


export default createStore({
  state: {
    language: 'en',
    search: '',
    pokemons: [],
    // filteredPokemons: [],
    loading: false,
    pokemonInfo: '',
    morePokemons: {
      start: 1,
      end: 13,
    },
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

    // setFilteredPokemons (state, payload) {
    //   state.filteredPokemons = payload
    // },

    setLoading (state, status) {
      state.loading = status
    },
    setPokemonInfo (state, payload) {
      state.pokemonInfo = payload
    },
  }, 
  getters: {
    allPokemonsPage(state) {
      return state.pokemons
    },

    // allPokemons(state) {
    //   return state.filteredPokemons
    // },

    getPokemonByName: (state) => (name) => {
      if(name) {
        return state.pokemons = state.pokemons.filter(pokemon => pokemon.data.name.includes(name))
      }
      return state.pokemons
    },
    getPokemonById: (state) => (id) => {
      if(id) {
        return state.pokemons = state.pokemons.filter(pokemon => pokemon.data.id == id)
      }
      return state.pokemons
    },
    getPokemonBySpecie: (state) => (name) => {
      if(name) {
        return state.pokemons = state.pokemons.filter(pokemon => pokemon.data.species.name.includes(name))
      }
      return state.pokemons
    },

    updateNewPokemonsEnd: (state) => {
      return state.morePokemons.end += 12
    }
  }, 
  actions: {
    async getPokemons ({ commit, state }) {
      const urls = []
      for (let i = 1; i < state.morePokemons.end; i++) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      await axios.all(urls.map((endpoint) => axios.get(endpoint)))
        .then((res) => commit('setPokemons', res))
        .catch((err) => console.log(err))
    },

    // async getAllPokemons ({ commit }) {
    //   const urls = []
    //   for (let i = 1; i < 750; i++) {
    //     urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    //   }
    //   await axios.all(urls.map((endpoint) => axios.get(endpoint)))
    //     .then((res) => commit('setFilteredPokemons', res))
    //     .catch((err) => console.log(err))
    // },

    async getPokemonsInfo ({ commit }, id) {
      const response = await api.get(`/${id}`)
      const data = response.data
      commit('setPokemonInfo', data)
    },
  }
})