<template>
  <van-nav-bar fixed title="首页" />
  <van-popup v-model:show="show" position="left">
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
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  />
  <van-cell v-for="item in list" :key="item" :title="item" />
  <van-button @click="showMenu">点击弹出左侧菜单</van-button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'homePage',
  setup () {
    const show = ref<boolean>(false)
    const activeNames = ref<Array<string>>(['1'])
    const loading = ref<boolean>(false)
    const list = ref<Array<number>>([])
    const finished = ref<boolean>(false)
    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1)
        }

        // 加载状态结束
        loading.value = false

        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true
        }
      }, 1000)
    }
    const showMenu = ():void => {
      show.value = true
    }
    return {
      show,
      showMenu,
      activeNames,
      loading,
      list,
      finished,
      onLoad
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
