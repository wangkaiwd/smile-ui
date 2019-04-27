### `Button` 按钮

<ClientOnly>
<template>
  <ShowComponent label="类型">
    <template #component-body>
      <ShowComponentItem>
        <smile-button>Primary</smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button type="secondary">Secondary</smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button type="success">Success</smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button type="warning">Warning</smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button type="danger">Danger</smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button type="info">Info</smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button disabled type="info">Disabled</smile-button>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  <smile-button>Primary</smile-button>
  <smile-button type="secondary">Secondary</smile-button>
  <smile-button type="success">Success</smile-button>
  <smile-button type="warning">Warning</smile-button>
  <smile-button type="danger">Danger</smile-button>
  <smile-button type="info">Info</smile-button>
  <smile-button disabled type="info">Disabled</smile-button>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="图标">
    <template #component-body>
      <ShowComponentItem>
        <smile-button icon="thumbs-up">Primary</smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button icon="download" type="secondary">Secondary</smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button 
          icon="setting" 
          type="success"
          icon-position="right"
        >
          Success
        </smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button 
          type="warning"
          icon="tick"
          icon-position="right"
        >
          Warning
        </smile-button>
      </ShowComponentItem>
    </template>
    <template #component-code>
  
  ```vue
  <smile-button icon="thumbs-up">Primary</smile-button>
  <smile-button icon="download" type="secondary">Secondary</smile-button>
  <smile-button 
    icon="setting" 
    type="success"
    icon-position="right"
  >
    Success
  </smile-button>
  <smile-button 
    type="warning"
    icon="tick"
    icon-position="right"
  >
    Warning
  </smile-button>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="加载中">
    <template #component-body>
      <ShowComponentItem>
        <smile-button 
          type="success"
          :loading="loading1"
          @click="onClick('loading1')"
        >
          Success
        </smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button 
          icon="setting" 
          type="info"
          :loading="loading2"
          @click="onClick('loading2')"
        >
          Info
        </smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button 
          type="warning"
          icon="tick"
          icon-position="right"
          :loading="loading3"
          @click="onClick('loading3')"
        >
          Warning
        </smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button 
          type="danger"
          icon="thumbs-up"
          :loading="true"
        >
          Danger
        </smile-button>
      </ShowComponentItem>
    </template>
    <template #component-code>
  
  ```vue
  <template>
    <smile-button 
      type="success"
      :loading="loading1"
      @click="onClick('loading1')"
    >
      Success
    </smile-button>
    <smile-button 
      icon="setting" 
      type="info"
      :loading="loading2"
      @click="onClick('loading2')"
    >
      Info
    </smile-button>
    <smile-button 
      type="warning"
      icon="tick"
      icon-position="right"
      :loading="loading3"
      @click="onClick('loading3')"
    >
      Warning
    </smile-button>
    <smile-button 
      type="danger"
      icon="thumbs-up"
      :loading="true"
    >
      Danger
    </smile-button>
  </template>
  <script>
    export default {
      data() {
        return {
          loading1: false,
          loading2: false,
          loading3: false
        }
      },
      methods: {
        onClick(loading) {
          this[loading] = true
          setTimeout(() => {
            this[loading] = false
          },2000)
        }
      }
    }
  </script>
  ```
   </template>
  </ShowComponent>
  <ShowComponent label="按钮组">
    <template #component-body>
      <ShowComponentItem>
        <smile-button-group>
          <smile-button 
            icon="left"
            type="secondary"
          >
            left
          </smile-button>
          <smile-button
            type="secondary"
          >
            middle
          </smile-button>
          <smile-button
            type="secondary"
            icon="right"
            icon-position="right"
          >
            right
          </smile-button>
        </smile-button-group>  
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button-group>
          <smile-button 
            icon="left"
          >
            left
          </smile-button>
          <smile-button>
            middle
          </smile-button>
          <smile-button
            icon="right"
            icon-position="right"
          >
            right
          </smile-button>
        </smile-button-group>  
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
<smile-button-group>
  <smile-button 
    icon="s-left"
    type="secondary"
  >
    left
  </smile-button>
  <smile-button
    type="secondary"
  >
    middle
  </smile-button>
  <smile-button
    type="secondary"
    icon="s-right"
  >
    right
  </smile-button>
</smile-button-group>
<smile-button-group>
 <smile-button 
   icon="left"
 >
   left
 </smile-button>
 <smile-button>
   middle
 </smile-button>
 <smile-button
   icon="right"
   icon-position="right"
 >
   right
 </smile-button>
</smile-button-group>  
  ```
   </template>
  </ShowComponent>
</template>
</ClientOnly>

<script>
export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false
    }
  },
  mounted() {
    
  },
  methods: {
    onClick(loading) {
      this[loading] = true
      setTimeout(() => {
        this[loading] = false
      },2000)
    }
  }
};
</script>

### `API`
|    参数      | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| type         | 设置按钮类型，可选值：primary,secondary,info,warning,danger |string| primary|
| icon         | 按钮图标  | string | - |
| iconPosition | 按钮图标位置  | string | left |
| loading      | 设置按钮载入状态  | boolean | false |
| disabled     | 按钮禁用状态  | boolean | false|
