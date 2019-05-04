<template>
  <transition name="slide" :css="$parent.isOpenAnimation">
    <div class="smile-tab-item" :class="{reverse}" v-if="$parent.select === name" ref="item">
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
    watch: {},
    data () {
      return {
        reverse: false
      };
    },
    computed: {},
    mounted () {
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-tab-item {
    width: 100%;
    flex-shrink: 0;
    padding: 1em;
    &.slide-enter {
      transform: translateX(98%);
    }
    &.slide-leave-to {
      transform: translateX(-100%);
    }
    &.slide-enter.reverse {
      transform: translateX(-98%);
    }
    &.slide-leave-to.reverse {
      transform: translateX(100%);
    }
    &.slide-enter-active,
    &.slide-leave-active {
      transition: all .4s;
    }
    /*
      在离开的时候设置绝对定位，既不会占据位置，也会让父元素的宽高会被进入的子元素撑开，
      还可以让执行动画的元素都处于和父元素相同的位置，即初始位置相同，不会由于translateX而导致位置移动错误
    */
    &.slide-leave-active {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
