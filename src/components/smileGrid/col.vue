<template>
  <div class="smile-col" :class="`smile-col-${span}`" :style="colStyles">
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
        gutter: 0, // 这里要加初始值，否则会提示没有定义但是已经使用了的错误
        flexStyle: {}
      };
    },
    computed: {
      colStyles () {
        return {
          paddingLeft: `${this.gutter}px`,
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-col {
    /*flex: 0 0 auto;*/
    @for $i from 1 through 24 {
      &.smile-col-#{$i} {
        width: ($i/24)*100%;
      }
    }
  }
</style>
