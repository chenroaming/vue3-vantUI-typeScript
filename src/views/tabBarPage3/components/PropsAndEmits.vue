<template>
 <div>
  <van-cell-group inset>
    <van-field v-model="text" label="消息" placeholder="请输入文本" />
  </van-cell-group>
  <van-button @click="handleEmit" size="mini">点击向父组件发送一个emit</van-button>
 </div>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'PropsAndEmits',
  emits: ['change', 'update:text'],
  setup (props, { emit }) {
    const text = ref<string>('')
    const handleEmit = ():void => {
      emit('change', text.value) // <-- 类型检查 / 自动补全
      emit('update:text', text.value)
    }
    return {
      text,
      handleEmit
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
