<template>
 <div>
  {{ msg }}
 </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'searchPage',
  setup () {
    const msg = ref<string>('搜索页面')
    return {
      msg
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
