### `Layout` 布局

<ClientOnly>
<template>
  <ShowComponent label="例子1">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-layout>
          <smile-header class="demo-header">Header</smile-header>
          <smile-content class="demo-content">Content</smile-content>
          <smile-footer class="demo-footer">Footer</smile-footer>
        </smile-layout>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  <smile-layout>
    <smile-header class="header">Header</smile-header>
    <smile-content class="content">Content</smile-content>
    <smile-footer class="footer">Footer</smile-footer>
  </smile-layout>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="例子2">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-layout>
          <smile-header class="demo-header">Header</smile-header>
          <smile-layout>
            <smile-aside class="demo-aside">Aside</smile-aside>
            <smile-content class="demo-content">Content</smile-content>
          </smile-layout>
          <smile-footer class="demo-footer">Footer</smile-footer>
        </smile-layout>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  
  <smile-layout>
    <smile-header class="demo-header">Header</smile-header>
    <smile-layout>
      <smile-aside class="demo-aside">Aside</smile-aside>
      <smile-content class="demo-content">Content</smile-content>
    </smile-layout>
    <smile-footer class="demo-footer">Footer</smile-footer>
  </smile-layout>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="例子3">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-layout>
          <smile-aside class="demo-aside">Aside</smile-aside>
          <smile-layout>
            <smile-header class="demo-header">Header</smile-header>
            <smile-content class="demo-content">Content</smile-content>
            <smile-footer class="demo-footer">Footer</smile-footer>
          </smile-layout>
        </smile-layout>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  
  <smile-layout>
    <smile-aside class="demo-aside">Aside</smile-aside>
    <smile-layout>
      <smile-header class="demo-header">Header</smile-header>
      <smile-content class="demo-content">Content</smile-content>
      <smile-footer class="demo-footer">Footer</smile-footer>
    </smile-layout>
  </smile-layout>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="可收缩">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-layout>
          <smile-aside
            class="demo-aside"
            :collapsed="collapsed"
          >
            Aside
          </smile-aside>
          <smile-layout>
            <smile-header class="demo-header">
              Header
              <smile-icon
                class="collapse-icon"
                @click="collapsed=!collapsed"
                :class="{collapsed}"
                icon="menu"
              >
              </smile-icon>
            </smile-header>
            <smile-content class="demo-content">Content</smile-content>
            <smile-footer class="demo-footer">Footer</smile-footer>
          </smile-layout>
        </smile-layout>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  
  <template>
    <div class="app">
      <smile-layout>
        <smile-aside
          class="demo-aside"
          :collapsed="collapsed"
        >
          Aside
        </smile-aside>
        <smile-layout>
          <smile-header class="demo-header">
            Header
            <smile-icon
              class="collapse-icon"
              @click="collapsed=!collapsed"
              :class="{collapsed}"
              icon="menu"
            >
            </smile-icon>
          </smile-header>
          <smile-content class="demo-content">Content</smile-content>
          <smile-footer class="demo-footer">Footer</smile-footer>
        </smile-layout>
      </smile-layout>
    </div>
  </template>
  
  <script>
    export default {
      name: 'App',
      data () {
        return {
          collapsed: false
        };
      },
      mounted () {
      },
      methods: {}
    };
  </script>
  <style lang="scss" scoped>
    .app {
      .demo-header,
      .demo-footer {
        background-color: #7dbcea;
        color: #fff;
        text-align: center;
        line-height: 60px;
      }
      .demo-content {
        background-color: rgba(16, 142, 233, 1);
        color: #fff;
        text-align: center;
        line-height: 120px;
      }
      .demo-aside {
        color: #fff;
        text-align: center;
        line-height: 120px;
        background-color: #3ba0e9;
      }
      .demo-header {
        position: relative;
      }
      .collapse-icon {
        cursor: pointer;
        position: absolute;
        left: 10px;
        top: 50%;
        padding: 4px;
        transform: translateY(-50%);
        font-size: 18px;
        transition: all .4s;
        &.collapsed {
          transform: translateY(-50%) rotate(90deg);
        }
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
        collapsed: false
      };
    },
    mounted () {
    },
    methods: {}
  };
</script>
<style lang="scss" scoped>
.demo-header,
.demo-footer {
  background-color: #7dbcea;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.demo-content {
  background-color: rgba(16, 142, 233, 1);
  color: #fff;
  text-align: center;
  line-height: 120px;
}
.demo-aside {
  color: #fff;
  text-align: center;
  line-height: 120px;
  background-color: #3ba0e9;
}
.demo-header {
  position: relative;
}
.collapse-icon {
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 50%;
  padding: 4px;
  transform: translateY(-50%);
  font-size: 18px;
  transition: all .4s;
  &.collapsed {
    transform: translateY(-50%) rotate(90deg);
  }
}
</style>

