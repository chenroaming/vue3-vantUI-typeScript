<template>
  <div class="home">
    <HomePage></HomePage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomePage from '@/layout/index.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HomePage
  }
})
</script>

<style scoped lang="scss">
  .home {
    background: #f7f8fa;
    min-height: 100vh;
  }
</style>
