<template>
  <div class="smile-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileButtonGroup',
    mounted () {
      this.validatorChild();
    },
    methods: {
      validatorChild () {
        for (let i = 0; i < this.$children.length; i++) {
          const child = this.$children[i];
          if (child.$options.name !== 'SmileButton') {return console.warn('button-group组件里的元素必须都是button组件，否则可能会产生奇怪的bug!');}
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-button-group {
    display: inline-flex;
    vertical-align: top;
    /deep/ .smile-button {
      & > button {
        border-radius: 0;
        &:focus {
          position: relative;
          z-index: 1;
          border-radius: $border-radius-md;
        }
      }
    }
    /deep/ .smile-button:first-child {
      button {
        border-bottom-left-radius: $border-radius-md;
        border-top-left-radius: $border-radius-md;
      }
    }
    /deep/ .smile-button:last-child {
      button {
        border-bottom-right-radius: $border-radius-md;
        border-top-right-radius: $border-radius-md;
      }
    }
  }
</style>
