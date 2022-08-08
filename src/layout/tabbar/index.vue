<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search">搜寻</van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o">朋友</van-tabbar-item>
    <van-tabbar-item name="mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'tabbarList',
  setup () {
    const active = ref<string>('home')
    return {
      active
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
