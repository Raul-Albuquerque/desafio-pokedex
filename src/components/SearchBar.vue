<script setup>

const props = defineProps(['currentLanguage'])

</script>

<template>
  <section class="pt-2">
    <div
      v-if="props.currentLanguage === 'en'"
      class="container text-center mt-5 pt-4 pb-3 bg-light rounded-top"
    >
      <h2 class="">
        Find Pokémon
      </h2>
      <h5 class="">
        Search your favorite pokemon by name, id, type or specie.
      </h5>
      <form class="row p-4">
        <select
          class="col-md-2 rounded bg-secondary bg-opacity-25"
        >
          <option selected>
            Search by
          </option>
          <option value="1">
            Name
          </option>
          <option value="2">
            Id
          </option>
          <option value="3">
            Type
          </option>
          <option value="4">
            Specie
          </option>
        </select>
        <div class="col-md-4">
          <input
            id="name"
            type="text"
            class="form-control border bg-secondary bg-opacity-25"
          >
        </div>
      </form>
    </div>

    <div
      v-else-if="props.currentLanguage === 'es'"
      class="container text-center mt-5 pt-4 pb-3 bg-light rounded-top"
    >
      <h2 class="">
        Encontrar el pokemon
      </h2>
      <h5 class="">
        Busca tu pokemon favorito por nombre, id, tipo o especie.
      </h5>
      <form class="row p-4">
        <select
          class="col-md-2 rounded bg-secondary bg-opacity-25"
        >
          <option selected>
            Buscar
          </option>
          <option value="1">
            Nombre
          </option>
          <option value="2">
            Id
          </option>
          <option value="3">
            Tipo
          </option>
          <option value="4">
            Especie
          </option>
        </select>
        <div class="col-md-4">
          <input
            id="name"
            type="text"
            class="form-control border bg-secondary bg-opacity-25"
          >
        </div>
      </form>
    </div>

    <div
      v-else
      class="container text-center mt-5 pt-4 pb-3 border border-primary border-opacity-10 bg-light rounded-top"
    >
      <h2 class="">
        Encontre o pokémon
      </h2>
      <h5 class="">
        Pesquise o seu pokémon favorito pelo nome, id, tipo ou espécie.
      </h5>
      <form class="row p-4">
        <select
          class="col-md-2 rounded bg-secondary bg-opacity-25"
        >
          <option selected>
            Pesquisar por
          </option>
          <option value="1">
            Nome
          </option>
          <option value="2">
            Id
          </option>
          <option value="3">
            Tipo
          </option>
          <option value="4">
            Espécie
          </option>
        </select>
        <div class="col-md-4">
          <input
            id="name"
            type="text"
            class="form-control border bg-secondary bg-opacity-25"
          >
        </div>
      </form>
    </div>
  </section>
</template>