<template>
  <div class="smile-collapse-item">
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
  export default {
    name: 'SmileCollapseItem',
    props: {
      name: {
        type: String,
        required: true
      },
      title: { type: String },
    },
    computed: {
      selected () {
        return this.$parent.selected.includes(this.name);
      }
    },
    methods: {
      onClickTitle () {
        const parentSelected = this.$parent.selected, index = parentSelected.indexOf(this.name);
        if (this.selected) {
          parentSelected.splice(index, 1);
        } else {
          parentSelected.push(this.name);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-collapse-item {
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
        transition: all .4s;
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
      transition: all .4s;
      &.expand {
        transform: rotate(90deg);
      }
    }
  }
</style>
