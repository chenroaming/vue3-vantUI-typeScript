<template>
 <div ref="echartsContainer" :style="$props.style" />
</template>

<script lang='ts'>
import { ref, defineComponent, onMounted, PropType } from 'vue'
import type { ECOption } from '@/libs/echarts'
import echarts from '@/libs/echarts'
import type { containerStyle } from '@/types/components'
export default defineComponent({
  name: 'echartsContainer',
  props: {
    option: {
      type: Object as PropType<ECOption>,
      default: ():ECOption => ({}),
      required: true
    },
    // 注意！这里的宽高不要用px，否则内部的echarts容易也会跟着用px，这样在移动端上会有问题
    style: {
      type: Object as PropType<containerStyle>,
      default: ():containerStyle => ({
        width: '100%',
        height: '6rem',
        margin: '0 auto'
      }),
      required: false
    }
  },
  setup (props) {
    const echartsContainer = ref(null)
    // tips:需容器dom挂载后方可使用
    onMounted(() => {
      const myCharts = echarts.init(echartsContainer.value as unknown as HTMLElement)
      myCharts.setOption(props.option)
      window.onresize = function () {
        myCharts.resize()
      }
    })
    return {
      echartsContainer
    }
  }
})
</script>
