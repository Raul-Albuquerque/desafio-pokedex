<script setup>
import { reactive } from 'vue'

import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'

const state = reactive({
  language: 'pt'
})

const setLanguage = (language) => {
  return state.language = language
}

</script>

<template class="custom-bg">
  <Header>
    <div class="d-flex align-items-center justify-content-end">
      <button
        class="btn btn-outline-secondary ms-2"
        @click="setLanguage('en')"
      >
        <img src="/images/en.svg">
        EN
      </button>
      <button
        class="btn btn-outline-secondary ms-2"
        @click="setLanguage('es')"
      >
        <img src="/images/es.svg">
        ES
      </button>
      <button
        class="btn btn-outline-secondary ms-2"
        @click="setLanguage('pt')"
      >
        <img src="/images/pt.svg">
        PT-BR
      </button>
    </div>
  </Header>
  <SearchBar :current-language="state.language" />
</template>

<style scoped>
  .custom-bg {
    background-image: url(/public/images/custom-bg.png);
    background-repeat: repeat;
  }
</style>