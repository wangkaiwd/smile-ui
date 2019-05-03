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
      this.setChildStatus();
      this.autoplay();
    },
    methods: {
      setChildStatus () {
        this.$children.map((vm, i) => {
          if (i === this.activeIndex) {
            vm.visible = true;
          } else {
            vm.visible = false;
          }
        });
      },
      autoplay () {
        setInterval(() => {
          this.activeIndex++;
          if (this.activeIndex > 2) {
            this.activeIndex = 0;
          }
          this.setChildStatus();
        }, 3000);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-carousel {
    /*border: 10px solid #000;*/
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
</style>
