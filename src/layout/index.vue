<template>
  <van-nav-bar fixed title="首页" @click-left="openMenu">
    <template #left>
      <van-icon name="wap-nav" color="#191C24" />
    </template>
  </van-nav-bar>
  <div class="container">

  </div>
  <MenuList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import MenuList from './menuList/index.vue'
export default defineComponent({
  name: 'homePage',
  components: {
    MenuList
  },
  setup () {
    const { commit } = useStore()
    const openMenu = ():void => {
      commit('app/setCollapse')
    }
    return {
      openMenu
    }
  }
})
</script>

<style scoped lang = "scss">
  .container {
    padding-top: 100px;
  }
</style>
