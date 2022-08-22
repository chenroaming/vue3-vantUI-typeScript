import { configuration, setting } from '@/setting'
import { state } from '@/types/store/app'

const app = {
  namespaced: true,
  state: ():state => ({
    configuration: configuration,
    isCollapse: false,
    pageTitle: '',
    keepAliveRoute: ['tabBarPage1', 'tabBarPage2', 'tabBarPage3', 'tabBarPage4'],
    nonHomePage: false
  }),
  mutations: {
    setCollapse (state:state):void {
      state.isCollapse = !state.isCollapse
    },
    setPageTitle (state:state, title:string):void {
      state.pageTitle = title
    },
    setHomePageStatus (state:state, status:boolean):void {
      state.nonHomePage = status
    }
  },
  actions: {

  },
  getters: {
    isCollapse: (state:state):boolean => state.isCollapse,
    pageTitle: (state:state):string => state.pageTitle,
    configuration: (state:state):setting => state.configuration,
    keepAliveRoute: (state:state):string[] => state.keepAliveRoute,
    nonHomePage: (state:state):boolean => state.nonHomePage
  }
}

export default app
