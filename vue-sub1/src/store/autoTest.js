const autoTest = {
  namespaced: true,
  state: {
    date: '2020-07-03'
  },
  mutations: {
    changeSubDate(state) {
      state.date = new Date()
    }
  },
  actions: {
  }
}

export default autoTest