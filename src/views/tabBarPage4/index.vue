<template>
 <div>
  <span class="msg">{{ msg }}</span>
  <div class="container">
    <van-cell-group inset>
      <van-field v-model="form.fundCode" label="基金代号" placeholder="请输入基金代号" />
    </van-cell-group>
    <van-button @click="handleClick" size="mini">点击查询最近10条基金净值信息</van-button>
    <CellList :list="list"></CellList>
  </div>
 </div>
</template>

<script lang="ts">
import { getFundDetailList } from '@/api/demo_fund'
import { ref, reactive, defineComponent } from 'vue'
import CellList from './components/cell.vue'
import type { ListItem } from '@/types/response/demo'
import type { GetFundDetailListParams } from '@/types/request/demo.d'
import { getCurrentPagesName, onShow } from '@/libs/public'
export default defineComponent({
  name: 'tabBarPage4',
  components: {
    CellList
  },
  setup () {
    const msg = ref<string>(`this is ${getCurrentPagesName().value}`)
    const list = ref<ListItem[]>([])
    const form = reactive<GetFundDetailListParams>({
      fundCode: '',
      pageIndex: 1,
      pageSize: 10
    })
    const handleClick = async () => {
      // 示例接口请求方式，有其他更好的写法也可以
      const { data } = await getFundDetailList({ ...form })
      list.value = data.Data.LSJZList
    }
    onShow()
    return {
      msg,
      handleClick,
      list,
      form
    }
  }
})
</script>
