<template>
 <van-popup v-model:show="isShow" position="left" @click-overlay="closeMenu">
    <div class="menu">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="标题1" name="1">
          代码是写出来给人看的，附带能在机器上运行。
        </van-collapse-item>
        <van-collapse-item title="标题2" name="2">
          技术无非就是那些开发它的人的共同灵魂。
        </van-collapse-item>
        <van-collapse-item title="标题3" name="3">
          在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
        </van-collapse-item>
      </van-collapse>
    </div>
  </van-popup>
</template>

<script lang="ts">
import { computed, ref, watch, defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'menuList',
  setup () {
    const { getters, commit } = useStore()
    const isShow = ref<boolean>(false)
    const show = computed<boolean>(() => getters['app/isCollapse'])
    watch(
      // 避免warning：show是计算属性，只可读取不可修改
      show, (show:boolean, prevIsShow:boolean) => {
        isShow.value = !prevIsShow
      }
    )
    const activeNames = ref<Array<string>>(['1'])
    const closeMenu = ():void => {
      commit('app/setCollapse')
    }
    return {
      show,
      closeMenu,
      activeNames,
      isShow
    }
  }
})
</script>

<style scoped lang = "scss">
  .menu {
    width: 300px;
    height: 100vh;
  }
</style>
