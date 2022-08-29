<template>
 <p>
  {{ title }}
 </p>
 <p>
  {{ source }}
 </p>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { getSource, getCurrentPagesName } from '@/libs/public'
export default defineComponent({
  name: 'Menu5Index',
  setup () {
    const title = `This is ${getCurrentPagesName().value}`
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
