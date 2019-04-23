<template>
  <div
    class="smile-col"
    :class="colClasses"
    :style="colStyles"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileCol',
    props: {
      span: {
        type: Number,
        default: 24
      },
      offset: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        gutter: 0, // 这里要加初始值，否则会提示没有定义但是已经使用了的错误
        flexStyle: {}
      };
    },
    computed: {
      colStyles () {
        return {
          paddingLeft: `${this.gutter}px`,
        };
      },
      colClasses () {
        return [
          `smile-col-${this.span}`,
          `smile-col-offset-${this.offset}`
        ];
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-col {
    display: inline-block;
    @for $i from 1 through 24 {
      &.smile-col-#{$i} {
        width: ($i/24)*100%;
      }
      &.smile-col-offset-#{$i} {
        margin-left: ($i/24)*100%;
      }
    }
  }
</style>
