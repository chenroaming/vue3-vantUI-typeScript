<template>
 <div>
  {{ msg }}
 </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'friendsPage',
  setup () {
    const msg = ref<string>('好友页面')
    return {
      msg
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
