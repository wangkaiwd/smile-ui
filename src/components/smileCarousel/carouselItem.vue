<template>
  <div class="smile-carousel-item" v-if="visible">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileCarouselItem',
    data () {
      return {
        visible: false
      };
    }
  };
</script>

<style lang="scss" scoped>
  .smile-carousel-item {

  }
</style>
