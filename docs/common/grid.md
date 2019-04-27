### `Grid` 栅格

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
</template>
</ClientOnly>

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
</style>

### `API`

#### `SmileRow`
|    参数      | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| align | 输入框头部图标 |string| _ |
| gutter | 绑定值 | string/number | _ |
| allowClear | 是否可清空  | boolean | false |
| errorMsg   | 错误提示信息  | string/number | _ |

#### `SmileCow`
|    参数      | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| prefix | 输入框头部图标 |string| _ |
| value/v-model | 绑定值 | string/number | _ |
| allowClear | 是否可清空  | boolean | false |
| errorMsg   | 错误提示信息  | string/number | _ |
