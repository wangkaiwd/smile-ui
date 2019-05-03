<template>
  <div class="smile-carousel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileCarousel',
    props: {
      select: {
        type: String,
        required: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {};
    },
    mounted () {
      if (this.autoPlay) {
        this.doAutoPlay();
      }
    },
    methods: {
      doAutoPlay () {
        const names = this.$children.map(vm => vm.name);
        let index = names.indexOf(this.select);
        setInterval(() => {
          // index++;
          // if (index > names.length - 1) {
          //   index = 0;
          // }
          index--;
          if (index < 0) {
            index = names.length - 1;
          }
          this.$emit('update:select', names[index]);
        }, 2000);
      },
    }
  };
</script>

<style lang="scss" scoped>
  .smile-carousel {
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
</style>
