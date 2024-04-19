import { createStore } from 'vuex'
import axios from 'axios'
import api from '@/services/api'


export default createStore({
  state: {
    language: 'pt',
    pokemons: [],
    filteredPokemons: []
  },
  mutations: {
    changeLanguage (state, payload) {
      state.language = payload
    },
    setPokemons (state, payload) {
      state.pokemons = payload
    },
  }, 
  getters: {
    allPokemons(state) {
      return state.pokemons
    }
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
  }
})