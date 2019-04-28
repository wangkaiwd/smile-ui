<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-popover
        title="Title"
        content="这是内容，这是内容，"
      >
        <template #trigger>
          <smile-button>click</smile-button>
        </template>
      </smile-popover>
      <ul>
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
        <li>内容4</li>
        <li>内容5</li>
        <li>内容6</li>
        <li>内容7</li>
        <li>内容8</li>
        <li>内容9</li>
        <li>内容10</li>
      </ul>
    </div>
  </div>
</template>

<script>
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
