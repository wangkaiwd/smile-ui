<template>
  <div class="smile-tab">
    <ul class="smile-tab-header">
      <li
        class="smile-tab-header-item"
        v-for="header in tabHeaders"
        :key="header.name"
      >
        {{header.title}}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tab',
    computed: {},
    data () {
      return {
        tabHeaders: []
      };
    },
    mounted () {
      this.getTabHeaders();
    },
    methods: {
      getTabHeaders () {
        this.tabHeaders = this.$children.map(vm => ({ name: vm.name, title: vm.title }));
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-tab {
    &-header {
      display: flex;
    }
    &-header-item {
      padding: 0.5em 1em;
      border: 1px solid red;
      cursor: pointer;
    }
  }
</style>
