<template>
  <van-nav-bar fixed :title="title" @click-left="openMenu" placeholder>
    <template v-if="layoutStyle === 'MenuList'" #left>
      <van-icon name="wap-nav" color="#191C24" />
    </template>
  </van-nav-bar>
  <router-view v-slot="{ Component }">
    <keep-alive :include="keepAliveRoute">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <component :is="layoutStyle" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
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
    const { commit, getters } = useStore()
    const openMenu = ():void => {
      commit('app/setCollapse')
    }
    const title = computed<string>(() => {
      return getters['app/pageTitle']
    })
    const layoutStyle = computed<string>(() => {
      return getters['app/layoutStyle']
    })
    const keepAliveRoute = computed<Array<string>>(() => {
      return getters['app/keepAliveRoute']
    })
    return {
      openMenu,
      title,
      layoutStyle,
      keepAliveRoute
    }
  }
})
</script>

<style scoped lang = "scss">
  .container {
    padding-top: 100px;
  }
</style>
