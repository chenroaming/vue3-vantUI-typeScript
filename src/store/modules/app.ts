import configuration from '@/setting'
type state = {
  isCollapse: boolean,
  pageTitle: string,
  layoutStyle: string,
  keepAliveRoute: Array<string>
}
const app = {
  namespaced: true,
  state: ():state => ({
    layoutStyle: configuration.layoutStyle,
    isCollapse: false,
    pageTitle: '',
    keepAliveRoute: ['homeIndex', 'friendsPage', 'minePage', 'searchPage']
  }),
  mutations: {
    setCollapse (state:state):void {
      state.isCollapse = !state.isCollapse
    },
    setPageTitle (state:state, title:string):void {
      state.pageTitle = title
    }
  },
  actions: {

  },
  getters: {
    isCollapse: (state:state):boolean => state.isCollapse,
    pageTitle: (state:state):string => state.pageTitle,
    layoutStyle: (state:state):string => state.layoutStyle,
    keepAliveRoute: (state:state):Array<string> => state.keepAliveRoute
  }
}

export default app
