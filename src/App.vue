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
    <div class="component-wrapper">
      <smile-layout>
        <smile-header class="demo-header">Header</smile-header>
        <smile-content class="demo-content">Content</smile-content>
        <smile-footer class="demo-footer">Footer</smile-footer>
      </smile-layout>
    </div>
    <div class="component-wrapper">
      <smile-layout>
        <smile-header class="demo-header">Header</smile-header>
        <smile-layout>
          <smile-aside class="demo-aside">Aside</smile-aside>
          <smile-content class="demo-content">Content</smile-content>
        </smile-layout>
        <smile-footer class="demo-footer">Footer</smile-footer>
      </smile-layout>
    </div>
    <div class="component-wrapper">
      <smile-layout>
        <smile-aside class="demo-aside">Aside</smile-aside>
        <smile-layout>
          <smile-header class="demo-header">Header</smile-header>
          <smile-content class="demo-content">Content</smile-content>
          <smile-footer class="demo-footer">Footer</smile-footer>
        </smile-layout>
      </smile-layout>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        name: 'tab1',
        name1: 'tab2',
        inputValue1: '',
        inputValue2: '',
        username: '',
        password: ''
      };
    },
    mounted () {
    },
    methods: {
      onChange (name) {
        console.log('切换', name);
      },
    }
  };
</script>
<style lang="scss" scoped>
  .app {
    .component-wrapper {margin: 20px;}
    .password {
      display: block;
      margin-top: 10px;
    }
    .demo-header,
    .demo-footer {
      background-color: #7dbcea;
      color: #fff;
      text-align: center;
      line-height: 60px;
    }
    .demo-aside {
      color: #fff;
      text-align: center;
      line-height: 120px;
      background-color: #3ba0e9;
    }
    .demo-content {
      background-color: rgba(16, 142, 233, 1);
      color: #fff;
      text-align: center;
      line-height: 120px;
    }
  }
</style>
