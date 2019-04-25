<template>
  <div class="show-component">
    <div class="show-component-title">
      <h4 class="show-component-label">{{label}}</h4>
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
    props: {
      label: {
        type: String,
        required: true
      }
    },
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
      border-bottom: 1px solid #a6a6a6;
    }
    /*&-label {
      font-size: 20px;
      font-weight: bold;
    }*/
    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border: 1px solid #a6a6a6;
      padding: 0.5em 1em;
      border-radius: 4px;
    }
    &-icon {
      font-size: 16px;
      color: #42b983;
      transition: all .4s;
      margin-right: 4px;
      &.expanded {transform: rotate(90deg);}
    }
    &-body-wrapper {
      position: relative;
      border: 2px solid #ddd;
      background: #fff;
      margin: 32px 0 14px;
      padding: 40px 24px 26px;
    }
    /*
    通过设置max-height来实现过渡
    问题：会出现滚动条,所以只针对max-height来进行过渡
    */
    &-code-wrapper {
      max-height: 0; // 这里要设置max-height,设置为height不会有过渡效果
      transition: max-height .6s;
      overflow: hidden;
      &.expanded {
        max-height: 260px;
        overflow: auto;
      }
    }
    &-body-placeholder {
      margin-top: -10px;
      margin-left: -10px;
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
