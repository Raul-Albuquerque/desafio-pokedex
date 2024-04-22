<script setup>
import { useStore } from 'vuex'

const store = useStore()

const getPokemonsByName = (name) => {
  if (name) {
    store.getters.getPokemonByName(name)
  } else {
    store.dispatch('getAllPokemons')
  }
}

const getPokemonsBySpecie = (specie) => {
  if (specie) {
    store.getters.getPokemonBySpecie(specie)
  } else {
    store.dispatch('getAllPokemons')
  }
}

const getPokemonsById = (id) => {
  if (id) {
    store.getters.getPokemonById(id)
  }else {
    store.dispatch('getAllPokemons')
  }
}

const getPokemonsByType = (type) => {
  if (type) {
    store.getters.getPokemonsByType(type)
  } else {
    store.dispatch('getAllPokemons')
  }
}
</script>

<template>
  <section class="pt-2 mt-4">
    <div
      class="container text-center-sm text-start-md p-4 pt-2 bg-light rounded-top"
    >
      <div class=" container mt-2">
        <h2 class="fs-3">
          {{ $t('searchbar.title') }}
        </h2>
        <h3 class="fs-6 fw-normal">
          {{ $t('searchbar.subtitle') }}
        </h3>
        <div>
          <button
            class="btn btn-outline-primary me-2 btn-sm rounded text-capitalize"
            type="button"
            @click="$store.commit('changeInput', 'name')"
          >
            {{ $t('searchbar.filters.name') }}
          </button>
          <button
            class="btn btn-outline-primary rounded me-2 btn-sm text-capitalize"
            type="button"
            @click="$store.commit('changeInput', 'id')"
          >
            {{ $t('searchbar.filters.id') }}
          </button>
          <button
            class="btn btn-outline-primary me-2 btn-sm text-capitalize"
            type="button"
            @click="$store.commit('changeInput', 'type')"
          >
            {{ $t('searchbar.filters.type') }}
          </button>
          <button
            class="btn btn-outline-primary me-2 btn-sm text-capitalize"
            type="button"
            @click="$store.commit('changeInput', 'specie')"
          >
            {{ $t('searchbar.filters.species') }}
          </button>
        </div>
        <div
          v-if="$store.state.search === 'name'"
          class="col-md-12 d-flex align-items-center"
        >
          <input
            type="text"
            class="form-control mt-3 bg-secondary bg-opacity-25"
            :placeholder="$t('searchbar.filters.searchByName')"
            @keyup="(e) => getPokemonsByName(e.target.value.toLowerCase())"
          >
        </div>
        <div
          v-if="$store.state.search === 'id'"
          class="col-md-12 d-flex align-items-center"
        >
          <input
            type="text"
            class="form-control mt-3 bg-secondary bg-opacity-25"
            :placeholder="$t('searchbar.filters.searchById')"
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
            :placeholder="$t('searchbar.filters.searchBySpecies')"
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
              {{ $t('searchbar.filters.searchByType') }}
            </option>
            <option value="grass">
              {{ $t('searchbar.types.grass') }}
            </option>
            <option value="bug">
              {{ $t('searchbar.types.bug') }}
            </option>
            <option value="fire">
              {{ $t('searchbar.types.fire') }}
            </option>
            <option value="normal">
              {{ $t('searchbar.types.normal') }}
            </option>
            <option value="water">
              {{ $t('searchbar.types.water') }}
            </option>
            <option value="electric">
              {{ $t('searchbar.types.electric') }}
            </option>
            <option value="ice">
              {{ $t('searchbar.types.ice') }}
            </option>
            <option value="fighting">
              {{ $t('searchbar.types.fighting') }}
            </option>
            <option value="poison">
              {{ $t('searchbar.types.poison') }}
            </option>
            <option value="ground">
              {{ $t('searchbar.types.ground') }}
            </option>
            <option value="flying">
              {{ $t('searchbar.types.flying') }}
            </option>
            <option value="psychic">
              {{ $t('searchbar.types.psychic') }}
            </option>
            <option value="rock">
              {{ $t('searchbar.types.rock') }}
            </option>
            <option value="ghost">
              {{ $t('searchbar.types.ghost') }}
            </option>
            <option value="dragon">
              {{ $t('searchbar.types.dragon') }}
            </option>
            <option value="dark">
              {{ $t('searchbar.types.dark') }}
            </option>
            <option value="steel">
              {{ $t('searchbar.types.steel') }}
            </option>
            <option value="fairy">
              {{ $t('searchbar.types.fairy') }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>