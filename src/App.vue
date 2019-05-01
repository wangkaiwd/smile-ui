<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-button type="secondary" @click="visible=true">
        basic modal
      </smile-button>
      <smile-modal
        :visible.sync="visible"
        title="标题"
      >
        <template #content>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </template>
      </smile-modal>
    </div>
    <div class="component-wrapper">
      <smile-button type="secondary" @click="visible1=true">
        custom footer
      </smile-button>
      <smile-modal
        :visible.sync="visible1"
        title="标题"
        custom-footer
        class="modal-demo"
      >
        <template #content>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </template>
        <template #footer>
          <div class="modal-footer">
            <h3>I am custom footer</h3>
            <div class="modal-tools">
              <smile-button class="button-left" type="secondary" @click="visible1=false">return</smile-button>
              <smile-button @click="visible1=false">submit</smile-button>
            </div>
          </div>
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
        visible: false,
        visible1: false,
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
<style lang="scss">
  .modal-demo {
    .modal-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .button-left {
      margin-right: 8px;
    }
  }
</style>
