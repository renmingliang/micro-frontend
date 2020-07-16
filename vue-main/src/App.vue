<template>
  <div class="mainapp">
    <!-- 标题栏 -->
    <header class="mainapp-header">
      <h1>QianKun</h1>
      <h2>{{ user }}</h2>
      <button @click="changeName">hello</button>
    </header>
    <div class="mainapp-main">
      <!-- 侧边栏 -->
      <ul class="mainapp-sidemenu">
        <li @click="push('vue-sub1')">Vue-sub1</li>
        <li @click="push('vue-sub2')">Vue-sub2</li>
      </ul>
      <!-- 子应用  -->
      <main id="subapp-container"></main>
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
      history.pushState(null, subapp, subapp)
      // this.$router.push(subapp)
    },
    changeName() {
      this.$store.commit('user/changeMainName', 'hello')
    }
  },
  watch: {
    $route: {
      handler(to) {
        console.log('watch-route', to)
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

li:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
