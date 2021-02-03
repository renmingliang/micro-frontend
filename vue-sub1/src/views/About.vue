<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-button @click="handleClick" />
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('click')
    }
  }
}
</script>