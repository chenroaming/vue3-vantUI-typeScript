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
  name: 'Menu1Index',
  setup () {
    const title = ref<string>('这是示例菜单1')
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
