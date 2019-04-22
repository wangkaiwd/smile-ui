<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-row :gutter="8">
        <smile-col :span="4">
          <div class="col">1</div>
        </smile-col>
        <smile-col :span="4">
          <div class="col">2</div>
        </smile-col>
        <smile-col :span="4">
          <div class="col">3</div>
        </smile-col>
        <smile-col :span="4">
          <div class="col">4</div>
        </smile-col>
        <smile-col :span="4">
          <div class="col">5</div>
        </smile-col>
        <smile-col :span="4">
          <div class="col">6</div>
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
    .col {
      border: 1px solid red;
    }
  }
</style>
