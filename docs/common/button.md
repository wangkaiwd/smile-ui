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
</template>
</ClientOnly>
