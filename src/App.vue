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
    .item {
      height: 400px;
      background-color: $dark;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 100px;
      color: #fff;
    }
  }
</style>
