<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-row class="row-demo" type="flex" justify="center" align="center" :gutter="8">
        <smile-col class="row-col" :span="4">
          1
        </smile-col>
        <smile-col class="row-col" :span="4">
          2
        </smile-col>
        <smile-col class="row-col" :span="4">
          3
        </smile-col>
        <smile-col class="row-col" :span="4">
          4
        </smile-col>
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
    .row-demo {
      border: 1px solid blue;
    }
    .row-col {
      height: 32px;
      line-height: 32px;
      &:first-child {
        height: 80px;
        line-height: 80px;
      }
      &:nth-child(odd) {
        background-color: pink;
      }
      &:nth-child(even) {
        background-color: red;
      }
    }
  }
</style>
