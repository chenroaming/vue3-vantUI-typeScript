<template>
  <van-tabbar v-model="active">
    <van-tabbar-item replace to="/" name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/search" name="search" icon="search">搜寻</van-tabbar-item>
    <van-tabbar-item replace to="/friends" name="friends" icon="friends-o">朋友</van-tabbar-item>
    <van-tabbar-item replace to="/mine" name="mine" icon="setting-o">我的</van-tabbar-item>
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
