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
      <header class="show-component-body-header">DEMO</header>
      <div class="show-component-body-placeholder">
        <slot name="component-body"></slot>
      </div>
      <footer class="show-component-body-footer">design by wangkaiwd</footer>
    </div>
    <!--
    css transition: height 0 to height auto
    :https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css
     -->
    <div class="show-component-code-wrapper" :class="{expanded}">
      <slot name="component-code"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShowComponent',
    data () {
      return {
        expanded: false,
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
    &-body-wrapper {
      position: relative;
      border: 2px solid #ddd;
      background: #fff;
      margin: 40px 0 40px 0;
      padding: 40px 24px 16px;
    }
    &-code-wrapper {
      max-height: 0px;
      overflow: auto;
      transition: all 1s;
      &.expanded {
        max-height: 260px;
      }
    }
    &-body-placeholder {
      margin-top: -10px;
    }
    &-body-content {
      margin-top: 0;
      margin-bottom: 24px;
      &:first-child {margin-top: 0;}
    }
    &-body-header {
      position: absolute;
      top: -2px;
      left: -2px;
      display: inline-block;
      padding: 4px 8px;
      background-color: #bbb;
      color: #fff;
      font-size: 80%;
    }
    &-body-footer {
      display: inline-block;
      position: absolute;
      bottom: 4px;
      right: 4px;
      font-size: 70%;
      color: #bbb;
    }
  }
</style>
