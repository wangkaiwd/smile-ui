<template>
  <div class="smile-aside" :class="{collapsed}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileAside',
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-aside {
    width: 200px;
    transition: all .4s;
    &.collapsed {
      width: 0;
    }
  }
</style>
