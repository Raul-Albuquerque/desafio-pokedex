import { createStore } from 'vuex'
import api from '@/services/api'


export default createStore({
  state: {
    language: 'pt',
    pokemons: [],
    pokemonsList: [],
    loading: false,
    pokemonInfo: ''
  },
  mutations: {
    changeLanguage (state, payload) {
      state.language = payload
    },

    setPokemons (state, payload) {
      state.pokemons = payload
    },
    setNewPokemons (state, payload) {
      state.pokemonsList.push(...payload)
    },
    setLoading (state, status) {
      state.loading = status
    },
    setPokemonInfo (state, payload) {
      state.pokemonInfo = payload
    }
  }, 
  getters: {
  },
  actions: {
    async getPokemons ({ commit }) {

      try {
        commit('setLoading', true)
        const response = await api.get('?offset=0&limit=21')
        const pokemons = response.data.results
        pokemons.forEach((item, index) => {
          item.id = index + 1
        })
        commit('setPokemons', pokemons)
      } catch (error) {
        console.error('Erro de conexão com a API', error)
      } finally {
        commit('setLoading', false)
      }
    },

    async getPokemonsScroll ({ commit, state }) {
      try {
        commit('setLoading', true)
        const response = await api.get(`?offset=${state.pokemonsList.length}&limit=21`)
        await new Promise((res) => setTimeout(res, 300))
        const newPokemons = response.data.results
        newPokemons.forEach((pokemon, index) => {
          pokemon.id = index + state.pokemonsList.length + 1
        })
        commit('setNewPokemons', newPokemons)
      } catch (error) {
        console.error('Erro na hora de compilar novos pokemons', error)
      } finally {
        commit('setLoading', false)
      }
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