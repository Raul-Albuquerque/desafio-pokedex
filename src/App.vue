<script setup>
import { onMounted } from 'vue'

import { useStore } from 'vuex'

import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import PokemonCard from './components/PokemonCard.vue'

const store = useStore()

onMounted( () => {
  store.dispatch('getPokemons')
})

</script>

<template>
  <Header />
  <SearchBar />
  <Suspense>
    <PokemonCard />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>