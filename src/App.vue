<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import Header from './components/Header.vue'
import SearchBarEN from './components/EN/SearchBar.vue'
import SearchBarES from './components/ES/SearchBar.vue'
import SearchBarPT from './components/PT/SearchBar.vue'
import PokemonCard from './components/PokemonCard.vue'

const store = useStore()

onMounted( () => {
  store.dispatch('getPokemons')
  store.dispatch('getAllPokemons')
})

// console.log(store.getters.allPokemonsPage)

</script>

<template>
  <Header />
  <SearchBarES v-if="$store.state.language == 'es'" />
  <SearchBarPT v-if="$store.state.language == 'pt'" />
  <SearchBarEN v-if="$store.state.language == 'en'" />
  <PokemonCard />
</template>