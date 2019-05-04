<template>
  <div class="smile-carousel">
    <slot></slot>
    <div class="smile-carousel-arrow">
      <span
        class="smile-carousel-arrow-left"
        @click="updateSelect(activeChildIndex-1)"
      >
        <smile-icon icon="left"></smile-icon>
      </span>
      <span
        class="smile-carousel-arrow-right"
        @click="updateSelect(activeChildIndex+1)"
      >
        <smile-icon icon="right"></smile-icon>
      </span>
    </div>
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
        default: false
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
      // this.$children: 当前实例的直接子组件。
      // slot中的组件和非slot中的组件都会算入其中，比如这里使用到的icon组件，所以这里要只需要carouseItem组件
      // 这里也体现了为一个组件添加name属性的用途
      names () {
        return this.$children.filter(vm => vm.$options.name === 'SmileCarouselItem')
          .map(vm => vm.name);
      }
    },
    mounted () {
      this.doAutoPlay();
      this.childLength = this.$children.length;
    },
    methods: {
      doAutoPlay () {
        if (!this.autoPlay) return;
        let index = this.activeChildIndex;
        setInterval(() => {
          const oldIndex = index;
          index++;
          this.setChildReverse(index < oldIndex);
        }, 3000);
      },
      /**
       * 动画方向分析：
       *  0-2: 逆向动画
       *  2-0: 正向动画
       * 根据当前索引和下一个要进入item的索引，来确定所有的item的动画执行方向
       */
      slideDirection (oldIndex, newIndex) {
        const lastIndex = this.names.length - 1;
        if (newIndex === 0 && oldIndex === lastIndex) {
          this.setChildReverse(false);
        } else if (newIndex === lastIndex && oldIndex === 0) {
          this.setChildReverse(true);
        } else if (newIndex > oldIndex) {
          this.setChildReverse(false);
        } else {
          this.setChildReverse(true);
        }
      },
      setChildReverse (reverse) {
        this.$children.map(vm => vm.reverse = reverse);
      },
      updateSelect (index) {
        if (index < 0) {
          index = this.names.length - 1;
        }
        if (index > this.names.length - 1) {
          index = 0;
        }
        // 切换动画在方向变化之前执行了，要在dom更新完之后再进行渲染更新select
        this.$nextTick(() => {
          this.$emit('update:select', this.names[index]);
        });
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
    &-arrow-left,
    &-arrow-right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: $secondary;
      font-size: 30px;
      &:hover {
        cursor: pointer;
        color: $white;
      }
    }
    &-arrow-left {
      left: $space-lg;
    }
    &-arrow-right {
      right: $space-md;
    }
  }
</style>
