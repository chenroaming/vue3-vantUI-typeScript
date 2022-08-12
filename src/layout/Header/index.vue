<template>
 <van-nav-bar fixed :title="title" @click-left="openMenu" placeholder>
    <template v-if="needSideBar" #left>
      <van-icon name="wap-nav" color="#191C24" />
    </template>
  </van-nav-bar>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { configuration } from '@/types'
export default defineComponent({
  name: 'pulicHeaders',
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
