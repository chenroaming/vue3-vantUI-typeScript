<template>
 <div>
    <span class="msg">{{ msg }}</span>
    <div ref="echartsBox" id="echartsBox"></div>
 </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onActivated } from 'vue'
import type { ECOption } from '@/libs/echarts'
import echarts from '@/libs/echarts'
export default defineComponent({
  name: 'tabBarPage2',
  setup () {
    const msg = ref<string>('this is tabBarPage2')
    const echartsBox = ref(null)
    const option:ECOption = {
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun1']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25]
        }
      ]
    }
    // tips:需容器dom挂载后方可使用
    onMounted(() => {
      console.log(echarts)
      const myCharts = echarts.init(echartsBox.value as unknown as HTMLElement)
      myCharts.setOption(option)
    })
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
  #echartsBox {
    width: 700px;
    height: 500px;
    margin: 0 auto;
  }
</style>
