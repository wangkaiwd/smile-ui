### `Collapse` 折叠面板

<ClientOnly>
<template>
  <ShowComponent label="基础">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-collapse :selected.sync="select">
          <smile-collapse-item title="标题1" name="1">
            <ul>
              <li>内容1</li>
              <li>内容2</li>
              <li>内容3</li>
              <li>内容4</li>
            </ul>
          </smile-collapse-item>
          <smile-collapse-item title="标题2" name="2">
            <ul>
              <li>内容1</li>
              <li>内容2</li>
              <li>内容3</li>
              <li>内容4</li>
            </ul>
          </smile-collapse-item>
          <smile-collapse-item title="标题3" name="3">
            <ul>
              <li>内容1</li>
              <li>内容2</li>
              <li>内容3</li>
              <li>内容4</li>
            </ul>
          </smile-collapse-item>
         </smile-collapse>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
  <template>
    <smile-collapse :selected.sync="select">
      <smile-collapse-item title="标题1" name="1">
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </smile-collapse-item>
      <smile-collapse-item title="标题2" name="2">
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </smile-collapse-item>
      <smile-collapse-item disabled title="标题3" name="3">
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </smile-collapse-item>
    </smile-collapse>
  </template>
  <script>
    export default {
      name: 'App',
      data () {
        return {
          select: ['1']
        };
      },
      mounted () {
      },
      methods: {}
    };
  </script>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="只能打开一项">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-collapse :selected.sync="select1" single>
          <smile-collapse-item title="标题1" name="1">
            <ul>
              <li>内容1</li>
              <li>内容2</li>
              <li>内容3</li>
              <li>内容4</li>
            </ul>
          </smile-collapse-item>
          <smile-collapse-item title="标题2" name="2">
            <ul>
              <li>内容1</li>
              <li>内容2</li>
              <li>内容3</li>
              <li>内容4</li>
            </ul>
          </smile-collapse-item>
          <smile-collapse-item disabled title="标题3" name="3">
            <ul>
              <li>内容1</li>
              <li>内容2</li>
              <li>内容3</li>
              <li>内容4</li>
            </ul>
          </smile-collapse-item>
        </smile-collapse>
      </ShowComponentItem>
    </template>
    <template #component-code>
      
  ```vue
  <template>
    <smile-collapse :selected.sync="select" single>
      <smile-collapse-item title="标题1" name="1">
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </smile-collapse-item>
      <smile-collapse-item title="标题2" name="2">
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </smile-collapse-item>
      <smile-collapse-item disabled title="标题3" name="3">
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </smile-collapse-item>
    </smile-collapse>
  </template>
  <script>
    export default {
      name: 'App',
      data () {
        return {
          select: ['1']
        };
      },
      mounted () {
      },
      methods: {}
    };
  </script>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="禁用展开项">
    <template #component-body>
      <ShowComponentItem position="vertical">
        <smile-collapse :selected.sync="select2">
          <smile-collapse-item title="标题1" name="1">
            <ul>
              <li>内容1</li>
              <li>内容2</li>
              <li>内容3</li>
              <li>内容4</li>
            </ul>
          </smile-collapse-item>
          <smile-collapse-item title="标题2" name="2">
            <ul>
              <li>内容1</li>
              <li>内容2</li>
              <li>内容3</li>
              <li>内容4</li>
            </ul>
          </smile-collapse-item>
          <smile-collapse-item title="标题3" name="3">
            <ul>
              <li>内容1</li>
              <li>内容2</li>
              <li>内容3</li>
              <li>内容4</li>
            </ul>
          </smile-collapse-item>
        </smile-collapse>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
  <template>
    <smile-collapse :selected.sync="select" single>
      <smile-collapse-item title="标题1" name="1">
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </smile-collapse-item>
      <smile-collapse-item title="标题2" name="2">
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </smile-collapse-item>
      <smile-collapse-item disabled title="标题3" name="3">
        <ul>
          <li>内容1</li>
          <li>内容2</li>
          <li>内容3</li>
          <li>内容4</li>
        </ul>
      </smile-collapse-item>
    </smile-collapse>
  </template>
  <script>
    export default {
      name: 'App',
      data () {
        return {
          select: ['1']
        };
      },
      mounted () {
      },
      methods: {}
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
      select: ['1'],
      select1: ['1'],
      select2: ['1']
    };
  },
  mounted () {
  },
  methods: {
  }
};
</script>
<style lang="scss">

</style>
### `API`

#### `collapse`

|    参数      | 说明 | 类型(参数) | 默认值 |
| ----------   | ---  | ---- | ------ | 
| selected       | 展开项数组 | array | [] |
| single   | 是否只能展开一项 | boolean | false |

#### `collapseItem`

|    参数      | 说明 | 类型(参数) | 默认值 |
| ----------   | ---  | ---- | ------ | 
| name       | 名称（唯一标识） | string | 必传 |
| disabled    | 是否禁用展开项 | boolean | _ |
| title       | 标题 | string | _ |
| content(slot)   | collapseItem 内嵌 HTML 文本 | _ | _ |

