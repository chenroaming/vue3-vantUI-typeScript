<template>
 <div>
  {{ msg }}
  <div class="container">
    <van-button @click="handleClick">测试接口</van-button>
  </div>
 </div>
</template>

<script lang="ts">
import api from '@/api'
import { ref, defineComponent, onActivated } from 'vue'
export default defineComponent({
  name: 'minePage',
  setup () {
    const msg = ref<string>('个人中心页面')
    const handleClick = ():void => {
      api.demo.login()
    }
    onActivated(():void => {
      // 切换至该页面时会执行该生命周期钩子，类似各种app/小程序中的onShow钩子
      console.log('minePage is activated!!!')
    })
    return {
      msg,
      handleClick
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
