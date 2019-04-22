<template>
  <div class="smile-col" :class="`col-${span}`" :style="{paddingLeft: `${gutter}px`}">
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
      }
    },
    data () {
      return {
        gutter: 0 // 这里要加初始值，否则会提示没有定义但是已经使用了的错误
      };
    }
  };
</script>

<style lang="scss" scoped>
  .smile-col {
    display: inline-block;
    width: 100%;
    @for $i from 1 through 24 {
      &.col-#{$i} {
        width: ($i/24)*100%;
      }
    }
  }
</style>
