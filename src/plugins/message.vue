<template>
  <div class="smile-message">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileMessage',
    props: {
      text: { type: String, required: true },
      showClose: { type: Boolean, default: false },
    }
  };
</script>

<style lang="scss" scoped>
  .smile-message {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 15px 15px 20px;
    border-radius: $border-radius-md;
    min-width: 380px;
    background-color: pink;
  }
</style>
