<template>
  <div class="smile-aside">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileAside'
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-aside {
    width: 200px;
  }
</style>
