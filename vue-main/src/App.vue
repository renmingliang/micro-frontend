<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  watch: {
    $route: {
      handler(to) {
        console.log('watch-route-app', to)
      },
      immediate: true
    }
  }
}
</script>
