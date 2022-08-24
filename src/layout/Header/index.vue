<template>
 <van-nav-bar fixed :title="title" @click-left="openMenu" placeholder>
    <template #left>
      <van-icon
        :name="$props.headerIcon"
        color="#191C24" />
    </template>
  </van-nav-bar>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'pulicHeaders',
  props: {
    headerIcon: {
      type: String as PropType<string>,
      default: 'wap-nav'
    }
  },
  setup (props) {
    const { commit, getters } = useStore()
    const $route = useRouter()
    const openMenu = ():void => {
      if (props.headerIcon === 'wap-nav') {
        commit('app/setCollapse')
      } else {
        $route.go(-1)
      }
    }
    const title = computed<string>(() => {
      return getters['app/pageTitle']
    })
    return {
      title,
      openMenu
    }
  }
})
</script>

<style scoped lang = "scss">

</style>
