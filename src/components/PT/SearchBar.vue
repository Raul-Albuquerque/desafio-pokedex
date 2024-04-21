<script setup>
import { useStore } from 'vuex'
import { onMounted, reactive } from 'vue'

const store = useStore()
// onMounted( () => {
//   if (!state.search) 
//     store.dispatch('getAllPokemons')
// })

const getPokemonsByName = (name) => {
  if (name) {
    store.getters.getPokemonByName(name)
  } else {
    store.dispatch('getPokemons')
  }
}

const getPokemonsBySpecie = (specie) => {
  if (specie) {
    store.getters.getPokemonBySpecie(specie)
  } else {
    store.dispatch('getPokemons')
  }
}

const getPokemonsById = (id) => {
  if (id) {
    store.getters.getPokemonById(id)
  }else {
    store.dispatch('getPokemons')
  }
}

const getPokemonsByType = (type) => {
  if (type) {
    store.getters.getPokemonsByType(type)
  } else {
    store.dispatch('getPokemons')
  }
}

</script>

<template>
  <section class="pt-2">
    <div
      class="container text-center mt-5 p-4 bg-light rounded-top"
    >
      <h2 class="">
        Procure o Pokémon
      </h2>
      <p class="">
        Procure seu Pokémon favorito pelo nome, id, tipo ou espécie.
      </p>
      <div>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="$store.commit('changeInput', 'name')"
        >
          NOME
        </button>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="$store.commit('changeInput', 'id')"
        >
          ID
        </button>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="$store.commit('changeInput', 'type')"
        >
          TIPO
        </button>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="$store.commit('changeInput', 'specie')"
        >
          ESPÉCIE
        </button>
      </div>
      <div
        v-if="$store.state.search === 'name'"
        class="col-md-12 d-flex align-items-center"
      >
        <input
          type="text"
          class="form-control mt-3 bg-secondary bg-opacity-25"
          placeholder="Procurar pelo nome"
          @keyup="(e) => getPokemonsByName(e.target.value.toLowerCase())"
        >
      </div>
      <div
        v-if="$store.state.search === 'id'"
        class="col-md-12 d-flex align-items-center"
      >
        <input
          type="number"
          class="form-control mt-3 bg-secondary bg-opacity-25"
          placeholder="Procurar pelo ID"
          @keyup="(e) => getPokemonsById(parseInt(e.target.value))"
        >
      </div>
      <div
        v-if="$store.state.search === 'specie'"
        class="col-md-12 d-flex align-items-center"
      >
        <input
          type="text"
          class="form-control mt-3 bg-secondary bg-opacity-25"
          placeholder="Procurar pela Espécie"
          @keyup="(e) => getPokemonsBySpecie(e.target.value.toLowerCase())"
        >
      </div>
      <div
        v-if="$store.state.search === 'type'"
        id="app"
      >
        <select
          class="form-select col-6 mt-3 bg-secondary bg-opacity-25"
          aria-label="Small select example"
          @change="(e) => getPokemonsByType(e.target.value)"
        >
          <option
            selected
            disabled
          >
            Escolha o tipo
          </option>
          <option value="grass">
            Planta
          </option>
          <option value="bug">
            Bug
          </option>
          <option value="fire">
            Fogo
          </option>
          <option value="normal">
            Normal
          </option>
          <option value="water">
            Água
          </option>
          <option value="electric">
            Electric
          </option>
          <option value="ice">
            Ice
          </option>
          <option value="fighting">
            Luta
          </option>
          <option value="poison">
            Poison
          </option>
          <option value="ground">
            Ground
          </option>
          <option value="flying">
            Flying
          </option>
          <option value="psychic">
            Psíquico
          </option>
          <option value="rock">
            Rock
          </option>
          <option value="ghost">
            Ghost
          </option>
          <option value="dragon">
            Dragão
          </option>
          <option value="dark">
            Dark
          </option>
          <option value="steel">
            Steel
          </option>
          <option value="fairy">
            Fada
          </option>
        </select>
      </div>
    </div>
  </section>
</template>