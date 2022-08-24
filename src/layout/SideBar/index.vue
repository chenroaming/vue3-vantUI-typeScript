<template>
 <van-popup
  closeable
  v-model:show="isShow"
  position="left"
  @click-overlay="closeMenu"
  safe-area-inset-top
  safe-area-inset-bottom>
  <div style="margin: 20px;">
    <van-image
      round
      :width="50"
      :height="50"
      :src="avatar"
    />
  </div>
  <div class="menu">
    <div class="card">
      <div
        v-for="item in menuList"
        :key="item.label"
        class="card-item"
        :class="{ itemActived: isActived(item.label) }"
        @click="setActive(item.label, item.path)">
        <span>{{ item.label }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
  </van-popup>
</template>

<script lang="ts">
import { computed, ref, watch, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import pagesRoutes from '@/router/pages/pages'
import type { RouteRecordRaw } from 'vue-router'
import type { menuItem } from '@/types/components'
export default defineComponent({
  name: 'menuList',
  setup () {
    const { getters, commit } = useStore()
    const $route = useRouter()
    const activeLabel = ref<string>('')
    const isShow = ref<boolean>(false)
    const show = computed<boolean>(() => getters['app/isCollapse'])
    const avatar = require('@/assets/GitHub-Mark-64px.png')
    const active = ref<number>(0)
    const menuList = computed<menuItem[]>(() => {
      return pagesRoutes.map((el:RouteRecordRaw):menuItem => {
        // 类型守卫，确保一定是数组类型的数据才能使用解构
        const [children] = el.children instanceof Array ? el.children : []
        return {
          // 类型守卫，确保一定是string类型的数据
          label: typeof children?.meta?.title === 'string' ? children.meta.title : '',
          path: typeof children?.path === 'string' ? children.path : ''
        }
      })
    })
    const setActive = (label:string, path:string):void => {
      activeLabel.value = label
      commit('app/setCollapse')
      $route.push(path)
    }
    const isActived = (label:string):boolean => {
      return label === activeLabel.value
    }
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
      isShow,
      avatar,
      active,
      menuList,
      isActived,
      setActive
    }
  }
})
</script>

<style scoped lang = "scss">
  .menu {
    width: 500px;
    height: 100vh;
  }
  .card {
    width: 430px;
    padding: 30px;
    margin: 0 auto;
    border-radius: 20px;
    &-item {
      width: calc(100% - 40px);
      height: 100px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 26px;
      padding: 0 20px;
      transition: .5s all;
    }
  }
  .itemActived {
    background: #ebfff0;
    border-radius: 20px;
    color: #4fc08d;
  }
</style>
