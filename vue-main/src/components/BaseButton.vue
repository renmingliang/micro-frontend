<template>
  <div :class="$style.root">
    <button @click="emitClick">我是主应用组件：按钮</button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  data () {
    return {}
  },
  created() {},
  computed: {},
  methods: {
    emitClick(e) {
      this.$emit('click', e)
    }
  }
}

</script>

<style module>
.root {
  color: red;
}
</style>
