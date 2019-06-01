<template>
  <div class="smile-collapse-item" :class="{disabled}">
    <div class="smile-collapse-item-title" @click="onClickTitle">
      <span>{{title}}</span>
      <smile-icon
        class="smile-collapse-item-icon"
        icon="s-right"
        :class="{expand:selected}"
      >
      </smile-icon>
    </div>
    <transition name="slide">
      <div class="smile-collapse-item-content-wrapper" v-if="selected">
        <div class="smile-collapse-item-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  /**
   * 动画效果的不足：
   *  1. 在content展开时滚动条可能会影响用户体验
   *  2. 在content收缩时，感觉动画效果有一些迟缓，而代码中设置的是匀速
   *  3. 在前一个收缩，后一个展开时，会有一个动画的前后关系，而我们想要的是同时进行
   */
  export default {
    name: 'SmileCollapseItem',
    props: {
      name: {
        type: String,
        required: true
      },
      title: { type: String },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      selected () {
        return this.$parent.selected.includes(this.name);
      }
    },
    methods: {
      onClickTitle () {
        if (this.disabled) {return;}
        let parentSelected = JSON.parse(JSON.stringify(this.$parent.selected)),
          index = parentSelected.indexOf(this.name);
        if (this.selected) {
          parentSelected.splice(index, 1);
          this.$parent.updateSelected(parentSelected);
        } else {
          if (this.$parent.single) parentSelected = [];
          parentSelected.push(this.name);
          this.$parent.updateSelected(parentSelected);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";
  .smile-collapse-item {
    &.disabled {
      .smile-collapse-item-title {
        color: lighten($secondary, 10%);
        cursor: not-allowed;
      }
    }
    &-title {
      display: flex;
      justify-content: space-between;
      color: $dark;
      padding: 1em;
      border-bottom: $border-gray;
      cursor: pointer;
      background-color: $light;
    }
    &-content-wrapper {
      max-height: 600px;
      overflow: auto;
      &.slide-enter, &.slide-leave-to {
        max-height: 0;
      }
      &.slide-enter-active, &.slide-leave-active {
        transition: all 0.4s linear;
      }
    }
    &-content {
      color: $secondary;
      padding: 1em;
      border-bottom: $border-gray;
      line-height: 1.6;
    }
    &-icon {
      margin-left: auto;
      transition: all .4s linear;
      &.expand {
        transform: rotate(90deg);
      }
    }
  }
</style>
