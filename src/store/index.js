import { createStore } from 'vuex'
import api from '@/services/api'


export default createStore({
  state: {
    language: 'pt',
    pokemons: [],
    endpoints: []
  },
  mutations: {
    changeLanguage (state, payload) {
      state.language = payload
    },

    setPokemons (state, payload) {
      state.pokemons = payload
    },

    setPokemonsURL (state, payload) {
      state.endpoints = payload
    }
  }, 
  getters: {
    pokemonURL: state => {
      const endpoints = state.pokemons.map(pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
      return endpoints
    }
  },
  actions: {
    async getPokemons ({ commit }) {

      const limit = 21

      try {
        const response = await api.get(`?limit=${limit}`)
        const data = response.data

        data.results.forEach((item, index) => {
          item.id = index + 1
        })

        commit('setPokemons', data.results)
        commit('setPokemonsURL', data.results)
      } catch (error) {
        console.log(error)
      }
    }
  }
})