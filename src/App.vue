<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-layout class="layout">
        <smile-header class="header">header</smile-header>
        <smile-content class="content">content</smile-content>
        <smile-footer class="footer">footer</smile-footer>
      </smile-layout>
      <smile-layout class="layout">
        <smile-header class="header">header</smile-header>
        <smile-layout class="layout">
          <smile-aside>aside</smile-aside>
          <smile-content>content</smile-content>
        </smile-layout>
        <smile-content class="content">content</smile-content>
        <smile-footer class="footer">footer</smile-footer>
      </smile-layout>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {};
    },
    mounted () {
    },
    methods: {}
  };
</script>
<style lang="scss" scoped>
  .app {
    .component-wrapper {margin: 20px;}
    .layout {
      border: 1px solid red;
      height: 400px;
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
    .header {
      border: 1px solid blue;
    }
    .content {
      border: 1px solid orange;
    }
    .footer {
      border: 1px solid pink;
    }
  }
</style>
