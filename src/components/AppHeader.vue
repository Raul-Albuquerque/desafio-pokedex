<template>
  <header class="bg-light">
    <div class="container p-2 d-flex align-items-center justify-content-between">
      <h1>
        <a
          class="navbar-brand"
          href="/"
        >
          <img
            src="/assets/images/logo.svg"
            alt="logo pokédex"
          >
        </a>
      </h1>
      <div class="d-flex align-items-center justify-content-end">
        <button
          class="btn btn-outline-secondary ms-2 btn-control"
          @click="$store.commit('changeLanguage', 'en')"
        >
          <img src="/assets/images/en.svg">
          EN
        </button>
        <button
          class="btn btn-outline-secondary ms-2 btn-control"
          @click="$store.commit('changeLanguage', 'es')"
        >
          <img src="/assets/images/es.svg">
          ES
        </button>
        <button
          class="btn btn-outline-secondary ms-2 btn-control"
          @click="$store.commit('changeLanguage', 'pt')"
        >
          <img src="/assets/images/pt.svg">
          PT
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped>
  @media (max-width: 430px) {
    .btn-control {
      font-size: 12px;
    }
  }
</style>