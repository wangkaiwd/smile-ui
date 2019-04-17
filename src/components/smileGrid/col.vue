<template>
  <div class="smile-col">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileCol',
    props: {
      span: {
        type: Number,
        default: 24
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-col {
    display: inline-flex;
    width: 100%;
  }
</style>
