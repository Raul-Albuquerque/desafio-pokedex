<script setup>

import {ref} from 'vue'

import getAllPokemons from '../services/getAllPokemons'

import { useInfiniteScroll } from '@vueuse/core'

const listEl = ref(null)

const fetchingData = ref(null)

const pokemonsToShow = 42

const pokemonsList = ref(await getAllPokemons(pokemonsToShow, 0))

if(!pokemonsList.value.id) {
  pokemonsList.value.forEach((item, index) => {
    item.id = index + 1
  })
}

const getPokemonsOnScroll = async () => {
  fetchingData.value = true
  await new Promise((res) => setTimeout(res, 1000))
  const newPokemons = await getAllPokemons(
    pokemonsToShow,
    pokemonsList.value.length
  )

  pokemonsList.value.forEach((item, index) => {
    item.id = index + 1
  })

  pokemonsList.value.push(...newPokemons)
}

useInfiniteScroll(
  listEl,
  async () => {
    await getPokemonsOnScroll()
  },
  {distance: 600}
)

</script>


<template>
  <div>
    <ul
      ref="listEl"
      class="infiniteScroll container d-flex align-items-center justify-content-around flex-wrap gap-5 py-5 bg-black bg-opacity-75"
    >
      <li
        v-for="pokemon in pokemonsList"
        :key="pokemon.name"
        class="col-md-3 d-inline-flex align-items-center justify-content-start bg-secondary bg-opacity-25 rounded py-4 px-3 position-relative pointer"
      >
        <div class="d-block text-white me-2">
          <h5>#{{ pokemon.id }}</h5>
          <h4 class="fs-3 text-capitalize">
            {{ pokemon.name }}
          </h4>
          <div>
            <span class="badge text-bg-success p-2 text-wrap me-2">
              <img src="/images/leaf.svg">
            </span>
          </div>
        </div>
        <div>
          <img
            class="custom-image z-2 position-absolute p-2"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .infiniteScroll {
    margin: 0 auto;
    list-style: none;
    height: 90dvh;
    padding: 12px 20px;
    overflow-y: scroll;
    scrollbar-width: none; /* Para Firefox */
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
    display: none; /* Para Chrome, Safari e Edge */
    }
  }

  .custom-image {
  opacity: 60%;
  height: 160px;
  width: 160px;
  object-fit: cover;
  top: -40px;
  right: 0px;

  &:hover{
    opacity: 100%;
  }
}

.pointer {
  cursor: pointer;
}
</style>