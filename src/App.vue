<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-collapse :selected="select">
        <smile-collapse-item title="标题1" name="1">1</smile-collapse-item>
        <smile-collapse-item title="标题2" name="2">2</smile-collapse-item>
        <smile-collapse-item title="标题3" name="3">3</smile-collapse-item>
      </smile-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        select: ['1']
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
  }
</style>
