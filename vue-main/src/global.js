import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const externals = {
  Vue,
  Vuex,
  VueRouter
}

window.steam = {}

// 挂载全局
Object.keys(externals).map(key => {
  // window.steam[key] = externals[key]
  window[key] = externals[key]
})