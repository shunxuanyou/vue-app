<template>
  <IndexPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IndexPage from './views/index/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    IndexPage
  }
})
</script>

<style>
</style>
