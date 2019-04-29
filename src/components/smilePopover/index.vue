<template>
  <div class="smile-popover">
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
   */
  export default {
    name: 'SmilePopover',
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
        相对于元素自身向右平移自己宽度
   */
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-popover {

  }
</style>
