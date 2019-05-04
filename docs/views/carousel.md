### `Carousel` 走马灯

> 该组件支持移动端，可以在移动端直接划动轮播

<ClientOnly>
<template>
  <ShowComponent label="基础">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-carousel :select.sync="select">
          <smile-carousel-item
            v-for="list in carouseList"
            :name="list.name"
            :key="list.id"
          >
            <div class="demo-item">{{list.name}}</div>
          </smile-carousel-item>
        </smile-carousel>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
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
  ```
   </template>
  </ShowComponent>
  <ShowComponent label="禁用自动播放">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-carousel :select.sync="select" :autoPlay="false">
          <smile-carousel-item
            v-for="list in carouseList"
            :name="list.name"
            :key="list.id"
          >
            <div class="demo-item">{{list.name}}</div>
          </smile-carousel-item>
        </smile-carousel>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
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
  ```
   </template>
  </ShowComponent>
  <ShowComponent label="隐藏底部工具条">
    <template #component-body>
      <ShowComponentItem position="vertical" :controls="false">
        <smile-carousel 
          :select.sync="select"
          :controls="false"
          autoPlay
        >
          <smile-carousel-item
            v-for="list in carouseList"
            :name="list.name"
            :key="list.id"
          >
            <div class="demo-item">{{list.name}}</div>
          </smile-carousel-item>
        </smile-carousel>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
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
  ```
   </template>
  </ShowComponent>
</template>
</ClientOnly>

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
  methods: {
  }
};
</script>
<style lang="scss">
  .demo-item {
    height: 400px;
    background-color: #343a40;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
    color: #fff;
  }
</style>
### `API`

#### `carousel`

|    参数      | 说明 | 类型(参数) | 默认值 |
| ----------   | ---  | ---- | ------ | 
| select       | 当前选中幻灯片的name | string(必填) | _ |
| autoPlay       | 是否自动切换 | boolean | true |
| controls    | 是否显示指示器 | boolean | true |
| controls    | 是否显示指示器 | boolean | true |
| interval    | 自动切换的时间间隔，单位为毫秒，设置时不能小于600,否则可能会出现问题 | number | 2000 |

#### `carouselItem`

|    参数      | 说明 | 类型(参数) | 默认值 |
| ----------   | ---  | ---- | ------ | 
| name      | 每张幻灯片的唯一标识 | string(必填) | _ |
