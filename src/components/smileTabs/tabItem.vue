<template>
  <transition name="slide" mode="out-in">
    <div class="smile-tab-item" v-if="$parent.select === name">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SmileTabItem',
    props: {
      title: { type: String, required: true },
      name: { type: String, required: true }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-tab-item {
    position: relative;
    padding: 1em;
    &.slide-enter {
      opacity: 0;
      transform: translateX(30px);
    }
    &.slide-leave-to {
      transform: translateX(-30px);
      opacity: 0;
    }
    &.slide-enter-active,
    &.slide-leave-active {
      position: absolute;
      transition: all 1s;
    }
  }
</style>
