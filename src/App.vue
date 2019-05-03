<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-carousel :select.sync="select">
        <smile-carousel-item
          v-for="list in carouseList"
          :name="list.name"
          :key="list.id"
        >
          <div class="item">{{list.name}}</div>
        </smile-carousel-item>
      </smile-carousel>
    </div>
  </div>
</template>

<script>
  import { carouseList } from 'mock';

  export default {
    name: 'App',
    data () {
      return {
        carouseList: carouseList.imgList,
        select: 'name1'
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
    .item {
      width: 600px;
      height: 400px;
      background-color: pink;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      color: red;
    }
  }
</style>
