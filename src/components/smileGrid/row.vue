<template>
  <!-- 这里需要留意：css不支持负padding,所以只能使用负margin  推荐文章：https://stackoverflow.com/questions/4973988/why-does-css-not-support-negative-padding -->
  <div class="smile-row" :class="rowClasses" :style="rowStyles">
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
      },
      type: {
        type: String,
        validator (val) {
          return val === 'flex';
        }
      },
      justify: {
        type: String,
        validator (val) {
          return ['start', 'end', 'center', 'between', 'around'].includes(val);
        }
      },
      align: {
        type: String,
        validator (val) {
          return ['start', 'end', 'center'].includes(val);
        }
      }
    },
    computed: {
      rowStyles () {
        return { marginLeft: `-${this.gutter}px` };
      },
      rowClasses () {
        const tempObject = {};
        if (this.type) {
          tempObject['row-flex'] = true;
          this.align && (tempObject[`align-${this.align}`] = true);
          this.justify && (tempObject[`justify-${this.justify}`] = true);
        }
        return tempObject;
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
    &.row-flex {
      display: flex;
    }
    &.align-start {
      align-items: flex-start;
    }
    &.align-end {
      align-items: flex-end;
    }
    &.align-center {
      align-items: center;
    }
    &.justify-start {
      justify-content: flex-start;
    }
    &.justify-end {
      justify-content: flex-end;
    }
    &.justify-between {
      justify-content: space-between;
    }
    &.justify-around {
      justify-content: space-around;
    }
    &.justify-center {
      justify-content: center;
    }
  }
</style>
