<script setup>

import {onMounted} from 'vue'

import { useStore } from 'vuex'

import PokemonModalEN from './EN/PokemonModal.vue'
import PokemonModalES from './ES/PokemonModal.vue'
import PokemonModalPT from './PT/PokemonModal.vue'

import { typeColors, bgColors } from '../assets/themes/index.js'

const store = useStore()

onMounted( () => {
  document.getElementById('scrollContainer').addEventListener('scroll', handleScroll)
})

const getPokemonInfo = (id) => {
  store.dispatch('getPokemonsInfo', id)
  store.dispatch('getPokemonsEvolution', id)
}

const getTypeColor = (type) => {
  const lowercaseType = type.toLowerCase()
  return typeColors[lowercaseType] || 'gray'
}

const getBgColor = (type) => {
  const lowercaseType = type.toLowerCase()
  return bgColors[lowercaseType] || 'gray'
}

const getMorePokemons = () => {
  store.getters.updateNewPokemonsEnd
  store.dispatch('getPokemons')
}

const handleScroll = async (event) => {
  let element = event.target

  const scrollPosition = element.scrollTop + element.clientHeight
  const scrollLimit = element.scrollHeight - 20

  if (scrollPosition >= scrollLimit) {
    await getMorePokemons()
  }
}
</script>

<template>
  <ul
    id="scrollContainer"
    class="container infiniteScroll bg-white bg-opacity-75 p-4 d-flex align-items-center justify-content-center flex-wrap gap-4"
  >
    <li
      v-for="pokemon in $store.getters.allPokemonsPage"
      :key="pokemon.data.name"
      class="card pointer p-2"
      style="width: 18rem;"
      data-bs-toggle="modal"
      data-bs-target="#pokemonModal"
      :style="{ backgroundColor: getBgColor(pokemon.data.types[0].type.name) }"
      @click="getPokemonInfo(pokemon.data.id)"
    >
      <h5 class="fs-4 text-secondary-10">
        #{{ pokemon.data.id }}
      </h5>
      <img
        :src="pokemon.data.sprites.other['official-artwork'].front_default"
        class="card-img-top custom-image mx-auto d-block"
        alt="{{pokemon.data.name}}"
      >
      <div class="card-body">
        <h4 class="card-title text-light text-center text-capitalize mb-3">
          {{ pokemon.data.name }}
        </h4>
        <div
          v-if="pokemon.data.types"
          class="card-text text-light text-center"
        >
          <div
            v-for="typeInfo in pokemon.data.types"
            :key="typeInfo.type.name"
            class="badge p-2 text-wrap me-2 text-capitalize fs-6"
            :style="{ backgroundColor: getTypeColor(typeInfo.type.name)}"
          >
            <img
              :src="`/assets/typeIcons/${typeInfo.type.name}.png`"
              alt="Pokemon type icon"
              class="type-icon"
            >
            {{ typeInfo.type.name }}
          </div>
        </div>
      </div>
    </li>
  </ul>
  <PokemonModalEN v-if="$store.state.language == 'en'" />
  <PokemonModalES v-if="$store.state.language == 'es'" />
  <PokemonModalPT v-if="$store.state.language == 'pt'" />
</template>

<style scoped>
.infiniteScroll {
    margin: 0 auto;
    list-style: none;
    height: 80vh;
    padding: 12px 20px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #d5d8da rgba(34,34,34,1);
  }

  .custom-image {
  opacity: 100%;
  height: 140px;
  width: 140px;
  object-fit: cover;

  &:hover{
    opacity: 60%;
  }
}

.type-icon {
  opacity: 100%;
  height: 16px;
  width: 16px;
  object-fit: cover;
  fill: white;
}

.pointer {
  cursor: pointer;
}

</style>import { onMounted } from 'vue';onMounted, 
