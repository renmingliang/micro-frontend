const user = {
  namespaced: true,
  state: {
    name: 'master'
  },
  mutations: {
    changeMainName(state, paylod) {
      state.name = paylod
    }
  },
  actions: {
  }
}

export default user