<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-tab
        :select.sync="name"
        @on-change="onChange"
      >
        <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
        <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
        <smile-tab-item title="tab3" name="tab3">内容3</smile-tab-item>
        <smile-tab-item title="tab4" name="tab4">内容4</smile-tab-item>
      </smile-tab>
    </div>
    <div class="component-wrapper">
      <smile-tab
        :select.sync="name1"
        @on-change="onChange"
      >
        <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
        <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
        <smile-tab-item title="tab3" name="tab3">内容3</smile-tab-item>
        <smile-tab-item title="tab4" name="tab4">内容4</smile-tab-item>
      </smile-tab>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        name: 'tab1',
        name1: 'tab2'
      };
    },
    mounted () {
    },
    methods: {
      onChange (name) {
        console.log('切换', name);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .app {
    .component-wrapper {margin: 20px;}
  }
</style>
