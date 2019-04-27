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
      <smile-row class="demo-row">
        <smile-col :span="12" class="demo-col">col-12</smile-col>
        <smile-col :span="12" class="demo-col">col-12</smile-col>
      </smile-row>
      <smile-row class="demo-row">
        <smile-col :span="6" class="demo-col">col-6</smile-col>
        <smile-col :span="6" class="demo-col">col-6</smile-col>
        <smile-col :span="6" class="demo-col">col-6</smile-col>
        <smile-col :span="6" class="demo-col">col-6</smile-col>
      </smile-row>
    </div>
    <div class="component-wrapper">
      <smile-row class="demo-row" :gutter="16">
        <smile-col :span="6">
          <div class="demo-col">
            col-6
          </div>
        </smile-col>
        <smile-col :span="6">
          <div class="demo-col">
            col-6
          </div>
        </smile-col>
        <smile-col :span="6">
          <div class="demo-col">
            col-6
          </div>
        </smile-col>
        <smile-col :span="6">
          <div class="demo-col">
            col-6
          </div>
        </smile-col>
      </smile-row>
    </div>
    <div class="component-wrapper">
      <smile-row class="demo-row">
        <smile-col :offset="4" :span="6" class="demo-col">col-6</smile-col>
        <smile-col :span="6" class="demo-col">col-6</smile-col>
        <smile-col :span="6" class="demo-col">col-6</smile-col>
      </smile-row>
    </div>
    <div class="component-wrapper">
      <smile-row type="flex" justify="between" class="demo-row">
        <smile-col :span="6" class="demo-col">col-6</smile-col>
        <smile-col :span="6" class="demo-col">col-6</smile-col>
      </smile-row>
      <smile-row type="flex" justify="between" align="center" class="demo-row">
        <smile-col :span="8" class="demo-col" style="height:80px">col-8</smile-col>
        <smile-col :span="8" class="demo-col">col-8</smile-col>
      </smile-row>
    </div>
    <div class="component-wrapper">
      <smile-row class="demo-row">
        <smile-col :phone="{span:12}" :pc="{span:6}" class="demo-col">col-6</smile-col>
        <smile-col :phone="{span:12}" :pc="{span:6}" class="demo-col">col-6</smile-col>
        <smile-col :phone="{span:12}" :pc="{span:6}" class="demo-col">col-6</smile-col>
      </smile-row>
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
    .demo-row {
      &:not(:first-child) {
        margin-top: 20px;
      }
      .demo-col {
        text-align: center;
        line-height: 40px;
        height: 40px;
        color: #fff;
      }
      .demo-col:nth-child(even) {
        background-color: rgba(0, 160, 233, 0.7);
      }
      .demo-col:nth-child(odd) {
        background-color: #00a0e9;
      }
    }
  }
</style>
