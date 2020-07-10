const user = {
  namespaced: true,
  state: {
    user: 'master'
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