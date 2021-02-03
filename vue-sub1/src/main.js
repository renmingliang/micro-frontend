
/* eslint-disable */
import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';
import register from './register';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue-sub1' : '/',
    routes
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  storeRegist({
    name: 'vue-sub1',
    vuex: {
      user: {
        user: 'signal-test'
      }
    }
  });
  render();
}

let setGlobalState = null;

function storeRegist(props = {}) {
  const user = {
    namespaced: true,
    state: props.vuex.user, // 引用的同一个数据副本
    mutations: {
      GET_GLOBAL(state, payload) {
        state.user = payload.user
      }
    },
    actions: {
      setGlobal({ commit }, params) {
        if (setGlobalState) {
          setGlobalState(params)
        } else {
          commit('GET_GLOBAL', params)
        }
      }
    }
  }

  store.registerModule(props.name, {
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
        store.commit('vue-sub1/user/GET_GLOBAL', value)
      },
      true,
    );

  setGlobalState = props.setGlobalState;
}

export async function bootstrap(props) {
  console.log('[vue-sub1] vue app bootstraped', props);
  storeRegist(props);
  register(props);
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
