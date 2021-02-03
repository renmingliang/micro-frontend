<template>
  <div :class="$style.root">
    <p>我是主应用组件：{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseMain',
  props: {
    title: {
      type: String,
      default: '无应用'
    }
  },
  data () {
    return {}
  },
  created() {},
  computed: {},
  methods: {}
}

</script>

<style module>
.root {
  color: red;
}
</style>
