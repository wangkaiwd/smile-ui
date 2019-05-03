<template>
  <div class="smile-carousel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileCarousel',
    data () {
      return {
        activeIndex: 0
      };
    },
    mounted () {
      this.$children.map((vm, i) => {
        if (i === this.activeIndex) {
          vm.visible = true;
        }
      });
    }
  };
</script>

<style lang="scss" scoped>
  .smile-carousel {
    display: inline-flex;
  }
</style>
