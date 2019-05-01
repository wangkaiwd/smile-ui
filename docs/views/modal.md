### `Modal` 对话框

<ClientOnly>
<template>
  <ShowComponent label="基础">
    <template #component-body>
      <ShowComponentItem>
        <smile-button type="secondary" @click="visible=true">
          basic modal
        </smile-button>
        <smile-modal
          :visible.sync="visible"
          title="标题"
          @on-cancel="visible=false"
          @on-ok="visible=false"
        >
          <template #content>
            <p v-for="k in 300" :key="k">Some contents...</p>
          </template>
        </smile-modal>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
  <template>
    <smile-button type="secondary" @click="visible=true">
      basic modal
    </smile-button>
    <smile-modal
      :visible.sync="visible"
      title="标题"
      @on-cancel="visible=false"
      @on-ok="visible=false"
    >
      <template #content>
        <p v-for="k in 300" :key="k">Some contents...</p>
      </template>
    </smile-modal>
  </template>
  <script>
    export default {
      name: 'App',
      data () {
        return {
          visible: false
        };
      },
    };
  </script>
  ```
   </template>
  </ShowComponent>
  <ShowComponent label="自定义页脚文字">
    <template #component-body>
      <ShowComponentItem>
        <smile-button type="secondary" @click="visible1=true">
          custom text
        </smile-button>
        <smile-modal
          :visible.sync="visible1"
          title="标题"
          cancel-text="自定义取消"
          ok-text="自定义确认"
          @on-cancel="visible1=false"
          @on-ok="visible1=false"
        >
          <template #content>
            <p v-for="k in 3" :key="k">Some contents...</p>
          </template>
        </smile-modal>
      </ShowComponentItem>
    </template>
    <template #component-code>
      
  ```vue
  <template>
    <smile-button type="secondary" @click="visible1=true">
      custom text
    </smile-button>
    <smile-modal
      :visible.sync="visible1"
      title="标题"
      cancel-text="自定义取消"
      ok-text="自定义确认"
      @on-cancel="visible1=false"
      @on-ok="visible1=false"
    >
      <template #content>
        <p v-for="k in 3" :key="k">Some contents...</p>
      </template>
    </smile-modal>
  </template>
  <script>
    export default {
      name: 'App',
      data () {
        return {
          visible1: false
        };
      },
      mounted () {
      },
      methods: {
      }
    };
  </script>
  ```
  </template>
  </ShowComponent>
  <ShowComponent label="自定义页脚">
    <template #component-body>
      <ShowComponentItem>
        <smile-button type="secondary" @click="visible2=true">
          custom footer
        </smile-button>
        <smile-modal
          :visible.sync="visible2"
          title="标题"
          custom-footer
          class="modal-demo"
        >
          <template #content>
            <p v-for="k in 3" :key="k">Some contents...</p>
          </template>
          <template #footer>
            <div class="modal-footer">
              <h3>I am custom footer</h3>
              <div class="modal-tools">
                <smile-button class="button-left" type="secondary" @click="visible2=false">return</smile-button>
                <smile-button @click="visible2=false">submit</smile-button>
              </div>
            </div>
          </template>
        </smile-modal>
      </ShowComponentItem>
    </template>
    <template #component-code>
    
  ```vue
  <template>
    <smile-button type="secondary" @click="visible2=true">
      custom footer
    </smile-button>
    <smile-modal
      :visible.sync="visible2"
      title="标题"
      custom-footer
      class="modal-demo"
    >
      <template #content>
        <p v-for="k in 3" :key="k">Some contents...</p>
      </template>
      <template #footer>
        <div class="modal-footer">
          <h3>I am custom footer</h3>
          <div class="modal-tools">
            <smile-button 
              class="button-left" 
              type="secondary" 
              @click="visible2=false"
            >
              return
            </smile-button>
            <smile-button @click="visible2=false">submit</smile-button>
          </div>
        </div>
      </template>
    </smile-modal>
  </template>
  <script>
    export default {
      name: 'App',
      data () {
        return {
          visible2: false
        };
      },
      mounted () {
      },
      methods: {
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
> 点击模态框的蒙层和右上角关闭图标时会关闭对话框，即会更改传入的`visible`。所以这里的`visible`要用`.sync`修饰符来绑定

|    参数      | 说明 | 类型(参数) | 默认值 |
| ----------   | ---  | ---- | ------ | 
| visible       | 对话框是否可见，需要使用`.sync`修饰符 |boolean| false |
| title    | 对话框标题 | string | _ |
| width    | 对话框宽度 | string | 50% |
| cancelText    | 取消按钮文字 | string | 取消 |
| okText    | 确认按钮文字 | string | 确认 |
| customFooter  | 是否自定义页脚 | boolean | false |
| on-cancel  | 点击取消按钮时触发 | _ | _ |
| on-ok  | 点击确认按钮时触发 | _ | _ |

