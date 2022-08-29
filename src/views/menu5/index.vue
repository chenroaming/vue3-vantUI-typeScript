<template>
 <p>
  {{ title }}
 </p>
 <p>
  {{ source }}
 </p>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'
import { getSource } from '@/libs/public'
export default defineComponent({
  name: 'Menu5Index',
  setup () {
    const title = ref<string>('这是示例菜单5')
    const source = getSource()
    return {
      title,
      source
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
