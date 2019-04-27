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
      <smile-input v-model="inputValue1" placeholder="输入内容"></smile-input>
      <smile-input v-model="inputValue2" allowClear placeholder="输入内容"></smile-input>
      <smile-input
        class="username"
        prefix="user"
        v-model="username"
        placeholder="Please input username"
      >
      </smile-input>
      <smile-input
        class="password"
        prefix="password"
        v-model="password"
        type="password"
        placeholder="Please input password"
      >
      </smile-input>
      <smile-input
        class="username"
        prefix="user"
        v-model="username"
        error-msg="用户名输入错误"
        placeholder="Please input username"
      >
      </smile-input>
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
  }
</style>
