<template>
 <div>
  <span class="msg">{{ msg }}</span>
  <van-button @click="goTo" size="mini">点击跳转</van-button>
 </div>
</template>

<script lang="ts">
import { ref, defineComponent, onActivated } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'tabBarPage3',
  setup () {
    const msg = ref<string>('this is tabBarPage3')
    const go = useRouter()
    const goTo = () => {
      go.push({
        path: '/menu1'
      })
    }
    onActivated(():void => {
      // 切换至该页面时会执行该生命周期钩子，类似各种app/小程序中的onShow钩子
      console.log('tabBarPage3 is activated!!!')
    })
    return {
      msg,
      goTo
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
