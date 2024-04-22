<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import Header from './components/AppHeader.vue'
import SearchBar from './components/SearchBar.vue'
import PokemonCard from './components/PokemonCard.vue'

const store = useStore()

onMounted( () => {
  store.dispatch('getPokemons')
  store.dispatch('getAllPokemons')
})

</script>

<template>
  <Header />
  <SearchBar />
  <PokemonCard />
</template>