import { configuration, setting } from '@/setting'
import { State } from '@/types/store/app'
const app = {
  namespaced: true,
  state: ():State => ({
    configuration: configuration,
    isCollapse: false, // 侧边菜单栏收缩开关
    pageTitle: '', // 导航栏标题
    keepAliveRoute: ['tabBarPage1', 'tabBarPage2', 'tabBarPage3', 'tabBarPage4'] // 保活页面
  }),
  mutations: {
    /**
     * @description: 设置侧边菜单栏收缩开关的方法
     * @param {state} state
     * @return {*}
     * @author: chenroaming
     */
    setCollapse (state:State):void {
      state.isCollapse = !state.isCollapse
    },
    /**
     * @description: 设置导航栏页面标题的方法
     * @param {state} state
     * @param {string} title
     * @return {*}
     * @author: chenroaming
     */
    setPageTitle (state:State, title:string):void {
      state.pageTitle = title
    }
  },
  actions: {

  },
  getters: {
    isCollapse: (state:State):boolean => state.isCollapse,
    pageTitle: (state:State):string => state.pageTitle,
    configuration: (state:State):setting => state.configuration,
    keepAliveRoute: (state:State):string[] => state.keepAliveRoute
  }
}

export default app
