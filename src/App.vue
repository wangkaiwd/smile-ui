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
      <smile-button type="secondary" @click="visible=true">
        show modal
      </smile-button>
      <smile-modal :visible.sync="visible" title="标题">
        <template #content>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </template>
      </smile-modal>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        visible: false
      };
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
      margin: 20px;
    }
  }
</style>
