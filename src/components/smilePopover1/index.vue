<template>
  <div class="smile-popover1" @click="onClick">
    <slot></slot>
    <div class="smile-popover1-content" v-if="visible">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  /**
   * Popover组件的几个难点：
   *  1. 父元素设置overflow:hidden;时该怎么办？
   *  2. 不能阻止事件冒泡
   *  3. 不让事件进行多余的监听
   *
   * popover的难点并不是说控制弹出层的显示和隐藏，而是要帮用户写好弹出层的样式，控制弹出层的位置，以及不要有多余的事件监听。
   * 所以我们要做的最重要的功能就是帮用户写好css样式
   */
  export default {
    name: 'SmilePopover1',
    data () {
      return {
        visible: false
      };
    },
    methods: {
      onClick () {
        this.visible = !this.visible;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-popover1 {
    display: inline-block;
    position: relative;
    &-content {
      border: 2px solid red;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
</style>
