<template>
  <transition name="slide">
    <div class="smile-carousel-item" :class="{reverse}" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SmileCarouselItem',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        reverse: false
      };
    },
    computed: {
      visible () {
        return this.$parent.select === this.name;
      }
    }
  };
</script>

<style lang="scss" scoped>
  /*
    为什么动画的位置和自己想的有很大的出入：
  */
  .smile-carousel-item {
    width: 100%;
    &.slide-enter {
      transform: translateX(98%);
    }
    &.slide-leave-to {
      transform: translateX(-100%);
    }
    &.slide-enter.reverse {
      transform: translateX(-100%);
    }
    &.slide-leave-to.reverse {
      transform: translateX(98%);
    }
    &.slide-enter-active,
    &.slide-leave-active {
      transition: all 0.6s;
    }
    &.slide-leave-active {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
