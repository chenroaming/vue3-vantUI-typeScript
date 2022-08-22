<template>
 <div>
    <span class="msg">{{ msg }}</span>
    <div ref="echartsBox"></div>
 </div>
</template>

<script lang="ts">
import { ref, defineComponent, onActivated } from 'vue'
import type { ECOption } from '@/libs/echarts'
export default defineComponent({
  name: 'tabBarPage2',
  setup () {
    const msg = ref<string>('this is tabBarPage2')
    const echartsBox = ref()
    const option:ECOption = {
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25]
        }
      ]
    }
    onActivated(():void => {
      // 切换至该页面时会执行该生命周期钩子，类似各种app/小程序中的onShow钩子
      console.log('tabBarPage2 is activated!!!')
    })
    return {
      msg,
      echartsBox
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
