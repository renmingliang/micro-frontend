<template>
  <div id="subapp-container">子应用</div>
</template>

<script>
import { registerMicroApps, start, runAfterFirstMounted, initGlobalState } from 'qiankun';

import render from '../render/VueRender';
import store from '../store';

const loader = loading => render({ loading });

const msg = {
  vuex: {
    user: store.state.user
  }
}

export default {
  mounted() {
    this.init()
  },
  methods: {
    init() {
      registerMicroApps(
        [
          {
            name: "vue-sub1",
            entry: "//localhost:7101",
            container: "#subapp-viewport",
            activeRule: "/child/vue-sub1",
            loader,
            props: msg,
          },
          {
            name: "vue-sub2",
            entry: "//localhost:7102",
            container: "#subapp-viewport",
            activeRule: "/child/vue-sub2",
            loader,
            props: msg,
          },
          {
            name: "react-sub3",
            entry: "//localhost:7103",
            container: "#subapp-viewport",
            activeRule: "/child/react-sub3",
            loader,
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
      start();
      runAfterFirstMounted(() => {
        console.log('[MainApp] first app mounted');
      });
    }
  }
}
</script>
