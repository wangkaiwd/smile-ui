<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-popover1 title="Title" trigger="hover">
        <smile-button>Click</smile-button>
        <template #content>
          <p>this is content ...</p>
          <p>this is content ...</p>
          <p>this is content ...</p>
        </template>
      </smile-popover1>
    </div>
    <div class="component-wrapper">
      <smile-popover1 title="Title" trigger="click" position="top">
        <smile-button>Click</smile-button>
        <template #content>
          <p>this is content ...</p>
          <p>this is content ...</p>
          <p>this is content ...</p>
        </template>
      </smile-popover1>
    </div>
    <div class="component-wrapper">
      <smile-popover1 title="Title" trigger="hover" position="left">
        <smile-button>Click</smile-button>
        <template #content>
          <p>this is content ...</p>
          <p>this is content ...</p>
          <p>this is content ...</p>
        </template>
      </smile-popover1>
    </div>
    <div class="component-wrapper">
      <smile-popover1 title="Title" trigger="hover" position="right">
        <smile-button>Click</smile-button>
        <template #content>
          <p>this is content ...</p>
          <p>this is content ...</p>
          <p>this is content ...</p>
        </template>
      </smile-popover1>
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
      margin-left: 200px;
      margin-top: 100px;
    }
  }
</style>
