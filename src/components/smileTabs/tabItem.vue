<template>
  <transition name="slide" :css="$parent.isOpenAnimation" mode="out-in">
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
    },
    computed: {},
    mounted () {
    }
  };
</script>

<style lang="scss" scoped>
  .smile-tab-item {
    position: relative;
    padding: 1em;
    &.slide-enter {
      opacity: 0;
      transform: translateX(100%);
    }
    &.slide-leave-to {
      transform: translateX(-100%);
      opacity: 0;
    }
    &.slide-enter-active,
    &.slide-leave-active {
      position: absolute;
      transition: all .4s;
    }
  }
</style>
