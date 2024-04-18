<script setup>
import { onMounted } from 'vue'

import { useStore } from 'vuex'

import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import CardList from './components/CardList.vue'
import Demo from './components/Demo.vue'


const store = useStore()

onMounted( () => {
  store.dispatch('getPokemons')
    .then(() => {
      console.log('ok')
      console.log(store.state.pokemons)
      console.log(store.state.endpoints)
    })
})


</script>

<template>
  <Header />
  <main class="">
    <SearchBar />
    <!-- <CardList /> -->
    <Demo />
  </main>
</template>