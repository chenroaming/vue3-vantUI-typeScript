<template>
 <div class="container">
  <Header headerIcon="wap-nav" />
    <router-view v-slot="{ Component }">
      <keep-alive :include="keepAliveRoute">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <component
      v-for="item in configuration"
      :key="item.key"
      :is="item.key" />
 </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import Header from './Header/index.vue'
import SideBar from './SideBar/index.vue'
import NavBar from './NavBar/index.vue'
import { Configuration } from '@/types'
export default defineComponent({
  name: 'homePage',
  components: {
    Header,
    SideBar,
    NavBar
  },
  setup () {
    const { getters } = useStore()
    const title = computed<string>(() => {
      return getters['app/pageTitle']
    })
    const configuration = computed<Configuration[]>(() => {
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
    const keepAliveRoute = computed<string[]>(() => {
      return getters['app/keepAliveRoute']
    })
    return {
      title,
      configuration,
      keepAliveRoute
    }
  }
})
</script>

<style scoped lang = "scss">
  .container {
    padding-bottom: 100px;
  }
</style>
