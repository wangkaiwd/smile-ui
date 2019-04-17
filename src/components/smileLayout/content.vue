<template>
  <div class="smile-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileContent',
    mounted () {

    }
  };
</script>

<style lang="scss" scoped>
  .smile-content {
    flex: 1;
  }
</style>
