<template>
 <div>
  {{ title }}
 </div>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Menu1Index',
  setup () {
    const title = ref<string>('这是示例菜单1')
    return {
      title
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
