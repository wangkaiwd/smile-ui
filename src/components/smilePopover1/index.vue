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
   *  1. 父元素设置overflow:hidden;时会将popover弹出的内容隐藏掉
   *      为了避免这种情况发生，我们通常将元素放入body之中，这样只会在给body设置overflow:hidden;的时候才会隐藏元素。
   *      而由于body会占据页面中比较大的内容，而且用户很少为body设置overflow:hidden;，所以一般不会出现被overflow:hidden;属性
   *      隐藏的情况。而不放入body中，popover的父元素只要设置overflow:hidden,那么在高度没有满足的情况，很有可能会隐藏弹出层。
   *  2. 不能阻止事件冒泡
   *      阻断事件链会影响到用户的事件绑定
   *  3. 不让事件进行多余的监听
   *  4. 绑定document的click事件的时机：
   *      a. 为什么不在mounted钩子函数即组件挂载完毕进行事件监听？
   *          这样会在页面一开始的时候就会绑定事件，如果我们的popover组件在当前页面用到的比较多，那么每有一个就会绑定一个事件，在性能
   *          上不怎么友好
   *      b. 为什么不在切换content显示隐藏时，content为显示状态时进行事件监听？
   *          这样会在前一个事件还未结束的时候就为document添加click事件，而在content的click的事件结束后，由于事件的冒泡机制，
   *          就会触发document的click事件
   *      比较好的绑定时机：在前content click 事件结束后马上进行绑定 document的click事件,将visible置为false,然后再将document
   *                      的click事件移除,这样基本不会有多余的事件绑定
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
        if (this.visible) {
          console.log('show');
          setTimeout(() => {
            console.log('listen document click');
            document.addEventListener('click', this.listenToDocument);
          }, 10);
        } else {
          console.log('hide');
        }
      },
      listenToDocument () {
        this.visible = false;
        console.log('remove document click');
        document.removeEventListener('click', this.listenToDocument);
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
