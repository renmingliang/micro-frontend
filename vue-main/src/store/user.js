const user = {
  namespaced: true,
  state: {
    user: ''
  },
  mutations: {
    changeMainName(state, paylod) {
      state.user = paylod
    }
  },
  actions: {
  }
}

export default user