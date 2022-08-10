<template>
 <div>
  {{ msg }}
 </div>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'homeIndex',
  setup () {
    const msg = ref<string>('首页')
    return {
      msg
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
