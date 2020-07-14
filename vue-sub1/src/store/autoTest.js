const autoTest = {
  namespaced: true,
  state: {
    date: '2020-07-03'
  },
  mutations: {
    changeSubDate(state, payload) {
      state.date = payload.date
    }
  },
  actions: {
  }
}

export default autoTest