<template>
  <!--  <transition name="slide" :css="$parent.isOpenAnimation">-->
  <div class="smile-tab-item" v-if="$parent.select === name" ref="item">
    <slot></slot>
  </div>
  <!--  </transition>-->
</template>

<script>
  export default {
    name: 'SmileTabItem',
    props: {
      title: { type: String, required: true },
      name: { type: String, required: true }
    },
    watch: {},
    computed: {},
    mounted () {
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-tab-item {
    width: 100%;
    flex-shrink: 0;
    padding: 1em;
  }
</style>
