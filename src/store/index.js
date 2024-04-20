

import { createStore } from 'vuex'
import axios from 'axios'
import api from '@/services/api'


export default createStore({
  state: {
    language: 'en',
    search: '',
    pokemons: [],
    filteredPokemons: [],
    loading: false,
    pokemonInfo: ''
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
    setFilteredPokemons (state, payload) {
      state.filteredPokemons = payload
    },
    setLoading (state, status) {
      state.loading = status
    },
    setPokemonInfo (state, payload) {
      state.pokemonInfo = payload
    }
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
        return state.pokemons = state.pokemons.filter(pokemon => pokemon.data.name.includes(name))
      }
      return state.pokemons
    },
  }, 
  actions: {
    async getPokemons ({ commit }) {
      const urls = []
      for (let i = 1; i < 22; i++) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      await axios.all(urls.map((endpoint) => axios.get(endpoint)))
        .then((res) => commit('setPokemons', res))
        .catch((err) => console.log(err))
    },

    async getAllPokemons ({ commit }) {
      const urls = []
      for (let i = 1; i < 750; i++) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      await axios.all(urls.map((endpoint) => axios.get(endpoint)))
        .then((res) => commit('setFilteredPokemons', res))
        .catch((err) => console.log(err))
    },

    async getPokemonsInfo ({ commit }, id) {
      console.log(id)
      const response = await api.get(`/${id}`)
      const data = response.data
      console.log(data)
      commit('setPokemonInfo', data)
    }
  }
})