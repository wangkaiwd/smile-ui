<template>
  <div class="smile-layout">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileLayout'
  };
</script>

<style lang="scss" scoped>
  .smile-layout {
    display: flex;
    flex-direction: column;
  }
</style>
