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
    </template>
  <template #component-code>

  ```vue
  <smile-button>Primary</smile-button>
  <smile-button type="secondary">Secondary</smile-button>
  <smile-button type="success">Success</smile-button>
  <smile-button type="warning">Warning</smile-button>
  <smile-button type="danger">Danger</smile-button>
  <smile-button type="info">Info</smile-button>
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
