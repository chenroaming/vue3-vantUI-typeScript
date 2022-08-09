<template>
 <div>
  {{ msg }}
 </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'minePage',
  setup () {
    const msg = ref<string>('个人中心页面')
    return {
      msg
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
