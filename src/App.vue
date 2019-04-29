<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-popover
        title="Title"
      >
        <smile-button>click</smile-button>
        <template #content>
          this is content one, this is content two
        </template>
      </smile-popover>
      <smile-popover
        title="Title"
        position="left"
      >
        <smile-button>click</smile-button>
        <template #content>
          this is content one, this is content two
        </template>
      </smile-popover>
      <smile-popover
        title="Title"
        position="top"
      >
        <smile-button>click</smile-button>
        <template #content>
          this is content one, this is content two
        </template>
      </smile-popover>
      <smile-popover
        title="Title"
        position="right"
      >
        <smile-button>click</smile-button>
        <template #content>
          this is content one, this is content two
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
      margin: 80px;
    }
  }
</style>
