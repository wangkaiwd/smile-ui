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
| ----------   | ---  | ---- |
| gutter | 栅格间隔 | number | 0 |
| type | 布局模式，可选flex,现代浏览器下有效 | string | _ |
| justify | flex布局下的水平排列方式,可选值：start,end,center,around,between  | string | _ |
| align   | flex布局下的垂直布局方式，可选值：start,end,center  | string | _ |

#### `SmileCow`
|    参数      | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| span | 栅格占位格数 |number| _ |
| offset | 栅格左侧的间隔格数 | number | _ |
| iphone | `<576` 响应式栅格  | object | _ |
| ipad   | `>=576` 响应式栅格   | object | _ |
| narrowPc   | `>=768` 响应式栅格  | object | _ |
| pc   | `>=992` 响应式栅格  | object | _ |
| widePc   | `>=1200` 响应式栅格  | object | _ |
| largePc   | `>=1600` 响应式栅格  | object | _ |
