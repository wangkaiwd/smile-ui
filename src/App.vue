<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-tab>
        <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
        <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
      </smile-tab>
    </div>
  </div>
</template>

<script>
  // xs sm md lg xl xxl
  // phone ipad narrowPc pc widePc largePc
  // 通过媒体查询，用对应屏幕宽度的样式来应用对应的样式，将默认的span覆盖掉
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
  }
</style>
