import { createStore } from 'vuex'
import api from '@/services/api'


export default createStore({
  state: {
    language: 'pt',
    pokemons: []
  },
  mutations: {
    changeLanguage (state, payload) {
      state.language = payload
    },

    setPokemons (state, payload) {
      console.log('setPokemon')
      state.pokemons = payload
    }
  },
  actions: {
    async getPokemons ({ commit }) {
      try {
        await api
          .get('?limit=20')
          .then((res) => {
            console.log(res)
            commit('setPokemons', res.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
})