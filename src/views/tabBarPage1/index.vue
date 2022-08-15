<template>
 <div>
  {{ msg }}
  <p>{{ `路由跳转后，观察该计数是否会缓存：${count}` }}</p>
  <div>
    <van-button type="primary" size="mini" @click="add">测试keepalive，点击增加计数</van-button>
  </div>
 </div>
</template>

<script lang='ts'>
import { ref, defineComponent, onActivated } from 'vue'
export default defineComponent({
  name: 'tabBarPage1',
  setup () {
    const msg = ref<string>('this is tabBarPage1')
    const count = ref<number>(0)
    const add = ():void => {
      count.value++
    }
    onActivated(():void => {
      // 切换至该页面时会执行该生命周期钩子，类似各种app/小程序中的onShow钩子
      console.log('tabBarPage1 is activated!!!')
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
