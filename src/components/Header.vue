<template>
  <header class="bg-light">
    <div class="container p-2 d-flex align-items-center justify-content-between">
      <h1>
        <img
          src="/images/logo.svg"
          alt="logo pokédex"
        >
      </h1>
      <div class="d-flex align-items-center justify-content-end">
        <button
          class="btn btn-outline-secondary ms-2"
          @click="$store.commit('changeLanguage', 'en')"
        >
          <img src="/images/en.svg">
          EN
        </button>
        <button
          class="btn btn-outline-secondary ms-2"
          @click="$store.commit('changeLanguage', 'es')"
        >
          <img src="/images/es.svg">
          ES
        </button>
        <button
          class="btn btn-outline-secondary ms-2"
          @click="$store.commit('changeLanguage', 'pt')"
        >
          <img src="/images/pt.svg">
          PT-BR
        </button>
      </div>
    </div>
  </header>
</template>

<!-- <script setup>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

const store = useStore()
const loading = ref(true)

onMounted(async () => {
  try {
    await store.dispatch('getPokemons')
    loading.value = false
  } catch (error) {
    console.error('Erro ao buscar pokemons:', error)
  }
})
</script> -->