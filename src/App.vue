<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-tab
        :select.sync="name"
        @on-change="onChange"
      >
        <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
        <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
        <smile-tab-item title="tab3" name="tab3">内容3</smile-tab-item>
        <smile-tab-item title="tab4" name="tab4">内容4</smile-tab-item>
      </smile-tab>
    </div>
    <div class="component-wrapper">
      <smile-tab
        :select.sync="name1"
        @on-change="onChange"
      >
        <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
        <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
        <smile-tab-item title="tab3" name="tab3">内容3</smile-tab-item>
        <smile-tab-item title="tab4" name="tab4">内容4</smile-tab-item>
      </smile-tab>
    </div>
    <div class="component-wrapper">
      <smile-button
        type="info"
        @click="$message({type:'success',text:'这是一条成功消息'})"
      >
        成功
      </smile-button>
      <smile-button
        type="info"
        @click="$message({type:'warning',text:'这是一条警告消息'})"
      >
        警告
      </smile-button>
      <smile-button
        @click="$message({type:'info',text:'这是一条消息提示'})"
        type="info"
      >
        消息
      </smile-button>
      <smile-button
        type="info"
        @click="$message({type:'error',text:'这是一条错误消息'})"
      >
        错误
      </smile-button>
    </div>
    <div class="component-wrapper">
      <smile-button type="info" @click="$message({type:'info',message:'10秒后关闭'})">
        10秒后关闭
      </smile-button>
    </div>
    <div class="component-wrapper">
      <smile-button
        type="info"
        @click="$message({text:'上侧提示消息',position: 'top'})"
      >
        上侧出现
      </smile-button>
      <smile-button
        type="danger"
        @click="$message({type:'error',text:'中间提示消息',position:'middle'})"
      >
        中间出现
      </smile-button>
      <smile-button
        type="warning"
        @click="$message({type:'warning',text:'下侧提示消息',position:'bottom'})"
      >
        下侧出现
      </smile-button>
    </div>
    <div class="component-wrapper">
      <smile-button
        type="info"
        @click="$message({
          text:'右侧关闭',
          autoClose: false
        })"
      >
        可关闭
      </smile-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        name: 'tab1',
        name1: 'tab2'
      };
    },
    mounted () {
    },
    methods: {
      onChange (name) {
        console.log('切换', name);
      },
    }
  };
</script>
<style lang="scss" scoped>
  .app {
    .component-wrapper {margin: 20px;}
  }
</style>
