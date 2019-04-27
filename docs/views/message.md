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
   <ShowComponent label="手动关闭">
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
|    参数      | 说明 | 类型(或参数) | 默认值 |
| ----------   | ---  | ---- | ------ | 
| type         | 设置提示信息类型 | string | info |
| text         | 消息文字 | string | - |
| autoClose | 是否自动关闭，如果设置为false,将会出现关闭按钮 | boolean | false |
| position     |  设置消息的弹出位置 | string | top |
| duration     | 动画的持续时间  | number | 2000(单位:ms) |
| confirm-close| 点击关闭后触发 | _ | _ |
