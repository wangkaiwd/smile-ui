<template>
  <div class="smile-footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileFooter'
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-footer {
    min-height: 60px;
  }
</style>
