<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-tab
        :select.sync="name"
        @on-change="onChange"
        :is-open-animation="false"
      >
        <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
        <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
        <smile-tab-item title="tab3" name="tab3">内容3</smile-tab-item>
        <smile-tab-item title="tab4" name="tab4">内容4</smile-tab-item>
        <smile-tab-item title="tab5" name="tab5">内容5</smile-tab-item>
        <smile-tab-item title="tab6" name="tab6">内容6</smile-tab-item>
        <smile-tab-item title="tab7" name="tab7">内容7</smile-tab-item>
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
      return {
        name: 'tab1'
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
