<template>
  <div class="smile-row" :style="{paddingLeft:`-${gutter}px`}">
    {{`-${gutter}px`}}
    <slot></slot>
  </div>
</template>

<script>
  /**
   * slot父子组件通信问题：
   *    1. 在父组件通过this.$children方法来调用，但是要在子组件中预先定义对应的值
   *    2. 在子组件中通过this.$parent方法来获取父组件中的值
   *    3. 通过Vuex来进行全局范围内容的使用，这样对组件的嵌套关系并没有要求
   */
  export default {
    name: 'SmileRow',
    props: {
      gutter: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      this.passGutterToChild();
    },
    methods: {
      passGutterToChild () {
        this.$children.map(vm => {
          vm.gutter = this.gutter;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-row {
  }
</style>
