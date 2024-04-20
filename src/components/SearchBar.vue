<script setup>
import { useStore } from 'vuex'
import { onMounted, reactive } from 'vue'

const store = useStore()
const state = reactive({
  search: false
})

onMounted( () => {
  if (!state.search) 
    store.dispatch('getAllPokemons')
})

const getPokemonsByName = (name) => {
  if (name) {
    console.log(name)
    store.getters.getPokemonByName(name)
  } else {
    store.dispatch('getPokemons')
  }
}

const getPokemonsBySpecie = (specie) => {
  if (specie) {
    console.log(specie)
    store.getters.getPokemonBySpecie(specie)
  } else {
    store.dispatch('getPokemons')
  }
}

const getPokemonsById = (id) => {
  if (id) {
    console.log(id)
    store.getters.getPokemonById(id)
  }else {
    store.dispatch('getPokemons')
  }
}

</script>

<template>
  <section class="pt-2">
    <div
      v-if="$store.state.language === 'en'"
      class="container text-center mt-5 p-4 bg-light rounded-top"
    >
      <h2 class="">
        Find Pokémon
      </h2>
      <p class="">
        Search your favorite pokémon by name, id, type or specie.
      </p>
      <div>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="$store.commit('changeInput', 'name')"
        >
          Name
        </button>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="$store.commit('changeInput', 'id')"
        >
          Id
        </button>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="$store.commit('changeInput', 'type')"
        >
          Type
        </button>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="$store.commit('changeInput', 'specie')"
        >
          Specie
        </button>
      </div>
      <div
        v-if="$store.state.search === 'name'"
        class="col-md-6 d-flex align-items-center"
      >
        <input
          type="text"
          class="form-control col-md-6 mt-3 bg-secondary bg-opacity-25"
          placeholder="Search by name"
          @keyup="(e) => getPokemonsByName(e.target.value.toLowerCase())"
        >
      </div>
      <div
        v-if="$store.state.search === 'id'"
        class="col-md-6 d-flex align-items-center"
      >
        <input
          type="number"
          class="form-control col-md-6 mt-3 bg-secondary bg-opacity-25"
          placeholder="Search by id"
          @keyup="(e) => getPokemonsById(parseInt(e.target.value))"
        >
      </div>
      <div
        v-if="$store.state.search === 'specie'"
        class="col-md-6 d-flex align-items-center"
      >
        <input
          type="text"
          class="form-control col-md-6 mt-3 bg-secondary bg-opacity-25"
          placeholder="Search by specie"
          @keyup="(e) => getPokemonsBySpecie(e.target.value.toLowerCase())"
        >
      </div>
      <div
        v-if="$store.state.search === 'type'"
        class="col-md-6 d-flex align-items-center"
      >
        <input
          type="text"
          class="form-control col-md-6 mt-3 bg-secondary bg-opacity-25"
          placeholder="Search by type"
        >
      </div>
    </div>

    <!-- <div
      v-if="$store.state.language === 'es'"
      class="container text-center mt-5 p-4 bg-light rounded-top"
    >
      <h2 class="">
        Encontrar el pokemon
      </h2>
      <p class="">
        Busca tu pokemon favorito por nombre, id, tipo o especie.
      </p>
      <form class="row p-2">
        <select
          class="col-md-2 rounded bg-secondary bg-opacity-25 border-0"
        >
          <option selected>
            Buscar
          </option>
          <option value="1">
            Nombre
          </option>
          <option value="2">
            Id
          </option>
          <option value="3">
            Tipo
          </option>
          <option value="4">
            Especie
          </option>
        </select>
        <div class="col-md-4">
          <input
            id="name"
            type="text"
            class="form-control bg-secondary bg-opacity-25"
          >
        </div>
      </form>
    </div>

    <div
      v-if="$store.state.language === 'pt'"
      class="container text-center mt-5 p-4 bg-light rounded-top"
    >
      <h2 class="">
        Encontre o pokémon
      </h2>
      <p class="">
        Pesquise o seu pokémon favorito pelo nome, id, tipo ou espécie.
      </p>
      <form class="row p-2">
        <select
          class="col-md-2 rounded bg-secondary bg-opacity-25 border-0"
        >
          <option selected>
            Pesquisar por
          </option>
          <option value="1">
            Nome
          </option>
          <option value="2">
            Id
          </option>
          <option value="3">
            Tipo
          </option>
          <option value="4">
            Espécie
          </option>
        </select>
        <div class="col-md-4">
          <input
            id="name"
            type="text"
            class="form-control bg-secondary bg-opacity-25"
          >
        </div>
      </form>
    </div> -->
  </section>
</template>