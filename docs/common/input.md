### `Input` 输入框

<ClientOnly>
<template>
  <ShowComponent label="基础">
    <template #component-body>
      <ShowComponentItem>
        <smile-input 
          v-model="inputValue1" 
          placeholder="输入内容"
         >
        </smile-input>
      </ShowComponentItem>
    </template>
  <template #component-code>

  ```vue
  <smile-input 
    v-model="inputValue1" 
    placeholder="输入内容"
   >
  </smile-input>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="可清空">
     <template #component-body>
       <ShowComponentItem>
         <smile-input 
          v-model="inputValue2" 
          allowClear 
          placeholder="输入内容"
         >
         </smile-input>
       </ShowComponentItem>
     </template>
   <template #component-code>
 
   ```vue
   <smile-input 
     v-model="inputValue2" 
     allowClear 
     placeholder="输入内容"
   >
   </smile-input>
   ```
   </template>
  </ShowComponent>
  <ShowComponent label="带icon">
     <template #component-body>
       <ShowComponentItem>
         <smile-input
           class="username"
           prefix="user"
           v-model="username"
           placeholder="Please input username"
         >
         </smile-input>
         <smile-input
           class="password"
           prefix="password"
           v-model="password"
           type="password"
           placeholder="Please input password"
         >
         </smile-input>
       </ShowComponentItem>
     </template>
   <template #component-code>
 
   ```vue
   <smile-input
     class="username"
     prefix="user"
     v-model="username"
     placeholder="Please input username"
   >
   </smile-input>
   <smile-input
     class="password"
     prefix="password"
     v-model="password"
     type="password"
     placeholder="Please input password"
   >
   </smile-input>
   ```
   </template>
  </ShowComponent>
    <ShowComponent label="错误提示">
     <template #component-body>
       <ShowComponentItem>
         <smile-input
           prefix="user"
           v-model="username1"
           error-msg="用户名输入错误"
           placeholder="Please input username"
         >
         </smile-input>
       </ShowComponentItem>
     </template>
   <template #component-code>
 
   ```vue
   <smile-input
     class="username"
     prefix="user"
     v-model="username1"
     error-msg="用户名输入错误"
     placeholder="Please input username"
   >
   </smile-input>
   ```
   </template>
  </ShowComponent>
</template>
</ClientOnly>

<script>
export default {
  data() {
    return {
      inputValue1: '',
      inputValue2: '',
      username: '',
      username1: '错误的用户名',
      password: ''
    }
  },
  mounted() {
    
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.password {
  display: block;
  margin-top: 10px;
}
</style>
### `API`
|    参数      | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| prefix | 输入框头部图标 |string| _ |
| value/v-model | 绑定值 | string/number | _ |
| allowClear | 是否可清空  | boolean | false |
| errorMsg   | 错误提示信息  | string/number | _ |

