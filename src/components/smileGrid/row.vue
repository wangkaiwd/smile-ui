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
   *
   * gutter的正确理解：
   *    1. gutter并不是说col之间的间隔，而是col内的元素和前一个col内元素的间隔
   *    2. 这里的gutter并不能使用margin,因为会使col的宽度变大，所以要用padding
   *    3. 而row用使用负margin,因为负padding无效
   *
   *    ant design的实现方式：给每个元素gutter一半的padding，最外层row会向左和向右偏移margin: 0 -gutter/8px
   *    自己的实现方式：将row整体左移margin-left: -gutter px,col组件设置padding-left: gutter px
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
