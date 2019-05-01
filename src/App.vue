<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-input placeholder="输入内容" v-model="value"></smile-input>
      <h2 class="input-value">{{value}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        value: ''
      };
    },
    mounted () {
    },
    methods: {}
  };
</script>
<style lang="scss" scoped>
  .app {
    .component-wrapper {
      margin: 20px;
    }
    .input-value {
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
    }
  }
</style>
