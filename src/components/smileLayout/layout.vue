<template>
  <div class="smile-layout" :class="{hasAside}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SmileLayout',
    data () {
      return {
        hasAside: false
      };
    },
    mounted () {
      this.init();
    },
    methods: {
      init () {
        this.$children.map(vm => {
          if (vm.$options.name === 'SmileAside') {
            this.hasAside = true;
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-layout {
    display: flex;
    flex-direction: column;
    flex: 1;
    &.hasAside {
      flex-direction: row;
    }
  }
</style>
