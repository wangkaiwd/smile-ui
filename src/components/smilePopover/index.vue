<template>
  <div class="smile-popover">
    <div class="smile-popover-trigger" ref="trigger">
      <slot></slot>
    </div>
    <!--  为什么在popover第一次出现的时候会有轻微的闪动情况  -->
    <transition name="fade">
      <div
        class="smile-popover-content"
        :class="`position-${position}`"
        ref="content"
        v-if="visible"
      >
        <div class="smile-popover-content-header" v-if="title">{{title}}</div>
        <div class="smile-popover-content-wrapper">
          <slot name="content"></slot>
        </div>
        <div class="smile-popover-content-arrow"></div>
      </div>
    </transition>
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
   * Popover组件的几个难点：
   *  1. 父元素设置overflow:hidden;时会将popover弹出的内容隐藏掉
   *      为了避免这种情况发生，我们通常将元素放入body之中，这样只会在给body设置overflow:hidden;的时候才会隐藏元素。
   *      而由于body会占据页面中比较大的内容，而且用户很少为body设置overflow:hidden;，所以一般不会出现被overflow:hidden;属性
   *      隐藏的情况。而不放入body中，popover的父元素只要设置overflow:hidden,那么在高度没有满足的情况，很有可能会隐藏弹出层。
   *  2. 不能阻止事件冒泡
   *      阻断事件链会影响到用户的事件绑定
   *  3. 不让事件进行多余的监听
   *      绑定document的click事件的时机：
   *        a. 为什么不在mounted钩子函数即组件挂载完毕进行事件监听？
   *           这样会在页面一开始的时候就会绑定事件，如果我们的popover组件在当前页面用到的比较多，那么每有一个就会绑定一个事件，在性能
   *           上不怎么友好
   *        b. 为什么不在切换content显示隐藏时，content为显示状态时进行事件监听？
   *           这样会在前一个事件还未结束的时候就为document添加click事件，而在content的click的事件结束后，由于事件的冒泡机制，
   *           就会触发document的click事件
   *        比较好的绑定时机：在content click 事件结束后马上进行绑定 document的click事件,将visible置为false,然后再将document
   *                          的click事件移除,这样基本不会有多余的事件绑定
   *      绑定mouseenter和mouseleave事件的时机：
   *        a. 在组件加载完毕后给触发器绑定mouseenter和mouseleave事件,并且mouseleave事件实在鼠标移出200ms后才执行
   *        b. 在content内容区出现的时候，为内容区绑定mouseenter和mouseleave事件，在content内容区消失的时候移除对应的事件
   *           在content mouseenter事件触发后，将触发器的mouseleave的定时器清除，即不会再关闭content
   *
   * popover的难点并不是说控制弹出层的显示和隐藏，而是要帮用户写好弹出层的样式，控制弹出层的位置，以及不要有多余的事件监听。
   * 所以我们要做的最重要的功能就是帮用户写好css样式
   *
   * 由于click和hover俩种情况需要绑定的事件执行的逻辑不同，所以最好分开处理
   *
   * 这里存在一个问题：在hover情况下，当鼠标处于button 和 content 的交界处时 content会抖动？
   * 闪烁问题：箭头和button的距离过进，导致元素重叠，然后button的mouseenter和mouseleave事件反复触发
   */
  export default {
    name: 'SmilePopover1',
    props: {
      title: {
        props: String
      },
      position: {
        type: String,
        default: 'bottom',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].includes(value);
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator (value) {
          return ['click', 'hover'].includes(value);
        }
      }
    },
    data () {
      return {
        visible: false,
        timerId: null
      };
    },
    mounted () {
      const { trigger } = this.$refs;
      if (this.trigger === 'click') {
        trigger.addEventListener('click', this.onClick);
      } else if (this.trigger === 'hover') {
        trigger.addEventListener('mouseenter', this.hoverOpen);
        trigger.addEventListener('mouseleave', this.hoverClose);
      }
    },
    methods: {
      onClick (e) {
        if (this.visible) {
          this.clickClose(e);
        } else {
          this.clickOpen();
        }
      },
      hoverOpen () {
        if (this.timerId) {
          clearTimeout(this.timerId);
          this.timerId = null;
        }
        this.visible = true;
        setTimeout(() => {
          const { content } = this.$refs;
          this.positionContent();
          content.addEventListener('mouseenter', this.hoverOpen);
          content.addEventListener('mouseleave', this.hoverClose);
        });
      },
      clickOpen () {
        this.visible = true;
        setTimeout(() => {
          this.positionContent();
          document.addEventListener('click', this.listenToDocument);
        });
      },
      isContentChild (e) {
        const { content } = this.$refs;
        // 如果点击content及它的后代元素，不会关闭visible
        return content ? content.contains(e.target) : false;
      },
      hoverClose () {
        const { content } = this.$refs;
        this.timerId = setTimeout(() => {
          this.visible = false;
          this.timerId = null;
          content.removeEventListener('mouseenter', this.open);
          content.removeEventListener('mouseleave', this.close);
        }, 200);
      },
      clickClose (e) {
        if (!this.isContentChild(e)) {
          this.visible = false;
          document.removeEventListener('click', this.listenToDocument);
        }
      },
      positionContent () {
        const { trigger, content } = this.$refs;
        const { top, left, height, width } = trigger.getBoundingClientRect();
        document.body.appendChild(content);
        const config = {
          top: {
            left: left + width / 2 + window.scrollX,
            top: top + window.scrollY
          },
          left: {
            left: left + window.scrollX,
            top: top + height / 2 + window.scrollY
          },
          right: {
            left: left + width + window.scrollX,
            top: top + height / 2 + window.scrollY
          },
          bottom: {
            left: left + width / 2 + window.scrollX,
            top: top + height + window.scrollY
          }
        };
        content.style.left = `${config[this.position].left}px`;
        content.style.top = `${config[this.position].top}px`;
      },
      listenToDocument (e) {
        this.clickClose(e);
      },
      removeEvent () {
        const { content, trigger } = this.$refs;
        document.removeEventListener('click', this.listenToDocument);
        trigger.removeEventListener('mouseenter', this.open);
        trigger.removeEventListener('mouseleave', this.close);
        if (content) {
          content.removeEventListener('mouseenter', this.open);
          content.removeEventListener('mouseleave', this.close);
        }
      }
    },
    beforeDestroy () {
      this.removeEvent();
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
    display: inline-block;
    &-content {
      &.fade-enter,
      &.fade-leave-to {
        opacity: 0;
      }
      &.fade-enter-active,
      &.fade-leave-active {
        transition: all 0.2s;
      }
      position: absolute;
      max-width: 300px;
      line-height: 1.4;
      word-break: break-all;
      background-color: #fff;
      font-size: 14px;
      filter: drop-shadow($box-shadow); // 阴影滤镜，实现content的阴影包含箭头
      border-radius: $border-radius-md;
      z-index: 10000;
      &.position-bottom {
        transform: translateX(-50%);
        margin-top: 10px;
        .smile-popover-content-arrow {
          border-bottom: 8px solid #fff;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &.position-top {
        transform: translate(-50%, -100%);
        /* 这里多偏移1px，防止弹出层闪烁，只有在top时才会出现这种情况 */
        margin-top: -11px;
        .smile-popover-content-arrow {
          border-top: 8px solid #fff;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &.position-left {
        transform: translate(-100%, -50%);
        margin-left: -10px;
        .smile-popover-content-arrow {
          border-left: 8px solid #fff;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
        }
      }
      &.position-right {
        margin-left: 10px;
        transform: translateY(-50%);
        .smile-popover-content-arrow {
          border-right: 8px solid #fff;
          border-bottom: 8px solid transparent;
          border-top: 8px solid transparent;
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
        }
      }
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
    &-content-arrow {
      position: absolute;
      width: 0;
      height: 0;
    }
  }
</style>
