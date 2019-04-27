### `Grid` 栅格

<ClientOnly>
<template>
  <ShowComponent label="基础栅格">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-row class="demo-row">
          <smile-col :span="12" class="demo-col">col-12</smile-col>
          <smile-col :span="12" class="demo-col">col-12</smile-col>
        </smile-row>
        <smile-row class="demo-row">
          <smile-col :span="6" class="demo-col">col-6</smile-col>
          <smile-col :span="6" class="demo-col">col-6</smile-col>
          <smile-col :span="6" class="demo-col">col-6</smile-col>
          <smile-col :span="6" class="demo-col">col-6</smile-col>
        </smile-row>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  <template>
    <smile-row class="demo-row">
      <smile-col :span="12" class="demo-col">col-12</smile-col>
      <smile-col :span="12" class="demo-col">col-12</smile-col>
    </smile-row>
    <smile-row class="demo-row">
      <smile-col :span="6" class="demo-col">col-6</smile-col>
      <smile-col :span="6" class="demo-col">col-6</smile-col>
      <smile-col :span="6" class="demo-col">col-6</smile-col>
      <smile-col :span="6" class="demo-col">col-6</smile-col>
    </smile-row>
  </template>
  <style lang="scss" scoped>
  .demo-row {
    &:not(:first-child) {
      margin-top: 20px;
    }
    .demo-col {
      text-align: center;
      line-height: 40px;
      height: 40px;
      color: #fff;
    }
    .demo-col:nth-child(even) {
      background-color: rgba(0, 160, 233, 0.7);
    }
    .demo-col:nth-child(odd) {
      background-color: #00a0e9;
    }
  }
  </style>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="区块间隔">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-row class="demo-row" :gutter="16">
          <smile-col :span="6">
            <div class="demo-col">
              col-6
            </div>
          </smile-col>
          <smile-col :span="6">
            <div class="demo-col">
              col-6
            </div>
          </smile-col>
          <smile-col :span="6">
            <div class="demo-col">
              col-6
            </div>
          </smile-col>
          <smile-col :span="6">
            <div class="demo-col">
              col-6
            </div>
          </smile-col>
        </smile-row>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  
    <template>
      <smile-row class="demo-row" :gutter="16">
        <smile-col :span="6">
          <div class="demo-col">
            col-6
          </div>
        </smile-col>
        <smile-col :span="6">
          <div class="demo-col">
            col-6
          </div>
        </smile-col>
        <smile-col :span="6">
          <div class="demo-col">
            col-6
          </div>
        </smile-col>
        <smile-col :span="6">
          <div class="demo-col">
            col-6
          </div>
        </smile-col>
      </smile-row>
    </template>
    <style lang="scss" scoped>
    .demo-row {
      &:not(:first-child) {
        margin-top: 20px;
      }
      .demo-col {
        text-align: center;
        line-height: 40px;
        height: 40px;
        color: #fff;
      }
      .demo-col:nth-child(even) {
        background-color: rgba(0, 160, 233, 0.7);
      }
      .demo-col:nth-child(odd) {
        background-color: #00a0e9;
      }
    }
    </style>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="列偏移">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-row class="demo-row">
          <smile-col :offset="4" :span="6" class="demo-col">col-6</smile-col>
          <smile-col :span="6" class="demo-col">col-6</smile-col>
          <smile-col :span="6" class="demo-col">col-6</smile-col>
        </smile-row>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  
    <template>
      <smile-row class="demo-row">
        <smile-col :offset="4" :span="6" class="demo-col">col-6</smile-col>
        <smile-col :span="6" class="demo-col">col-6</smile-col>
        <smile-col :span="6" class="demo-col">col-6</smile-col>
      </smile-row>
    </template>
    <style lang="scss" scoped>
    .demo-row {
      &:not(:first-child) {
        margin-top: 20px;
      }
      .demo-col {
        text-align: center;
        line-height: 40px;
        height: 40px;
        color: #fff;
      }
      .demo-col:nth-child(even) {
        background-color: rgba(0, 160, 233, 0.7);
      }
      .demo-col:nth-child(odd) {
        background-color: #00a0e9;
      }
    }
    </style>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="flex布局">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-row type="flex" justify="between" class="demo-row">
          <smile-col :span="6" class="demo-col">col-6</smile-col>
          <smile-col :span="6" class="demo-col">col-6</smile-col>
        </smile-row>
        <smile-row type="flex" justify="between" align="center" class="demo-row">
          <smile-col :span="8" class="demo-col" style="height:80px">col-8</smile-col>
          <smile-col :span="8" class="demo-col">col-8</smile-col>
        </smile-row>
      </ShowComponentItem>
    </template>
  <template #component-code>
  
   ```vue
    
    <template>
      <smile-row type="flex" justify="between" class="demo-row">
        <smile-col :span="6" class="demo-col">col-6</smile-col>
        <smile-col :span="6" class="demo-col">col-6</smile-col>
      </smile-row>
      <smile-row type="flex" justify="between" align="center" class="demo-row">
        <smile-col :span="8" class="demo-col" style="height:80px">col-8</smile-col>
        <smile-col :span="8" class="demo-col">col-8</smile-col>
      </smile-row>
    </template>
    <style lang="scss" scoped>
    .demo-row {
      &:not(:first-child) {
        margin-top: 20px;
      }
      .demo-col {
        text-align: center;
        line-height: 40px;
        height: 40px;
        color: #fff;
      }
      .demo-col:nth-child(even) {
        background-color: rgba(0, 160, 233, 0.7);
      }
      .demo-col:nth-child(odd) {
        background-color: #00a0e9;
      }
    }
    </style>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="响应式">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-row class="demo-row">
          <smile-col :phone="{span:12}" :pc="{span:6}" class="demo-col">col-6</smile-col>
          <smile-col :phone="{span:12}" :pc="{span:6}" class="demo-col">col-6</smile-col>
          <smile-col :phone="{span:12}" :pc="{span:6}" class="demo-col">col-6</smile-col>
        </smile-row>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  
    <template>
      <smile-row class="demo-row">
        <smile-col :phone="{span:12}" :pc="{span:6}" class="demo-col">col-6</smile-col>
        <smile-col :phone="{span:12}" :pc="{span:6}" class="demo-col">col-6</smile-col>
        <smile-col :phone="{span:12}" :pc="{span:6}" class="demo-col">col-6</smile-col>
      </smile-row>
    </template>
    <style lang="scss" scoped>
    .demo-row {
      &:not(:first-child) {
        margin-top: 20px;
      }
      .demo-col {
        text-align: center;
        line-height: 40px;
        height: 40px;
        color: #fff;
      }
      .demo-col:nth-child(even) {
        background-color: rgba(0, 160, 233, 0.7);
      }
      .demo-col:nth-child(odd) {
        background-color: #00a0e9;
      }
    }
    </style>
  ```
  </template>
  </ShowComponent>
</template>
</ClientOnly>

<style lang="scss" scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  &:not(:first-child) {
    margin-top: 20px;
  }
  .demo-col {
    flex-shrink: 0;
    text-align: center;
    line-height: 40px;
    height: 40px;
    color: #fff;
  }
  .demo-col:nth-child(even) {
    background-color: rgba(0, 160, 233, 0.7);
  }
  .demo-col:nth-child(odd) {
    background-color: #00a0e9;
  }
}
</style>

### `API`

#### `SmileRow`
|  参数 | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| gutter | 输入框头部图标 |string| _ |
| type | 绑定值 | string/number | _ |
| justify | 是否可清空  | boolean | false |
| align   | 错误提示信息  | string/number | _ |

#### `SmileCow`
|    参数      | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| span | 输入框头部图标 |string| _ |
| offset | 绑定值 | string/number | _ |
| iphone | 是否可清空  | boolean | false |
| ipad   | 错误提示信息  | string/number | _ |
| narrowPc   | 错误提示信息  | string/number | _ |
| pc   | 错误提示信息  | string/number | _ |
| widePc   | 错误提示信息  | string/number | _ |
| largePc   | 错误提示信息  | string/number | _ |
