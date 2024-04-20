<script setup>
</script>

<template>
  <ul
    ref="listEl"
    class="infiniteScroll container d-flex align-items-center justify-content-around flex-wrap gap-5 py-5 bg-black bg-opacity-75"
  >
    <li
      v-for="pokemon in $store.getters.allPokemonsPage"
      :key="pokemon.data.name"
      class="col-md-3 d-inline-flex align-items-center justify-content-start bg-secondary bg-opacity-25 rounded py-4 px-3 position-relative pointer"
    >
      <div class="d-block text-white me-2">
        <h5>#{{ pokemon.data.id }}</h5>
        <h4 class="fs-3 text-capitalize">
          {{ pokemon.data.name }}
        </h4>
        <div v-if="pokemon.data.types">
          <span
            v-for="typeInfo in pokemon.data.types"
            :key="typeInfo.type.name"
            class="badge text-bg-success p-2 text-wrap me-2 text-capitalize"
          >
            <img src="/images/leaf.svg"> {{ typeInfo.type.name }}
          </span>
        </div>
      </div>
      <div>
        <img
          class="custom-image z-2 position-absolute p-2"
          :src="pokemon.data.sprites.other['official-artwork'].front_default"
        >
      </div>
    </li>
  </ul>
  <!-- <PokemonModal /> -->
</template>

<style scoped>
  .infiniteScroll {
    margin: 0 auto;
    list-style: none;
    height: 70dvh;
    padding: 12px 20px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #d5d8da rgba(34,34,34,1);
  }

  .custom-image {
  opacity: 60%;
  height: 160px;
  width: 160px;
  object-fit: cover;
  top: -40px;
  right: 0px;

  &:hover{
    opacity: 100%;
    top: -30px;
  right: 0px;
  }
}

.pointer {
  cursor: pointer;
}
</style>import { useStore } from 'vuex';, { useStore }import PokemonModalVue from './PokemonModal.vue';

