<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-carousel>
        <smile-carousel-item
          v-for="list in carouseList"
          :key="list.id"
        >
          <img :src="list.url" alt="">
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
        carouseList: carouseList.imgList
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
