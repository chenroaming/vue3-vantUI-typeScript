<template>
  <van-nav-bar fixed :title="title" @click-left="openMenu" placeholder>
    <template v-if="needSideBar" #left>
      <van-icon name="wap-nav" color="#191C24" />
    </template>
  </van-nav-bar>
  <router-view v-slot="{ Component }">
    <keep-alive :include="keepAliveRoute">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <component
    v-for="item in configuration"
    :key="item.key"
    :is="item.key" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import SideBar from './SideBar/index.vue'
import NavBar from './NavBar/index.vue'
type configuration = {
  key: string
}
export default defineComponent({
  name: 'homePage',
  components: {
    SideBar,
    NavBar
  },
  setup () {
    const { commit, getters } = useStore()
    const openMenu = ():void => {
      commit('app/setCollapse')
    }
    const title = computed<string>(() => {
      return getters['app/pageTitle']
    })
    const configuration = computed<Array<configuration>>(() => {
      const configurationToArr = Object.keys(getters['app/configuration'])
      return configurationToArr
        .filter(el => {
          return getters['app/configuration'][el]
        })
        .map(el => {
          return {
            key: el
          }
        })
    })
    const needSideBar = computed<boolean>(() => {
      return configuration
        .value
        .some((el:configuration):boolean => ['SideBar'].includes(el.key))
    })
    const keepAliveRoute = computed<Array<string>>(() => {
      return getters['app/keepAliveRoute']
    })
    return {
      openMenu,
      title,
      configuration,
      keepAliveRoute,
      needSideBar
    }
  }
})
</script>

<style scoped lang = "scss">
  .container {
    padding-top: 100px;
  }
</style>
