<script setup>

import PokemonModal from './PokemonModal.vue'


</script>

<template>
  <article
    v-for="pokemon, index in $store.state.pokemons"
    :key="pokemon.name"
    class="col-md-3 d-inline-flex align-items-center justify-content-start bg-dark bg-opacity-75 rounded py-4 px-3 position-relative pointer"
  >
    <div class="d-block text-white me-2">
      <h5>#{{ index + 1 }}</h5>
      <h4 class="fs-3 text-capitalize">
        {{ pokemon.name }}
      </h4>
      <div>
        <span class="badge text-bg-success p-2 text-wrap me-2">
          <img src="/images/leaf.svg">
          Grass
        </span>
        <span class="badge text-bg-primary p-2 text-wrap text-white">
          <img src="/images/skull.svg">
          Poison
        </span>
      </div>
    </div>
    <div>
      <img
        class="custom-image z-2 position-absolute p-2"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`"
      >
    </div>
  </article>
  <!-- <PokemonModal /> -->
</template>

<style scoped>
.custom-image {
  opacity: 60%;
  height: 160px;
  width: 160px;
  object-fit: cover;
  top: -40px;
  right: 0px;

  &:hover{
    opacity: 100%;
  }
}

.pointer {
  cursor: pointer;
}
</style>