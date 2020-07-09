import Vue from 'vue'
import Vuex from 'vuex'

import autoTest from './autoTest'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    autoTest
  }
})
