<template>
  <article class="d-inline-flex align-items-center justify-content-center py-2 px-4 bg-dark bg-opacity-75 rounded">
    <div class="d-block text-white me-3">
      <h5>#1</h5>
      <h4 class="fs-2">
        Bulbasaur
      </h4>
      <div>
        <span class="badge text-bg-success p-2 text-wrap me-2">
          <img src="/images/leaf.svg">
          Grass
        </span>
        <span class="badge text-bg-primary p-2 text-wrap text-white">
          <img src="/images/skull.svg">
          Poison
        </span>
      </div>
    </div>
    <div>
      <img
        class=""
        src="/images/bulba.png"
      >
    </div>
  </article>
</template>

<style scoped>
.custom-image {
  opacity: 70%;

  &:hover{
    opacity: 100%;
  }
}
</style>