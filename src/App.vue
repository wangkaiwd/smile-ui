<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-tab :select.sync="select" :is-open-animation="true">
        <smile-tab-item
          name="1"
          title="tab1"
        >
          content1
        </smile-tab-item>
        <smile-tab-item
          name="2"
          title="tab2"
        >
          content2
        </smile-tab-item>
        <smile-tab-item
          name="3"
          title="tab3"
        >
          content3
        </smile-tab-item>
        <smile-tab-item
          name="4"
          title="tab4"
        >
          content4
        </smile-tab-item>
        <smile-tab-item
          name="5"
          title="tab5"
        >
          content5
        </smile-tab-item>
      </smile-tab>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        carouseList: [
          { id: 1, name: '1' },
          { id: 2, name: '2' },
          { id: 3, name: '3' },
          { id: 4, name: '4' }
        ],
        select: '1'
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
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px;
    }
  }
</style>
