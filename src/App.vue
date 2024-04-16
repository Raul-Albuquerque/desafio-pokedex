<script setup>
import { reactive } from 'vue'

import Header from './components/Header.vue'
import CardList from './components/CardList.vue'

const state = reactive({
  language: 'pt'
})

const setLanguage = (language) => {
  return state.language = language
}

</script>

<template>
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
        @click="setLanguage('pt')"
      >
        <img src="/images/pt.svg">
        PT-BR
      </button>
      <button
        class="btn btn-outline-secondary ms-2"
        @click="setLanguage('es')"
      >
        <img src="/images/es.svg">
        ES
      </button>
    </div>
  </Header>
</template>
