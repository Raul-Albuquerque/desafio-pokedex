<script setup>

import PokemonCard from './PokemonCard.vue'

</script>


<template>
  <section class="">
    <div
      class="container bg-white bg-opacity-25 p-4 d-flex align-items-center justify-content-center gap-5 flex-wrap rounded-bottom"
    >
      <PokemonCard />
    </div>
  </section>
</template>

<style scoped>
.custom-bg {
  background-color: #fff;
  background-image: url('/images/custom-bg.png');
}
</style>