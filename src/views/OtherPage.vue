<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/layout/Header/index.vue'

export default defineComponent({
  name: 'OtherPage',
  components: {
    Header
  },
  setup () {
    return {

    }
  }
})
</script>
