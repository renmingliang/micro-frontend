
/* eslint-disable */

import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue-sub1' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

let setGlobal = null;

function storeRegist(props) {
  const user = {
    namespaced: true,
    state: props.vuex.user,
    mutations: {
      getGlobal(state, payload) {
        state.user = payload.user
      },
      setGlobal(state, payload) {
        setGlobal && setGlobal(payload)
      }
    }
  }

  store.registerModule('sub1', {
    namespaced: true,
    modules: {
      user
    }
  })
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => {
        console.log(`[vue-sub1_onGlobalStateChange - ${props.name}]:`, value, prev)
        store.commit('sub1/user/getGlobal', value)
      },
      true,
    );

  setGlobal = props.setGlobalState;
}

export async function bootstrap(props) {
  console.log('[vue-sub1] vue app bootstraped', props);
  storeRegist(props);
}

export async function mount(props) {
  console.log('[vue-sub1] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
