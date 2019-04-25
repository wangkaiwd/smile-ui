<template>
  <div class="show-component">
    <div class="show-component-title">
      <h4>类型</h4>
      <button class="show-component-button" @click="onClick">
        <smile-icon
          class="show-component-icon"
          :class="{expanded}"
          icon="s-right"
        >
        </smile-icon>
        Show Code
      </button>
    </div>
    <div class="show-component-body-wrapper">
      <slot name="component-body"></slot>
    </div>
    <div class="show-component-code-wrapper">
      <slot name="component-code"></slot>
    </div>
  </div>
</template>

<script>
  import SmileIcon from '@/components/smileIcon';

  export default {
    name: 'ShowComponent',
    components: { SmileIcon },
    data () {
      return {
        expanded: false
      };
    },
    methods: {
      onClick () {
        this.expanded = !this.expanded;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .show-component {
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #000;
    }
    &-button {
      display: flex;
      align-items: center;
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 0.5em 1em;
      border-radius: 4px;
    }
    &-icon {
      color: #42b983;font-size: 14px;
      transition: all .2s;
      margin-right: 4px;
      &.expanded {transform: rotate(90deg);}
    }
  }
</style>
