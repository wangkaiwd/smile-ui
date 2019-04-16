<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-button @click="showMessage">上</smile-button>
      <br>
      <smile-button @click="showMessage1">中</smile-button>
      <br>
      <smile-button @click="showMessage2">下</smile-button>
      <smile-button @click="showMessage3">info</smile-button>
      <br>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        msg: '123',
        msg2: '',
        loading: false
      };
    },
    mounted () {
    },
    methods: {
      showMessage () {
        this.$message({ text: '测试message文字', duration: 2000, type: 'success' });
      },
      showMessage1 () {
        this.$message({ text: '测试文字', duration: 2000, position: 'middle', type: 'warning' });
      },
      showMessage2 () {
        this.$message({ text: '测试文字', duration: 2000, position: 'bottom', type: 'error' });
      },
      showMessage3 () {
        this.$message({
          text: '测试文字',
          duration: 2000,
          position: 'bottom',
          autoClose: false,
          confirmClose: this.onClose
        });
      },
      onClose () {
        console.log('message关闭了');
      }
    }
  };
</script>
<style lang="scss" scoped>
  .app {
    .component-wrapper {
      margin: 20px;
    }
    .item {

    }
  }
</style>
