<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-popover
        title="Title"
        position="top"
        content="这是内容，这是内容，"
      >
        <template #trigger>
          <smile-button>click</smile-button>
        </template>
      </smile-popover>
    </div>
    <div class="component-wrapper">
      <smile-popover
        title="Title"
        position="bottom"
        content="这是内容，这是内容，"
      >
        <template #trigger>
          <smile-button>click</smile-button>
        </template>
      </smile-popover>
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
    .component-wrapper {
      margin: 200px 200px 20px;
    }
  }
</style>
