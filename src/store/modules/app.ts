import { configuration, setting } from '@/setting'

type state = {
  isCollapse: boolean,
  pageTitle: string,
  configuration: setting,
  keepAliveRoute: Array<string>,
  nonHomePage: boolean
}
const app = {
  namespaced: true,
  state: ():state => ({
    configuration: configuration,
    isCollapse: false,
    pageTitle: '',
    keepAliveRoute: ['homeIndex', 'friendsPage', 'minePage', 'searchPage'],
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
    keepAliveRoute: (state:state):Array<string> => state.keepAliveRoute,
    nonHomePage: (state:state):boolean => state.nonHomePage
  }
}

export default app
