<template>
  <div class="smile-collapse-item">
    <div class="smile-collapse-item-title" @click="onClickTitle">{{title}}</div>
    <div class="smile-collapse-item-content" v-if="selected">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SmileCollapseItem',
    props: {
      name: {
        type: String,
        required: true
      },
      title: { type: String },
    },
    computed: {
      selected () {
        return this.$parent.selected.includes(this.name);
      }
    },
    methods: {
      onClickTitle () {
        const parentSelected = this.$parent.selected, index = parentSelected.indexOf(this.name);
        if (this.selected) {
          parentSelected.splice(index, 1);
        } else {
          parentSelected.push(this.name);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-collapse-item {
    &-title {
      color: $dark;
      padding: 1em;
      border-bottom: $border-gray;
      cursor: pointer;
    }
    &-content {
      color: $secondary;
      padding: 1em;
      border-bottom: $border-gray;
    }
  }
</style>
