<template>
  <div class="smile-popover" :class="position">
    <div class="smile-popover-trigger" ref="trigger" @click="onClick">
      <slot name="trigger">
      </slot>
    </div>
    <div class="smile-popover-body" ref="body" :class="position" v-if="visible">
      <h3 class="smile-popover-body-title">
        {{title}}
      </h3>
      <div class="smile-popover-body-content">
        {{content}}
      </div>
      <div class="arrow" ref="arrow" :class="position"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SmilePopover',
    props: {
      title: {
        type: String
      },
      content: String,
      position: {
        type: String,
        default: 'bottom',
        validator (val) {
          return ['top', 'left', 'bottom', 'right'].includes(val);
        }
      }
    },
    data () {
      return {
        visible: false
      };
    },
    computed: {},
    mounted () {
    },
    methods: {
      /**
       * 事件的传播：
       *    一个事件发生后，会在子元素和父元素之间传播(propagation)。这种传播分成3个阶段:
       *        第一阶段：从window对象传导到目标节点（上层传到底层），称为"捕获阶段"（capture phase）
       *        第二阶段：从目标节点上触发，称为"目标阶段"。
       *        第三阶段：从目标节点传导回window对象（从底层传回上层），称为"冒泡阶段"(bubbling phase)
       *    这三种阶段的传播模型，使得同一个事件会在多个节点上触发
       *
       *  eventPhase:表示事件流当前处于哪一个阶段
       *  事件阶段常量：
       *    0： 这个时间没有事件正在被处理
       *    1： 捕获阶段
       *    2： 目标阶段
       *    3:  冒泡阶段
       */
      onClick () {
        this.visible = !this.visible;
        if (this.visible) {
          this.$nextTick(this.setArrowPosition);
        }
      },
      setArrowPosition () {
        const { trigger, arrow, body } = this.$refs;
        const {
          width: triggerWidth,
          height: triggerHeight,
          left: triggerLeft,
          top: triggerTop
        } = trigger.getBoundingClientRect();
        const { width: arrowWidth, height: arrowHeight } = arrow.getBoundingClientRect();
        if (this.position === 'top') {
          arrow.style.left = `${triggerWidth / 2 - arrowWidth / 2}px`;
          body.style.left = `${triggerLeft}px`;
          body.style.top = `${triggerTop}px`;
        } else if (this.position === 'bottom') {
          arrow.style.left = `${triggerWidth / 2 - arrowWidth / 2}px`;
          body.style.left = `${triggerLeft}px`;
          body.style.top = `${triggerTop + triggerHeight}px`;
        } else if (this.position === 'left') {
          arrow.style.top = `${triggerHeight / 2 - arrowHeight / 2}px`;
          body.style.top = `${triggerTop}px`;
          body.style.left = `${triggerLeft}px`;
        } else if (this.position === 'right') {
          arrow.style.top = `${triggerHeight / 2 - arrowHeight / 2}px`;
          body.style.top = `${triggerTop}px`;
          body.style.left = `${triggerLeft + triggerWidth}px`;
        }
      },
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-popover {
    position: relative;
    display: inline-block;
    &-body {
      position: fixed;
      &.bottom {
        margin-top: 8px;
      }
      &.top {
        transform: translateY(-100%);
        margin-top: -8px;
      }
      &.left {
        top: 0;
        transform: translateX(-100%);
        margin-left: -8px;
      }
      &.right {
        top: 0;
        margin-left: 8px;
      }
      min-width: 200px;
      max-width: 400px;
      background-color: #fff;
      border-radius: $border-radius-md;
      /*在透明背景使用该属性和想象中的不一样*/
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
    }
    &-body-title {
      font-size: 16px;
      padding: 8px 16px;
      border-bottom: $border-gray;
      font-weight: 500;
    }
    &-body-content {
      padding: 12px 16px;
    }
    .arrow {
      position: absolute;
      &.bottom {
        top: 0;
        transform: translateY(-100%);
        border-bottom: 8px solid #fff;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      }
      &.top {
        bottom: 0;
        transform: translateY(100%);
        border-top: 8px solid #fff;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      }
      &.left {
        right: 0;
        transform: translateX(100%);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 8px solid #fff;
      }
      &.right {
        left: 0;
        transform: translateX(-100%);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #fff;
      }
      width: 0;
    }
  }
</style>
