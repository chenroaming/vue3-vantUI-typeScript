<template>
 <van-popup
  closeable
  v-model:show="isShow"
  position="left"
  @click-overlay="closeMenu"
  safe-area-inset-top
  safe-area-inset-bottom>
  <div class="avatar-box">
    <van-image
      round
      :width="px2rem('100px')"
      :height="px2rem('100px')"
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
        @click="setActive(item.label, item.name)">
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
import type { MenuItem } from '@/types/components'
import { px2rem } from '@/libs/tools'
export default defineComponent({
  name: 'menuList',
  setup () {
    const { getters, commit } = useStore()
    const $router = useRouter()
    const activeLabel = ref<string>('')
    const isShow = ref<boolean>(false)
    const show = computed<boolean>(() => getters['app/isCollapse'])
    const avatar = require('@/assets/GitHub-Mark-64px.png')
    const active = ref<number>(0)
    const menuList = computed<MenuItem[]>(() => {
      return pagesRoutes.map((el:RouteRecordRaw):MenuItem => {
        // 类型守卫，确保一定是数组类型的数据才能使用解构
        const [children] = el.children instanceof Array ? el.children : []
        return {
          // 类型守卫，确保一定是string类型的数据
          label: typeof children?.meta?.title === 'string' ? children.meta.title : '',
          path: typeof children?.path === 'string' ? children.path : '',
          name: typeof children?.name === 'string' ? children.name : ''
        }
      })
    })
    const setActive = (label:string, name:string):void => {
      activeLabel.value = label
      commit('app/setCollapse')
      $router.push({
        // 此处需要用name来跳转，便于传递params参数
        // 参见：https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE
        name: name,
        params: {
          source: `from SideBar to ${name}`
        }
      })
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
      setActive,
      px2rem
    }
  }
})
</script>

<style scoped lang = "scss">
  .avatar-box {
    width: 490px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu {
    width: 490px;
    min-height: calc(100vh - 200px);
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
