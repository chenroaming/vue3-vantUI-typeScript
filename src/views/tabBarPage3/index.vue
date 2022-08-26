<template>
 <div>
  <span class="msg">{{ msg }}</span>
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker
      title="选择要跳转的菜单"
      :columns="columns"
      :columns-field-names="customFieldName"
      @confirm="onConfirm"
      @cancel="showPicker = false"
    />
  </van-popup>
  <p>
    <van-button @click="showPicker = true" size="mini">点击展示指令式跳转菜单</van-button>
  </p>
 </div>
</template>

<script lang="ts">
import { ref, defineComponent, onActivated } from 'vue'
import { useRouter } from 'vue-router'
import pagesRoutes from '@/router/pages/pages'
import { MenuItem } from '@/types/components'
import type { PickerFieldNames, PickerOption } from 'vant'
import type { RouteRecordRaw } from 'vue-router'
type option = {
  label: string,
  path: string
} & PickerOption
export default defineComponent({
  name: 'tabBarPage3',
  setup () {
    const msg = ref<string>('this is tabBarPage3')
    const go = useRouter()
    // 弹窗开关
    const showPicker = ref<boolean>(false)
    // 将菜单路由整理成picker组件需要的格式
    const columns = ref<MenuItem[]>(pagesRoutes.map((el:RouteRecordRaw):MenuItem => {
      const [menuItem] = el.children as RouteRecordRaw[]
      return {
        label: menuItem?.meta?.title as string,
        path: menuItem.path
      }
    }))
    const customFieldName:PickerFieldNames = { text: 'label' }
    const onConfirm = (option:option):void => {
      showPicker.value = false
      go.push({
        path: option.path
      })
    }
    onActivated(():void => {
      // 切换至该页面时会执行该生命周期钩子，类似各种app/小程序中的onShow钩子
      console.log('tabBarPage3 is activated!!!')
    })
    return {
      msg,
      showPicker,
      onConfirm,
      columns,
      customFieldName
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
