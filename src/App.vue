<script setup>
import { onMounted } from 'vue'

import { useStore } from 'vuex'

import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import CardList from './components/CardList.vue'
import PokemonCard from './components/PokemonCard.vue'


const store = useStore()

onMounted( () => {
  store.dispatch('getPokemons')
    .then(() => {
      console.log(store.state.pokemons)
    })
})


</script>

<template>
  <Header />
  <SearchBar />
  <CardList />
</template>