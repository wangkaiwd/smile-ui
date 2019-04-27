### `message` 全局提示

<ClientOnly>
<template>
  <ShowComponent label="类型">
    <template #component-body>
    <ShowComponentItem>
      <smile-button
        type="success"
        @click="$message({type:'success',text:'这是一条成功消息'})"
      >
        Success
      </smile-button>
    </ShowComponentItem>
    <ShowComponentItem>
      <smile-button
        type="warning"
        @click="$message({type:'warning',text:'这是一条警告消息'})"
      >
        Warning
      </smile-button>
    </ShowComponentItem>
     <ShowComponentItem>
      <smile-button
        @click="$message({type:'info',text:'这是一条消息提示'})"
        type="info"
      >
        Info
      </smile-button>
    </ShowComponentItem>
    <ShowComponentItem>
      <smile-button
        type="danger"
        @click="$message({type:'error',text:'这是一条错误消息'})"
      >
        Danger
      </smile-button>
    </ShowComponentItem>
    
  </template>
  <template #component-code>

  ```vue
  <smile-button
    type="success"
    @click="$message({type:'success',text:'这是一条成功消息'})"
  >
    Success
  </smile-button>
  <smile-button
    type="warning"
    @click="$message({type:'warning',text:'这是一条警告消息'})"
  >
    Warning
  </smile-button>
  <smile-button
    @click="$message({type:'info',text:'这是一条消息提示'})"
    type="info"
  >
    Info
  </smile-button>
  <smile-button
    type="danger"
    @click="$message({type:'error',text:'这是一条错误消息'})"
  >
    Danger
  </smile-button>
  ```
   </template>
  </ShowComponent>
  <ShowComponent label="关闭时间">
      <template #component-body>
      <ShowComponentItem>
        <smile-button 
          type="info" 
          @click="$message({type:'info',text:'10秒后关闭',duration: 10000})"
        >
          10秒后关闭
        </smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button 
          type="info" 
          @click="$message({type:'info',text:'3秒后关闭',duration: 3000})"
        >
          3秒后关闭
        </smile-button>
      </ShowComponentItem>
    </template>
   <template #component-code>
  
  ```vue
  <smile-button 
    type="info" 
    @click="$message({type:'info',text:'10秒后关闭',duration: 10000})"
  >
    10秒后关闭
  </smile-button>
  <smile-button 
    type="info"
    @click="$message({type:'info',text:'3秒后关闭',duration: 3000})"
  >
    3秒后关闭
  </smile-button>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="位置">
    <template #component-body>
      <ShowComponentItem>
        <smile-button
          type="info"
          @click="$message({text:'上侧提示消息',position: 'top'})"
        >
          上侧出现
        </smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button
          type="danger"
          @click="$message({type:'error',text:'中间提示消息',position:'middle'})"
        >
          中间出现
        </smile-button>
      </ShowComponentItem>
      <ShowComponentItem>
        <smile-button
          type="warning"
          @click="$message({type:'warning',text:'下侧提示消息',position:'bottom'})"
        >
          下侧出现
        </smile-button>
      </ShowComponentItem>
    </template>
   <template #component-code>
    
  ```vue
  <smile-button 
    type="info" 
    @click="$message({type:'info',text:'10秒后关闭',duration: 10000})"
  >
    10秒后关闭
  </smile-button>
  <smile-button 
    type="info"
    @click="$message({type:'info',text:'3秒后关闭',duration: 3000})"
  >
    3秒后关闭
  </smile-button>
  ```
   </template>
   </ShowComponent>
   <ShowComponent label="位置">
     <template #component-body>
       <ShowComponentItem>
        <smile-button
          type="success"
          @click="$message({type:'success',text:'这是一条成功消息',autoClose:false})"
        >
          成功
        </smile-button>
       </ShowComponentItem>
       <ShowComponentItem>
         <smile-button
           type="warning"
           @click="$message({type:'warning',text:'这是一条警告消息',autoClose: false})"
         >
           警告
         </smile-button>
        </ShowComponentItem>
        <ShowComponentItem>
          <smile-button
            @click="$message({type:'info',text:'这是一条消息提示',autoClose:false})"
            type="info"
          >
            消息
          </smile-button>
         </ShowComponentItem>
         <ShowComponentItem>
            <smile-button
              type="danger"
              @click="$message({type:'error',text:'这是一条错误消息',autoClose:false})"
            >
              错误
            </smile-button>
          </ShowComponentItem>
     </template>
    <template #component-code>
       
   ```vue
   <smile-button
     type="success"
     @click="$message({type:'success',text:'这是一条成功消息',autoClose:false})"
   >
     成功
   </smile-button>
   <smile-button
     type="warning"
     @click="$message({type:'warning',text:'这是一条警告消息',autoClose: false})"
   >
     警告
   </smile-button>
   <smile-button
     @click="$message({type:'info',text:'这是一条消息提示',autoClose:false})"
     type="info"
   >
     消息
   </smile-button>
   <smile-button
     type="danger"
     @click="$message({type:'error',text:'这是一条错误消息',autoClose:false})"
   >
     错误
   </smile-button>
   ```
   </template>
 </ShowComponent>
</template>
</ClientOnly>

### `API`
|    参数      | 说明 | 类型 | 默认值 |
| ----------   | ---  | ---- | ------ | 
| type         | 设置按钮类型  |string| primary|
| icon         | 按钮图标  | string | - |
| iconPosition | 按钮图标位置  | string | left |
| loading      | 设置按钮载入状态  | boolean | false |
| disabled     | 按钮禁用状态  | boolean | false|
