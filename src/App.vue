<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-button class="item" :loading="true" icon="upload">primary</smile-button>
      <smile-button class="item" type="secondary">secondary</smile-button>
      <smile-button class="item" type="success">success</smile-button>
      <smile-button class="item" type="warning">warning</smile-button>
      <smile-button class="item" disabled type="danger">danger</smile-button>
      <smile-button
        class="item"
        :loading="loading"
        @click="onClick"
        icon-position="right"
        icon="thumbs-up"
        type="danger"
      >
        danger
      </smile-button>
    </div>
    <div class="component-wrapper">
      <smile-button-group class="item">
        <smile-button type="secondary" icon="left">left</smile-button>
        <smile-button type="secondary">middle</smile-button>
        <smile-button type="secondary" icon="right">right</smile-button>
      </smile-button-group>
      <smile-button-group class="item">
        <smile-button icon="left">left</smile-button>
        <smile-button>middle</smile-button>
        <smile-button icon="right">right</smile-button>
      </smile-button-group>
    </div>
    <div class="component-wrapper">
      <!-- v-model: 相当于为子组件传递了 :value="msg" 并且监听了子组件的input事件 @input="msg=$event" -->
      <smile-input
        placeholder="输入测试文字1"
        prefix="thumbs-up"
        v-model="msg"
        class="item"
        allowClear
      >
      </smile-input>
      <h2 class="item" style="margin-top: 10px;margin-bottom: 10px">{{msg}}</h2>
      <smile-input v-model="msg2" placeholder="输入测试文字2" class="item"></smile-input>
      <smile-input
        placeholder="输入测试文字1"
        prefix="password"
        v-model="msg"
        class="item"
      >
      </smile-input>
      <smile-input
        placeholder="输入测试文字1"
        prefix="user"
        v-model="msg"
        class="item"
        error-msg="用户名错误"
      >
      </smile-input>
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
      this.$message({ text: '测试message文字' });
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
    .item {
      margin-left: 20px;
    }
  }
</style>
