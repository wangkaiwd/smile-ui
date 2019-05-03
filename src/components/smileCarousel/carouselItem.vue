<template>
  <transition name="slide">
    <div class="smile-carousel-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SmileCarouselItem',
    data () {
      return {
        visible: false
      };
    }
  };
</script>

<style lang="scss" scoped>
  /*
    为什么动画的位置和自己想的有很大的出入：
  */
  .smile-carousel-item {
    &.slide-enter {
      transform: translateX(100%);
    }
    &.slide-leave-to {
      transform: translateX(-100%);
    }
    &.slide-enter-active,
    &.slide-leave-active {
      transition: all 1s;
    }
    &.slide-leave {
      position: absolute;
      top: 0;
      left: 0;
    }
    &.slide-leave-active {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
