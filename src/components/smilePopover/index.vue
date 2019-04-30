<template>
  <div class="smile-popover">
    <div class="smile-popover-trigger" ref="trigger" @click="onClick">
      <slot></slot>
    </div>
    <div class="smile-popover-content" :class="`position-${position}`" ref="content" v-if="visible">
      <h3 class="smile-popover-content-header" v-if="title">{{title}}</h3>
      <div class="smile-popover-content-wrapper">
        <slot name="content"></slot>
      </div>
      <div class="smile-popover-content-arrow"></div>
    </div>
  </div>
</template>

<script>
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
   *
   *  要将content放入到body中，防止被overflow: hidden; 干掉
   *
   *  为什么不阻止事件冒泡？
   *
   *  获取页面中元素的位置：https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
   *    元素在视口的位置+屏幕滚动的位置
   */
  export default {
    name: 'SmilePopover',
    props: {
      title: { type: String },
      position: {
        type: String,
        default: 'bottom',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].includes(value);
        }
      }
    },
    data () {
      return {
        visible: false
      };
    },
    mounted () {
      document.addEventListener('click', this.listenToDocument);
    },
    methods: {
      onClick () {
        this.visible = !this.visible;
        if (this.visible) {
          this.$nextTick(this.contentPosition);
        }
      },
      contentPosition () {
        const { content } = this.$refs;
        const { positionConfig, position } = this;
        // 为什么要放到body里边？防止被其它元素的overflow:hidden;干掉
        document.body.appendChild(content);
        content.style.left = positionConfig()[position].left + 'px';
        content.style.top = positionConfig()[position].top + 'px';
      },
      positionConfig () {
        const { trigger } = this.$refs;
        const {
          width: triggerWidth,
          height: triggerHeight,
          top: triggerTop,
          left: triggerLeft
        } = trigger.getBoundingClientRect();
        return {
          top: {
            left: triggerWidth / 2 + triggerLeft + window.scrollX,
            top: triggerTop + window.scrollY
          },
          bottom: {
            left: triggerWidth / 2 + triggerLeft + window.scrollX,
            top: triggerHeight + triggerTop + window.scrollY
          },
          left: {
            left: triggerLeft + window.scrollX,
            top: triggerTop + triggerHeight / 2 + window.scrollY
          },
          right: {
            left: triggerLeft + triggerWidth + window.scrollX,
            top: triggerTop + triggerHeight / 2 + window.scrollY
          }
        };
      },
      listenToDocument (e) {
        console.log('document click');
        //  点击trigger和content 及 它们的后代节点都不会关闭
        const { trigger, content } = this.$refs;
        const isTriggerChild = trigger ? trigger.contains(e.target) : false;
        const isContentChild = content ? content.contains(e.target) : false;
        if (isTriggerChild || isContentChild) return;
        this.visible = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  /**
    css 常用百分比介绍：
      top: 100%; 定位
        定位元素的上外边距边界与其包含快上边界之间的偏移
        设置为百分比(percentage): 元素包含块的高度的百分比
      margin-left/padding-left: 100%; 间距
        父元素width的百分比(这里是100%)
      translateX: 100%; 平移
        相对于元素自身向右平移自己宽度的100%
   */
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-popover {
    position: relative;
    &-trigger {
      display: inline-block;
    }
    &-content {
      position: absolute;
      &.position-bottom {
        margin-top: 8px; // 空出三角形的位置
        transform: translateX(-50%);
        .smile-popover-content-arrow {
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          border-bottom: 8px solid #fff;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
        }
      }
      max-width: 200px;
      background-color: #fff;
      /*文章推荐：https://www.zhangxinxu.com/wordpress/2016/05/css3-filter-drop-shadow-vs-box-shadow/*/
      /*box-shadow: $box-shadow;*/
      // 这样的阴影不会覆盖到箭头，导致箭头的阴影不好和content融合
      filter: drop-shadow($box-shadow); // 阴影滤镜，实现content的阴影包含箭头
      border-radius: $border-radius-md;
    }
    &-content-header {
      font-size: 16px;
      padding: 8px 16px;
      border-bottom: $border-gray;
      font-weight: 500;
    }
    &-content-wrapper {
      padding: 12px 16px;
    }
    /*宽高为0，用border来设置三角形*/
    &-content-arrow {
      position: absolute;
      height: 0;
      width: 0;
    }
  }
</style>
