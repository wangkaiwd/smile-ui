<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-carousel :select.sync="select" autoPlay>
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
    .item {
      height: 400px;
      background-color: #343a40;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 100px;
      color: #fff;
    }
  }
</style>
