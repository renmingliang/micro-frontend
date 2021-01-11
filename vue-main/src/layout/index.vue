<template>
  <div class="mainapp">
    <ul>
      <li><router-link :to="{name: 'Home'}">主应用 - home</router-link></li>
      <li><router-link :to="{name: 'About'}">主应用 - about</router-link></li>
    </ul>
    <!-- 标题栏 -->
    <header class="mainapp-header">
      <h1>微前端示例Demo</h1>
      <h2>主应用：{{ user }}</h2>
      <button @click="changeName">主应用改变数据</button>
    </header>
    <div class="mainapp-main">
      <!-- 侧边栏 -->
      <ul class="mainapp-sidemenu">
        <li @click="push('/child/vue-sub1')">子应用A</li>
        <li @click="push('/child/vue-sub2')">子应用B</li>
        <li @click="push('/child/react-sub3')">子应用C</li>
      </ul>
      <!-- 子应用  -->
      <div class="mainapp-subapp">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    push(subapp) {
      // history.pushState(null, subapp, '/micro/vue-main' + subapp)
      this.$router.push(subapp)
    },
    changeName() {
      this.$store.commit('user/changeMainName', 'hello')
    }
  },
  watch: {
    $route: {
      handler(to) {
        console.log('watch-route-layout', to)
      },
      immediate: true
    }
  },
}
</script>

<style>
.mainapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mainapp-header {
  margin: 20px auto;
}

.mainapp-sidemenu {
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  border: 1px solid #ddd;
}

.mainapp-sidemenu li {
  flex: 1;
  padding: 10px 0;
  list-style: none;
  box-sizing: border-box;
}

.mainapp-sidemenu li+li {
  border-left: 1px solid #ddd;
}

.mainapp-sidemenu li:hover {
  cursor: pointer;
  text-decoration: underline;
}

.mainapp-subapp {
  margin-top: 20px;
}
</style>
