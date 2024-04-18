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
      console.log(store.state.pokemons)
    })
})


</script>

<template>
  <Header />
  <main class="custom-bg">
    <SearchBar />
    <CardList />
  </main>
</template>

<style scoped>
  .custom-bg {
    background-color: #000;
    background-image: url(images/custom-bg.png);
    background-repeat: repeat;
    height: 90dvh;
  }
</style>onMounted, import store from './store';
useStore, 
