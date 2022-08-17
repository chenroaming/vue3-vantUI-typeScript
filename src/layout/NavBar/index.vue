<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in tabBar[0].children"
      :key="item.name"
      replace
      :to="item.path"
      :name="item?.meta?.title || ''"
      :icon="item?.meta?.icon || ''">{{ item.name }}</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import tarbarRoutes from '@/router/pages/tabBar'
import type { RouteRecordRaw } from 'vue-router'
export default defineComponent({
  name: 'tabbarList',
  setup () {
    const active = ref<string>('tabBar1')
    const tabBar = ref<RouteRecordRaw[]>(tarbarRoutes)
    return {
      active,
      tabBar
    }
  }
})
</script>
