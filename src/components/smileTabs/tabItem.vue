<template>
  <div class="smile-tab-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileTabItem',
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-tab-item {

  }
</style>
