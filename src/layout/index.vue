<template>
  <van-nav-bar fixed title="首页" @click-left="openMenu">
    <template #left>
      <van-icon name="wap-nav" color="#191C24" />
    </template>
  </van-nav-bar>
  <div class="container">
    <van-button @click="handleClick">测试接口</van-button>
  </div>
  <router-view />
  <MenuList />
  <TarBar />
</template>

<script lang="ts">
import api from '@/api'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import MenuList from './menuList/index.vue'
import TarBar from './tabbar/index.vue'
export default defineComponent({
  name: 'homePage',
  components: {
    MenuList,
    TarBar
  },
  setup () {
    const { commit } = useStore()
    const openMenu = ():void => {
      commit('app/setCollapse')
    }
    const handleClick = ():void => {
      api.demo.login()
    }
    return {
      openMenu,
      handleClick
    }
  }
})
</script>

<style scoped lang = "scss">
  .container {
    padding-top: 100px;
  }
</style>
