<script setup>
import { ref } from 'vue'
import { useVirtualList, useInfiniteScroll } from '@vueuse/core'

const data = ref(Array.from(Array(50).keys(), () => 'lorem ipsum'))

const { list, containerProps, wrapperProps } = useVirtualList(data, {
  itemHeight: 96,
  overscan: 2
})

useInfiniteScroll(
  containerProps.ref,
  () => {
    data.value.push(...Array.from(Array(10).keys(), () => 'more lorem ipsum'))
  },
  { distance: 10 }
)

</script>

<template>
  <div
    v-bind="containerProps"
    class="h-screen container"
  >
    <div v-bind="wrapperProps">
      <div
        v-for="{index, data} in list"
        :key="index"
        class="h-80"
      >
        <h2>Item #{{ index }}</h2>
        <p>{{ data }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .h-screen {
    height: 50dvh;
  }

  .h-80 {
    height: 80px;
    margin-bottom: 16px;
  }

</style>