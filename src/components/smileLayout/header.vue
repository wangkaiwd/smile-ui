<template>
  <div class="smile-header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileHeader'
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-header {
    min-height: 60px;
  }
</style>
