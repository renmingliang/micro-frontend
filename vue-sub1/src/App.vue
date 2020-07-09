<template>
  <div id="app">
    <button @click="emitRoot">触发父应用-Vue-main</button>
    <h1>{{ data }}</h1>
    <button @click="setDate">子应用-Vue-sub1</button>
    <h2>{{ date }}</h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    ...mapState('autoTest', ['date']),
  },
  methods: {
    emitRoot() {
      console.log(this.$rootProps)
    },
    setDate() {
      this.$store.commit('autoTest/changeSubDate')
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
