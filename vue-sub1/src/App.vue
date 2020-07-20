<template>
  <div id="app">
    <button @click="emitRoot">子应用触发父应用数据变更</button>
    <h2>子应用：{{ user }}</h2>
    <button @click="setDate">子应用改变自身数据</button>
    <h3>{{ date }}</h3>
    <div id="nav">
      <h4>子应用多路由切换</h4>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('autoTest', ['date']),
    ...mapState('vue-sub1/user', ['user']),
  },
  methods: {
    emitRoot() {
      this.$store.dispatch('vue-sub1/user/setGlobal', { user: 'vue-sub1' })
    },
    setDate() {
      this.$store.commit('autoTest/changeSubDate', { date: new Date() })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
