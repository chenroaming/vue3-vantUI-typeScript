<template>
 <van-nav-bar fixed :title="title" @click-left="openMenu" placeholder>
    <template #left>
      <van-icon
        v-if="needSideBar"
        name="wap-nav"
        color="#191C24" />
      <van-icon
        v-else
        name="arrow-left" />
    </template>
  </van-nav-bar>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { configuration } from '@/types'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'pulicHeaders',
  setup () {
    const { commit, getters } = useStore()
    const $route = useRouter()
    const nonHomePage = computed<boolean>(() => {
      return getters['app/nonHomePage']
    })
    const openMenu = ():void => {
      if (nonHomePage.value) {
        commit('app/setHomePageStatus', false)
        $route.go(-1)
      } else {
        commit('app/setCollapse')
      }
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
        .some((el:configuration):boolean => ['SideBar'].includes(el.key)) &&
        !nonHomePage.value
    })
    return {
      title,
      openMenu,
      needSideBar
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
