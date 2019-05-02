### `Popover` 弹出层

<ClientOnly>
<template>
  <ShowComponent label="基础">
    <template #component-body>
      <ShowComponentItem>
        <smile-popover title="Title">
          <smile-button>click</smile-button>
          <template #content>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
          </template>
        </smile-popover>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
  <smile-popover title="Title">
    <smile-button>click</smile-button>
    <template #content>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
    </template>
  </smile-popover>
  ```
   </template>
  </ShowComponent>
  <ShowComponent label="设置方位">
    <template #component-body>
      <ShowComponentItem>
        <smile-popover title="Title">
          <smile-button>bottom</smile-button>
          <template #content>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
          </template>
        </smile-popover>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-popover title="Title" position="top">
          <smile-button type="secondary">top</smile-button>
          <template #content>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
          </template>
        </smile-popover>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-popover title="Title" position="left">
          <smile-button type="info">left</smile-button>
          <template #content>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
          </template>
        </smile-popover>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-popover title="Title" position="right">
          <smile-button type="danger">right</smile-button>
          <template #content>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
          </template>
        </smile-popover>
      </ShowComponentItem>
    </template>
    <template #component-code>
      
  ```vue
  <smile-popover title="Title" trigger="hover">
    <smile-button>bottom</smile-button>
    <template #content>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
    </template>
  </smile-popover>
  <smile-popover title="Title" position="top">
    <smile-button type="secondary">top</smile-button>
    <template #content>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
    </template>
  </smile-popover>
  <smile-popover title="Title" position="left">
    <smile-button type="info">left</smile-button>
    <template #content>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
    </template>
  </smile-popover>
  <smile-popover title="Title" position="right">
    <smile-button type="danger">right</smile-button>
    <template #content>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
      <p>this is content popover ...</p>
    </template>
  </smile-popover>
  
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="不同触发方式">
    <template #component-body>
      <ShowComponentItem>
        <smile-popover title="Title" position="left">
          <smile-button type="info">click</smile-button>
          <template #content>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
          </template>
        </smile-popover>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-popover 
          title="Title" 
          trigger="hover" 
          position="right"
        >
          <smile-button type="warning">hover</smile-button>
          <template #content>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
            <p>this is content popover ...</p>
          </template>
        </smile-popover>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
  <ShowComponentItem>
    <smile-popover title="Title" position="left">
      <smile-button type="info">click</smile-button>
      <template #content>
        <p>this is content popover ...</p>
        <p>this is content popover ...</p>
        <p>this is content popover ...</p>
      </template>
    </smile-popover>
  </ShowComponentItem>
  <ShowComponentItem>
    <smile-popover 
      title="Title" 
      trigger="hover" 
      position="right"
    >
      <smile-button type="warning">hover</smile-button>
      <template #content>
        <p>this is content popover ...</p>
        <p>this is content popover ...</p>
        <p>this is content popover ...</p>
      </template>
    </smile-popover>
  </ShowComponentItem>
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
      visible: false,
      visible1: false,
      visible2: false,
    };
  },
  mounted () {
  },
  methods: {
  }
};
</script>
<style lang="scss">
  .modal-demo {
    .modal-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .button-left {
      margin-right: 8px;
    }
  }
</style>
### `API`

|    参数      | 说明 | 类型(参数) | 默认值 |
| ----------   | ---  | ---- | ------ | 
| title       | 标题 | string | _(当没有title时不会展示) |
| position    | 出现位置，可选内容：top,bottom,left,right | string | bottom |
| trigger    | 触发方式，可选方式：click,hover | string | click |
| _ | 默认插槽：触发Popover的HTML元素 | _ | _ |
| content(slot)   | Popover 内嵌 HTML 文本 | _ | _ |

