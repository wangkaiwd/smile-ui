<template>
  <div class="smile-popover1">
    <div class="smile-popover1-trigger" ref="trigger" @click="onClick">
      <slot></slot>
    </div>
    <!--  这里存在一个问题：为什么第一回出现会闪？-->
    <div
      class="smile-popover1-content"
      :class="`position-${position}`"
      ref="content"
      v-if="visible"
    >
      <div class="smile-popover1-content-header" v-if="title">{{title}}</div>
      <div class="smile-popover1-content-wrapper">
        <slot name="content"></slot>
      </div>
      <div class="smile-popover1-content-arrow"></div>
    </div>
  </div>
</template>

<script>
  /**
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
   *
   * popover的难点并不是说控制弹出层的显示和隐藏，而是要帮用户写好弹出层的样式，控制弹出层的位置，以及不要有多余的事件监听。
   * 所以我们要做的最重要的功能就是帮用户写好css样式
   *
   *  当加入了不同的触发方式的时候，又出现了问题
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
        visible: false
      };
    },
    mounted () {
      // if (this.trigger === 'click') {
      //   this.$refs.trigger.addEventListener('click', this.onClick);
      // } else if (this.trigger === 'hover') {
      //   this.$refs.trigger.addEventListener('mouseenter', this.open);
      //   this.$refs.trigger.addEventListener('mouseleave', this.close);
      // }
    },
    methods: {
      onClick (e) {
        if (this.visible) {
          return this.close(e);
        }
        this.open();
      },
      open () {
        this.visible = true;
        setTimeout(() => {
          this.positionContent();
          // if (this.trigger === 'click') {
          document.addEventListener('click', this.listenToDocument);
          // }
        });
      },
      close (e) {
        const { content } = this.$refs;
        // 如果点击content及它的后代元素，不会关闭visible
        const isContentChild = content ? content.contains(e.target) : false;
        console.log('isContentChild', isContentChild);
        if (!isContentChild) {
          this.visible = false;
          // if (this.trigger === 'click') {
          document.removeEventListener('click', this.listenToDocument);
          // }
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
        this.close(e);
      }
    },
    beforeDestroy () {
      // document.removeEventListener('click', this.listenToDocument);
      // document.removeEventListener('mouseenter', this.open);
      // document.removeEventListener('mouseleave', this.close);
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-popover1 {
    display: inline-block;
    &-content {
      position: absolute;
      max-width: 300px;
      line-height: 1.4;
      word-break: break-all;
      background-color: #fff;
      filter: drop-shadow($box-shadow); // 阴影滤镜，实现content的阴影包含箭头
      border-radius: $border-radius-md;
      &.position-bottom {
        transform: translateX(-50%);
        margin-top: 10px;
        .smile-popover1-content-arrow {
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
        margin-top: -10px;
        .smile-popover1-content-arrow {
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
        .smile-popover1-content-arrow {
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
        .smile-popover1-content-arrow {
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
