<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-row class="row-demo" :gutter="8">
        <smile-col class="row-col" :span="4" :ipad="{span:8,offset:2}">
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
