<template>
 <div>
  {{ msg }}
  {{ count }}
  <van-button type="primary" size="mini" @click="add">测试keepalive</van-button>
 </div>
</template>

<script lang='ts'>
import { ref, defineComponent, onActivated } from 'vue'
export default defineComponent({
  name: 'homeIndex',
  setup () {
    const msg = ref<string>('首页')
    const count = ref<number>(0)
    const add = ():void => {
      count.value++
    }
    onActivated(():void => {
      // 切换至该页面时会执行该生命周期钩子，类似各种app/小程序中的onShow钩子
      console.log('homePage is activated!!!')
    })
    return {
      msg,
      count,
      add
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
