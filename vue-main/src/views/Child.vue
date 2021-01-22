<template>
  <div id="subapp-container">{{ title }}</div>
</template>

<script>
import { start } from 'qiankun'

export default {
  data() {
    return {
      title: '微应用容器'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true
        start()
      }
    }
  }
}
</script>
