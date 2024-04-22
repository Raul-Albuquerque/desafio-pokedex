<script setup>
import {onMounted} from 'vue'
import { useStore } from 'vuex'

import { typeColors } from '@/assets/themes/index.js'

const getTypeColor = (type) => {
  const lowercaseType = type.toLowerCase()
  return typeColors[lowercaseType] || 'gray'
}

const store = useStore()

</script>

<template>
  <div
    id="pokemonModal"
    class="modal fade modalControl"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            id="exampleModalLabel"
            class="modal-title fs-5 text-capitalize"
          >
            {{ $store.state.pokemonInfo.name }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 text-center">
                <img
                  class="rounded mx-auto d-block custom-image"
                  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${$store.state.pokemonInfo.id}.png`"
                >
              </div>
              <div class="col-md-6 text-center d-flex align-items-center justify-content-center gap-2 pb-3">
                <div v-if="$store.state.pokemonInfo.types">
                  <h4 class="mb-3">
                    {{ $t('pokemonModal.types') }}
                  </h4>
                  <span
                    v-for="typeInfo in $store.state.pokemonInfo.types"
                    :key="typeInfo.type.name"
                    class="badge p-2 me-2 text-capitalize"
                    :style="{ backgroundColor: getTypeColor(typeInfo.type.name)}"
                  >
                    <img
                      :src="`/assets/typeIcons/${typeInfo.type.name}.png`"
                      alt="Pokemon type icon"
                      class="type-icon"
                    >
                    {{ typeInfo.type.name }}
                  </span>
                </div>
              </div>
              <hr>
              <div class="row text-start pb-3">
                <h4 class="mb-3">
                  {{ $t('pokemonModal.sprites') }}
                </h4>
                <div class="row">
                  <img
                    class="col-md-3 rounded mx-auto d-block sprite-image"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${$store.state.pokemonInfo.id}.png`"
                  >
                  <img
                    class="col-md-3 rounded mx-auto d-block sprite-image"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${$store.state.pokemonInfo.id}.png`"
                  >
                  <img
                    class="col-md-3 rounded mx-auto d-block sprite-image"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${$store.state.pokemonInfo.id}.png`"
                  >
                  <img
                    class="col-md-3 rounded mx-auto d-block sprite-image"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${$store.state.pokemonInfo.id}.png`"
                  >
                </div>
              </div>
              <hr>
              <div class="row text-start mb-3 pb-3">
                <h4 class="mb-3">
                  {{ $t('pokemonModal.attackMoves') }}
                </h4>
                <div class="col-md-12 text-center">
                  <div
                    v-if="$store.state.pokemonInfo.types"
                    class="d-flex align-items-center justify-content-between flex-wrap"
                  >
                    <span
                      v-for="move in $store.state.pokemonInfo.moves"
                      :key="move.move.name"
                      class="badge border border-secondary p-1 text-secondary m-1 text-capitalize"
                    >
                      {{ move.move.name }}
                    </span>
                  </div>
                </div>
              </div>
              <hr>
              <div
                class="
                row"
              >
                <h4 class="mb-3">
                  {{ $t('pokemonModal.evolutions') }}
                </h4>
              </div>
              <div
                v-for="pokemon in $store.state.evolutionChain"
                :key="pokemon.name"
                class="row pb-2"
              >
                <div class="col-md-6 text-end d-flex align-items-center justify-content-end gap-2">
                  <img
                    class="rounded d-block evolution-image"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
                  >
                </div>
                <div class="col-md-6 text-center d-flex align-items-center gap-2">
                  <div>
                    <h5 class="mb-3 text-capitalize">
                      {{ pokemon.name }}
                    </h5>
                  </div>
                </div>
              </div>
              <hr>
              <div class="row text-start">
                <div class="row">
                  <h4 class="mb-3">
                    {{ $t('pokemonModal.gameIndices') }}
                  </h4>
                  <div
                    v-if="$store.state.pokemonInfo.game_indices"
                    class="d-flex align-items-center justify-content-between flex-wrap"
                  >
                    <span
                      v-for="game in $store.state.pokemonInfo.game_indices"
                      :key="game.version.name"
                      class="badge border border-secondary p-1 text-secondary m-1 text-capitalize"
                    >
                      {{ game.version.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.custom-image {
  width: 160px;
  height: 160px;
}

.evolution-image {
  width: 100px;
  height: 100px;
}

.sprite-image {
  max-width: 100px;
  width: 100%;
}

</style>