import { registerMicroApps, runAfterFirstMounted, /* setDefaultMountApp, start, */ initGlobalState } from 'qiankun';

import store from './store';
import components from './components';

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
// import render from './render/VueRender';

/**
 * Step1 初始化应用（可选）
 */
// render({ loading: false });

// const loader = loading => render({ loading });

// 向下传递子组件数据
const msg = {
  // 共享数据
  vuex: {
    user: store.state.user
  },
  // 公用组件
  components,
  // 公用方法
}

/**
 * Step2 注册子应用
 */
export const apps = [
  {
    name: "vue-sub1",
    entry: "//localhost:7101",
    container: "#subapp-container",
    // loader,
    activeRule: "/:OID(\\d+)/vue-sub1",
    props: msg,
  },
  {
    name: "vue-sub2",
    entry: "//localhost:7102",
    container: "#subapp-container",
    // loader,
    activeRule: "/vue-sub2",
    props: msg,
  },
  {
    name: "react-sub3",
    entry: "//localhost:7103",
    container: "#subapp-container",
    // loader,
    activeRule: "/:OID(\\d+)/react-sub3",
    props: msg,
  }
]
registerMicroApps(apps,
  {
    beforeLoad: [
      (app) => {
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name)
      },
    ],
    beforeMount: [
      (app) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name)
      },
    ],
    afterUnmount: [
      (app) => {
        console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name)
      },
    ],
  }
)

// 需要监听修改的值 - 须在主容器中事先声明
const { onGlobalStateChange, setGlobalState } = initGlobalState(store.state.user);

onGlobalStateChange((value, prev) => {
  console.log('[main_onGlobalStateChange - master]:', value, prev);
  store.commit('user/changeMainName', value.user)
});

setGlobalState({ ignore: 'qiankun', user: 'master'});
/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/1/vue-sub1');

/**
 * Step4 启动应用
 */
// start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
