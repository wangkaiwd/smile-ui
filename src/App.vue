<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-button class="btn" :loading="true" icon="upload">primary</smile-button>
      <smile-button class="btn" type="secondary">secondary</smile-button>
      <smile-button class="btn" type="success">success</smile-button>
      <smile-button class="btn" type="warning">warning</smile-button>
      <smile-button class="btn" disabled type="danger">danger</smile-button>
      <smile-button
        class="btn"
        :loading="loading"
        @click="onClick"
        icon-position="right"
        icon="thumbs-up"
        type="danger"
      >
        danger
      </smile-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        title: '',
        loading: false
      };
    },
    methods: {
      onClick () {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .app {
    .component-wrapper {
      margin-top: 20px;
    }
    .btn {
      margin-left: 20px;
    }
  }
</style>
