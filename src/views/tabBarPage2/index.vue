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
import { ref, defineComponent } from 'vue'
import type { ECOption } from '@/libs/echarts'
import EchartsContainer from '@/components/echartsContainer.vue'
import { getCurrentPagesName, onShow } from '@/libs/public'
export default defineComponent({
  name: 'tabBarPage2',
  components: {
    EchartsContainer
  },
  setup () {
    const msg = ref<string>(`this is ${getCurrentPagesName().value}`)
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
        series: [
          {
            type: 'pie',
            selectedMode: 'multiple',
            label: {
              show: true,
              position: 'outside',
              formatter: '{b}:{d}%'
            },
            labelLine: {
              show: true
            },
            emphasis: {
              disabled: false,
              scale: true,
              label: {
                show: true,
                fontSize: '25',
                fontWeight: 'lighter',
                formatter: '{b}:{d}%'
              }
            },
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
            ]
          }
        ]
      },
      {
        legend: {
          orient: 'horizontal',
          x: 'left',
          data: ['A', 'B', 'C', 'D', 'E']
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            selectedMode: 'multiple',
            label: {
              show: true,
              position: 'outside',
              formatter: '{b}:{d}%'
            },
            labelLine: {
              show: true
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'lighter'
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
    onShow()
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
