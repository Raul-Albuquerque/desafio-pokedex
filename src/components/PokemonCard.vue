<script setup>

import PokemonModal from './PokemonModal.vue'


</script>

<template>
  <article
    class="col-3 d-inline-flex align-items-center py-2 px-4 bg-dark bg-opacity-75 rounded"
  >
    <div class="d-block text-white me-3">
      <h5>#1</h5>
      <h4 class="fs-2">
        Bulbasaur
      </h4>
    </div>
    <img
      src="/images/bulba.png"
      alt=""
    >
  </article>
  <!-- <PokemonModal /> -->
</template>

<style scoped>
.custom-image {
  opacity: 70%;

  &:hover{
    opacity: 100%;
  }
}
</style>