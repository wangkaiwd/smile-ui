### `Tabs` 标签页

<ClientOnly>
<template>
  <ShowComponent label="基础">
    <template #component-body>
      <ShowComponentItem>
        <smile-tab
          :select.sync="name"
        >
          <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
          <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
          <smile-tab-item title="tab3" name="tab3">内容3</smile-tab-item>
          <smile-tab-item title="tab4" name="tab4">内容4</smile-tab-item>
        </smile-tab>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
  <template>
    <smile-tab
      :select.sync="name"
      @on-change="onChange"
      :is-open-animation="false"
    >
      <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
       <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
      <smile-tab-item title="tab3" name="tab3">内容3</smile-tab-item>
      <smile-tab-item title="tab4" name="tab4">内容4</smile-tab-item>
    </smile-tab>
  </template>
  <script>
    export default {
      name: 'App',
      data () {
        return {
          name: 'tab1'
        };
      },
    };
  </script>
  ```
   </template>
  </ShowComponent>
   <ShowComponent label="监听改变">
      <template #component-body>
        <ShowComponentItem>
          <smile-tab
            :select.sync="name1"
          >
            <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
            <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
            <smile-tab-item title="tab3" name="tab3">内容3</smile-tab-item>
            <smile-tab-item title="tab4" name="tab4">内容4</smile-tab-item>
          </smile-tab>
        </ShowComponentItem>
      </template>
      <template #component-code>
      
  ```vue
  <template>
    <smile-tab
      :select.sync="name1"
      @on-change="onChange"
    >
      <smile-tab-item title="tab1" name="tab1">内容1</smile-tab-item>
       <smile-tab-item title="tab2" name="tab2">内容2</smile-tab-item>
      <smile-tab-item title="tab3" name="tab3">内容3</smile-tab-item>
      <smile-tab-item title="tab4" name="tab4">内容4</smile-tab-item>
    </smile-tab>
  </template>
  <script>
    export default {
      name: 'App',
      data () {
        return {
          name1: 'tab2'
        };
      },
      mounted () {
      },
      methods: {
        onChange (name) {
          console.log('切换', name);
        }
      }
    };
  </script>
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
      name: 'tab1',
      name1: 'tab2'
    };
  },
  mounted () {
  },
  methods: {
    onChange (name) {
      console.log('切换', name);
    }
  }
};
</script>

### `API`

#### `SmileTab`
|    参数      | 说明 | 类型(参数) | 默认值 |
| ----------   | ---  | ---- | ------ | 
| select       | 绑定值，选中选项卡的name，支持`.sync` |string| 必传 |
| on-change    | `tab`切换时触发 | 被选中标签的name | _ |

#### `SmileItem`
|    参数      | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| title    | 选项卡标题  |string| _ |
| name     | 与选项卡绑定的value对应的标识符，表示选项卡别名  | string | _ |
