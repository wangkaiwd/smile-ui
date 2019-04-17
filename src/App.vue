<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-row>
        <smile-col :span="4">1</smile-col>
        <smile-col :span="4">2</smile-col>
        <smile-col :span="4">3</smile-col>
        <smile-col :span="4">4</smile-col>
        <smile-col :span="4">5</smile-col>
        <smile-col :span="4">6</smile-col>
      </smile-row>
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
      border: 4px solid orange;
    }
    .footer {
      border: 1px solid pink;
    }
    .aside {
      border: 1px solid black;
    }
  }
</style>
