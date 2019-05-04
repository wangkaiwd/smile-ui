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
        let index = this.activeChildIndex;
        setInterval(() => {
          const oldIndex = index;
          index++;
          // index--;
          if (index < 0) {
            index = this.names.length - 1;
          }
          if (index > this.names.length - 1) {
            index = 0;
          }
          this.slideDirection(oldIndex, index);
          // 切换动画在方向变化之前执行了，要在dom更新完之后再进行渲染更新select
          this.$nextTick(() => {
            this.$emit('update:select', this.names[index]);
          });
        }, 3000);
      },
      /**
       * 动画方向分析：
       *  0-2: 逆向动画
       *  2-0: 正向动画
       *
       *  newIndex: 每一个item对应的索引
       *  oldIndex: 当前项的索引
       *  具体例子：
       *    当页面首次进入的时候
       *    newIndex: 0 1 2
       *    oldIndex: 0
       *    如果是正向轮播：0-1
       *      0: reverse: true  1: reverse=false  2: reverse=true
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
