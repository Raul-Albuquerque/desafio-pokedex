<script setup>
import { onMounted } from 'vue'

import { useStore } from 'vuex'

import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import CardList from './components/CardList.vue'


const store = useStore()

onMounted( () => {
  store.dispatch('getPokemons')
    .then(() => {
      console.log('ok')
    })
})


</script>

<template>
  <Header />
  <main class="">
    <SearchBar />
    <CardList />
  </main>
</template>