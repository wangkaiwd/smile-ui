<template>
  <div class="show-component-item" :class="position">
    <h4 v-if="label">{{label}}</h4>
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'ShowComponentItem',
    props: {
      label: { type: String },
      position: {
        type: String,
        default: 'horizontal',
        validator (val) {
          return ['horizontal', 'vertical'].includes(val);
        }
      }
    }
  };
</script>
<style lang="scss">
  .show-component-item {
    @import "~styles/reset";
  }
</style>
<style lang="scss" scoped>

  .show-component-item {
    margin-top: 10px;
    margin-left: 10px;
    h4 {
      margin: 0 0 10px 0;
      font-weight: 500;
    }
    &.horizontal {
      display: inline-block;
    }
    &.vertical {
      display: block;
    }
  }
</style>
