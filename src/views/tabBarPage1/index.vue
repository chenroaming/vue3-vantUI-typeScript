<template>
 <div>
  <span class="msg">{{ msg }}</span>
  <p class="msg">{{ `路由跳转后，观察该计数是否会缓存：${count}` }}</p>
  <div>
    <van-button type="primary" size="mini" @click="add">测试keepalive，点击增加计数</van-button>
  </div>
 </div>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'
import { onShow, getCurrentPagesName } from '@/libs/public'
export default defineComponent({
  name: 'tabBarPage1',
  setup () {
    const msg = ref<string>(`this is ${getCurrentPagesName().value}`)
    const count = ref<number>(0)
    const add = ():void => {
      count.value++
    }
    onShow()
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
