<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-popover1 title="Title">
        <smile-button>click</smile-button>
        <template #content>
          <div>
            this is popover content
          </div>
        </template>
      </smile-popover1>
    </div>
    <div class="component-wrapper">
      <smile-popover1 title="Title1" position="top">
        <smile-button>click</smile-button>
        <template #content>
          <div>
            this is popover content
            this is popover content
            this is popover content
            this is popover content
            this is popover content
          </div>
        </template>
      </smile-popover1>
    </div>
    <div class="component-wrapper">
      <smile-popover1 title="Title1" position="left">
        <smile-button>click</smile-button>
        <template #content>
          <div>
            this is popover content
            this is popover content
            this is popover content
            this is popover content
            this is popover content
          </div>
        </template>
      </smile-popover1>
    </div>
    <div class="component-wrapper">
      <smile-popover1 title="Title1" position="right">
        <smile-button>click</smile-button>
        <template #content>
          <div>
            this is popover content
            this is popover content
            this is popover content
            this is popover content
            this is popover content
          </div>
        </template>
      </smile-popover1>
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
<style>
  body {
    border: 4px solid green;
  }
</style>
<style lang="scss" scoped>
  .app {
    .component-wrapper {
      margin: 220px;
    }
  }
</style>
