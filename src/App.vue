<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-carousel>
        <smile-carousel-item>content1</smile-carousel-item>
        <smile-carousel-item>content2</smile-carousel-item>
        <smile-carousel-item>content3</smile-carousel-item>
      </smile-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        collapsed: false
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
