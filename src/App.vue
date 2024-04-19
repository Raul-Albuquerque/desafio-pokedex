<script setup>
import { onMounted } from 'vue'

import { useStore } from 'vuex'

import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import PokemonsList from './components/PokemonsList.vue'

const store = useStore()

onMounted( () => {
  store.dispatch('getPokemons')
})

</script>

<template>
  <Header />
  <!-- <PokemonListTest /> -->
  <SearchBar />
  <Suspense>
    <PokemonsList />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>