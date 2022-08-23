<template>
 <div>
    <span class="msg">{{ msg }}</span>
    <EchartsContainer
      v-for="item in charts"
      :key="item.name"
      :option="item" />
 </div>
</template>

<script lang="ts">
import { ref, defineComponent, onActivated } from 'vue'
import type { ECOption } from '@/libs/echarts'
import EchartsContainer from '@/components/echartsContainer.vue'
export default defineComponent({
  name: 'tabBarPage2',
  components: {
    EchartsContainer
  },
  setup () {
    const msg = ref<string>('this is tabBarPage2')
    const echartsBox = ref(null)
    const charts:ECOption[] = [
      {
        name: 'bar',
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [23, 24, 18, 20, 22, 25, 30]
          }
        ]
      },
      {
        name: 'line',
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: 'line',
            stack: 'x',
            areaStyle: {}
          },
          {
            data: [5, 4, 3, 5, 10],
            type: 'line',
            stack: 'x',
            areaStyle: {}
          }
        ]
      },
      {
        name: 'pie',
        title: {
          text: '圆环图的例子',
          left: 'center',
          top: 'center'
        },
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 335,
                name: 'A'
              },
              {
                value: 234,
                name: 'B'
              },
              {
                value: 1548,
                name: 'C'
              }
            ],
            radius: ['40%', '70%']
          }
        ]
      },
      {
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['A', 'B', 'C', 'D', 'E']
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: 335, name: 'A' },
              { value: 310, name: 'B' },
              { value: 234, name: 'C' },
              { value: 135, name: 'D' },
              { value: 1548, name: 'E' }
            ]
          }
        ]
      }
    ]
    onActivated(():void => {
      // 切换至该页面时会执行该生命周期钩子，类似各种app/小程序中的onShow钩子
      console.log('tabBarPage2 is activated!!!')
    })
    return {
      msg,
      charts,
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
