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
        Encontrar Pokemon
      </h2>
      <p class="">
        Busca tu pokémon favorito por nombre, id, tipo o especie.
      </p>
      <div>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="$store.commit('changeInput', 'name')"
        >
          NOMBRE
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
          ESPECIES
        </button>
      </div>
      <div
        v-if="$store.state.search === 'name'"
        class="col-md-12 d-flex align-items-center"
      >
        <input
          type="text"
          class="form-control mt-3 bg-secondary bg-opacity-25"
          placeholder="Buscar por nombre"
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
          placeholder="Search by ID"
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
          placeholder="Buscar por especie"
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
            Selecciona el tipo
          </option>
          <option value="grass">
            Planta
          </option>
          <option value="bug">
            Bicho
          </option>
          <option value="fire">
            Fuego
          </option>
          <option value="normal">
            Normal
          </option>
          <option value="water">
            Agua
          </option>
          <option value="electric">
            Eléctrico
          </option>
          <option value="ice">
            Hielo
          </option>
          <option value="fighting">
            Lucha
          </option>
          <option value="poison">
            Veneno
          </option>
          <option value="ground">
            Tierra
          </option>
          <option value="flying">
            Volador
          </option>
          <option value="psychic">
            Psíquico
          </option>
          <option value="rock">
            Roca
          </option>
          <option value="ghost">
            Fantasma
          </option>
          <option value="dragon">
            Dragón
          </option>
          <option value="dark">
            Siniestro
          </option>
          <option value="steel">
            Acero
          </option>
          <option value="fairy">
            Fada
          </option>
        </select>
      </div>
    </div>
  </section>
</template>