<script setup>

import { useStore } from 'vuex'

const store = useStore()

const getpokemonsfiltered = (value) => {
  if (value) {
    store.getters.getPokemonByName(value)
  } else {
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
      <form class="row p-2">
        <!-- <select
          class="col-md-2 rounded bg-secondary bg-opacity-25 border-0"
        >
          <option selected>
            Search by
          </option>
          <option value="1">
            Name
          </option>
          <option value="2">
            Id
          </option>
          <option value="3">
            Type
          </option>
          <option value="4">
            Specie
          </option>
        </select> -->
        <div class="col-md-6">
          <input
            id="name"
            type="text"
            class="form-control bg-secondary bg-opacity-25"
            @input="event => getpokemonsfiltered(event.target.value)"
          >
        </div>
      </form>
    </div>

    <div
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
    </div>
  </section>
</template>