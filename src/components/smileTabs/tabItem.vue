<template>
  <div class="smile-tab-item" v-if="$parent.select === name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileTabItem',
    props: {
      title: { type: String, required: true },
      name: { type: String, required: true }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-tab-item {
    padding: 1em;
  }
</style>
