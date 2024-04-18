<script setup>

import {ref} from 'vue'

import getPokemons2 from '../services/getPokemons2'

import { useInfiniteScroll } from '@vueuse/core'

const listEl = ref(null)

const fetchingData = ref(null)

const pokemonsToShow = 21

const pokemonsList = ref(await getPokemons2(pokemonsToShow, 0))

console.log(pokemonsList.value)

const getPokemonsOnScroll = async () => {
  fetchingData.value = true
  await newPromise((res) => setTimeout(res, 2000))
  const newPokemons = await getPokemons2(
    pokemonsToShow,
    pokemonsList.value.length
  )

  pokemonsList.value.push(...newPokemons)
}

useInfiniteScroll(
  listEl,
  async () => {
    await getPokemonsOnScroll()
  },
  {distance: 20}
)

</script>


<template>
  <div>
    <ul
      ref="listEl"
      class="infiniteScroll"
    >
      <li
        v-for="pokemon in pokemonsList"
        :key="pokemon.name"
        class="text-center text-light bg-success mb-3"
      >
        {{ pokemon.name }}
      </li>
      <p v-show="fetchingData">
        Fetching More data.. please hold
      </p>
    </ul>
  </div>
</template>

<style scoped>
  .infiniteScroll {
    margin: 0 auto;
    background-color: #41b480;
    list-style: none;
    max-height: 400px;
    width: 600px;
    overflow: scroll;
    padding: 12px 20px;
  }
</style>