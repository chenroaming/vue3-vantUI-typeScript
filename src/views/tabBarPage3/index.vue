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
 <PropsAndEmits @change="getChildrenMsg" v-model:text="text" />
 <p>{{ text }}</p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import pagesRoutes from '@/router/pages/pages'
import { MenuItem } from '@/types/components'
import type { PickerFieldNames, PickerOption } from 'vant'
import type { RouteRecordRaw } from 'vue-router'
import PropsAndEmits from './components/PropsAndEmits.vue'
import { getCurrentPagesName, onShow } from '@/libs/public'
import { Dialog } from 'vant'
type option = {
  label: string,
  path: string,
  name: string
} & PickerOption
export default defineComponent({
  name: 'tabBarPage3',
  components: {
    PropsAndEmits
  },
  setup () {
    const msg = ref<string>(`this is ${getCurrentPagesName().value}`)
    const go = useRouter()
    // 弹窗开关
    const showPicker = ref<boolean>(false)
    // 将菜单路由整理成picker组件需要的格式
    const columns = ref<MenuItem[]>(pagesRoutes.map((el:RouteRecordRaw):MenuItem => {
      const [menuItem] = el.children as RouteRecordRaw[]
      return {
        label: menuItem?.meta?.title as string,
        path: menuItem.path,
        name: menuItem.name as string
      }
    }))
    const customFieldName:PickerFieldNames = { text: 'label' }
    const onConfirm = (option:option):void => {
      showPicker.value = false
      go.push({
        name: option.name,
        params: {
          source: `from tabBarPage3 to ${option.name}`
        }
      })
    }
    const text = ref<string>('')
    const getChildrenMsg = (msg:string):void => {
      Dialog({
        title: '子组件消息',
        width: 320,
        message: msg,
        messageAlign: 'center',
        theme: 'round-button'
      })
    }
    onShow()
    return {
      msg,
      showPicker,
      onConfirm,
      getChildrenMsg,
      columns,
      text,
      customFieldName
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
