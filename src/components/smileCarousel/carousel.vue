<template>
  <div class="smile-carousel">
    <slot></slot>
    <ul class="smile-carousel-controls">
      <li
        v-for="i in childLength"
        :class="{active: i === activeChildIndex+1}"
        :key="i"
      >
      </li>
    </ul>
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
      return {
        childLength: 0
      };
    },
    computed: {
      activeChildIndex () {
        return this.names.indexOf(this.select);
      },
      names () {
        return this.$children.map(vm => vm.name);
      }
    },
    mounted () {
      if (this.autoPlay) {
        this.doAutoPlay();
      }
      this.childLength = this.$children.length;
    },
    methods: {
      doAutoPlay () {
        const { names } = this;
        let index = this.activeChildIndex;
        setInterval(() => {
          index++;
          // if (index > names.length - 1) {
          //   index = 0;
          // }
          // index--;
          if (index < 0) {
            index = names.length - 1;
          }
          if (index > names.length - 1) {
            index = 0;
          }
          this.$emit('update:select', names[index]);
        }, 3000);
      },
      slideDirection () {
        // this.$children.map(vm => {
        //   const oldIndex = names.indexOf(this.select);
        //   const newIndex = names.indexOf(vm.name);
        //   vm.reverse = newIndex < oldIndex;
        // });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-carousel {
    position: relative;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    &-controls {
      position: absolute;
      bottom: $space-md;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      li {
        width: 30px;
        height: 3px;
        margin: 0 $space-xs;
        background-color: $secondary;
        &.active {
          background-color: $white;
        }
      }
    }
  }
</style>
