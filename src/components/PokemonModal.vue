<script setup>


</script>

<template>
  <!-- Modal -->
  <div
    id="pokemonModal"
    class="modal fade"
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
              <div class="col-md-6 text-center d-flex align-items-center justify-content-center gap-2">
                <div v-if="$store.state.pokemonInfo.types">
                  <h4 class="mb-3">
                    Types
                  </h4>
                  <span
                    v-for="typeInfo in $store.state.pokemonInfo.types"
                    :key="typeInfo.type.name"
                    class="badge border border-secondary p-2 text-secondary me-2 text-capitalize"
                  >
                    {{ typeInfo.type.name }}
                  </span>
                </div>
              </div>
              <hr>
              <div class="row text-center">
                <h4 class="mb-3">
                  Sprites
                </h4>
                <div class="row">
                  <img
                    class="col-md-3 rounded mx-auto d-block"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${$store.state.pokemonInfo.id}.png`"
                  >
                  <img
                    class="col-md-3 rounded mx-auto d-block"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${$store.state.pokemonInfo.id}.png`"
                  >
                  <img
                    class="col-md-3 rounded mx-auto d-block"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${$store.state.pokemonInfo.id}.png`"
                  >
                  <img
                    class="col-md-3 rounded mx-auto d-block"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${$store.state.pokemonInfo.id}.png`"
                  >
                </div>
              </div>
              <hr>
              <div class="row text-center mb-3">
                <h4 class="mb-3">
                  Attack Moves
                </h4>
                <div class="col-md-12 text-center d-flex align-items-center justify-content-center gap-3 flex-wrap">
                  <div v-if="$store.state.pokemonInfo.types">
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
              <div class="row text-center">
                <h4 class="mb-3 text-start">
                  Evolution
                </h4>
                <div class="col-md-12 text-center d-flex align-items-center justify-content-center gap-3 flex-wrap" />
              </div>
              <hr>
              <div class="row text-center">
                <h4 class="mb-3 text-start">
                  Game Indices
                </h4>
                <div v-if="$store.state.pokemonInfo.game_indices">
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
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              Save changes
            </button>
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

</style>