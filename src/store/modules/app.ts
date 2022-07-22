type state = {
  isCollapse: boolean
}
const app = {
  namespaced: true,
  state: ():state => ({
    isCollapse: false
  }),
  mutations: {
    setCollapse (state:state):void {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {

  },
  getters: {
    isCollapse: (state:state):boolean => state.isCollapse
  }
}

export default app
