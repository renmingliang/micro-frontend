
import './entry'
import store from './store'

import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from './render/VueRender';

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

const loader = loading => render({ loading });

// 向下传递子组件数据
const msg = {
  // vuex数据
  vuex: {
    user: store.state.user
  }
  // 公用组件
  // 公用方法
}

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: "vue-sub1",
      entry: "//localhost:7101",
      // entry: "//renmingliang.github.io/micro/vue-sub1/",
      container: "#subapp-viewport",
      loader,
      activeRule: "/vue-sub1",
      props: msg,
    },
    {
      name: "vue-sub2",
      entry: "//localhost:7102",
      // entry: "//renmingliang.github.io/micro/vue-sub2/",
      container: "#subapp-viewport",
      loader,
      activeRule: "/vue-sub2",
      props: msg,
    },
    {
      name: "react-sub3",
      entry: "//localhost:7103",
      // entry: "//renmingliang.github.io/micro/react-sub3/",
      container: "#subapp-viewport",
      loader,
      activeRule: "/react-sub3",
      props: msg,
    }
  ],
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
setDefaultMountApp('/vue-sub1');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
