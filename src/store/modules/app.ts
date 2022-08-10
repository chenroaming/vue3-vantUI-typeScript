type state = {
  isCollapse: boolean,
  pageTitle: string
}
const app = {
  namespaced: true,
  state: ():state => ({
    isCollapse: false,
    pageTitle: ''
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
    pageTitle: (state:state):string => state.pageTitle
  }
}

export default app
