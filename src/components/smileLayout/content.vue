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
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-content {
    flex: 1;
    min-height: 120px;
  }
</style>
