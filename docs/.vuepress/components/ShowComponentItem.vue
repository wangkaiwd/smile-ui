<template>
  <div class="show-component-item">
    <header class="show-component-item-header">DEMO</header>
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'ShowComponentItem'
  };
</script>

<style lang="scss" scoped>
  .show-component-item {
    position: relative;
    border: 2px solid #ddd;
    background: #fff;
    margin: 40px 0 40px 0;
    padding: 40px 24px 16px;
    &-content {
      margin-top: 0;
      margin-bottom: 24px;
      &:first-child {
        margin-top: 0;
      }
    }
    &-header {
      position: absolute;
      top: -2px;
      left: -2px;
      display: inline-block;
      padding: 4px 8px;
      background-color: #bbb;
      color: #fff;
      font-size: 80%;
    }
  }
</style>
