<template>
  <div class="smile-collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileCollapse',
    props: {
      selected: {
        type: Array,
        default: () => []
      },
      single: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-collapse {
    border: $border-gray;
    border-radius: $border-radius-md;
    &-item:last-child {
      /deep/ div:last-child {
        border: none;
      }
    }
  }
</style>
