<template>
 <div>
  {{ msg }}
 </div>
</template>

<script lang="ts">
import { ref, defineComponent, onActivated } from 'vue'
export default defineComponent({
  name: 'friendsPage',
  setup () {
    const msg = ref<string>('好友页面')
    onActivated(():void => {
      // 切换至该页面时会执行该生命周期钩子，类似各种app/小程序中的onShow钩子
      console.log('friendsPage is activated!!!')
    })
    return {
      msg
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
