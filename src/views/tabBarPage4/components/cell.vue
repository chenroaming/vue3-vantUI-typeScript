<template>
  <van-cell-group>
    <van-cell
      v-for="item in $props.list"
      :key="item.FSRQ"
      :title="item.FSRQ"
      :value="item.DWJZ" />
  </van-cell-group>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { listItem } from '@/types/response/demo'
export default defineComponent({
  name: 'cellGroup',
  props: {
    list: {
      type: Array as PropType<listItem[]>,
      default: ():listItem[] => ([]),
      required: false
    }
  }
})
</script>
