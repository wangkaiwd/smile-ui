<template>
  <div class="smile-tab">
    <ul class="smile-tab-header" ref="header">
      <li
        class="smile-tab-header-item"
        v-for="(header,i) in tabHeaders"
        :class="{active: select === header.name}"
        @click="onClick(header.name,i)"
        :key="header.name"
        ref="headerItem"
      >
        {{header.title}}
      </li>
      <li class="action-wrapper">
        <slot name="action"></slot>
      </li>
      <span class="smile-tab-header-line" ref="headerLine"></span>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tab',
    props: {
      select: { type: String },
      isOpenAnimation: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      select (newVal) {
        this.calcLineLeft(newVal);
      }
    },
    data () {
      return {
        tabHeaders: []
      };
    },
    mounted () {
      this.getTabHeaders();
      this.calcLineWidth();
    },
    methods: {
      getTabHeaders () {
        this.tabHeaders = this.$children.map(vm => ({ name: vm.name, title: vm.title }));
      },
      onClick (name) {
        this.$emit('update:select', name);
        this.$emit('on-change', name);
      },
      getDOMInfo () {
        const { header, headerLine, headerItem } = this.$refs;
        const headerLeft = header.getBoundingClientRect().left;
        const headerItemWidth = headerItem[0].getBoundingClientRect().width;
        return { headerLine, headerItem, headerLeft, headerItemWidth };
      },
      calcLineWidth () {
        // 这里为什么要用$nextTick?
        // line可以获取到，item获取不到
        this.$nextTick(() => {
          const { headerLine, headerItemWidth } = this.getDOMInfo();
          headerLine.style.width = `${headerItemWidth}px`;
          this.calcLineLeft();
        });
      },
      calcLineLeft () {
        const i = this.tabHeaders.findIndex(header => header.name === this.select);
        const { headerLine, headerLeft, headerItem } = this.getDOMInfo();
        const headerItemLeft = headerItem[i].getBoundingClientRect().left;
        headerLine.style.left = `${headerItemLeft - headerLeft}px`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-tab {
    &-header {
      position: relative;
      display: flex;
      border-bottom: 1px solid lighten($gray, 40%);
      overflow: auto;
    }
    &-header-line {
      position: absolute;
      bottom: 0;
      height: 2px;
      background-color: $primary;
      transition: all 0.4s;
    }
    &-header-item {
      &.active {
        color: $primary;
        font-weight: 500;
      }
      &:not(:first-child) {
        margin-left: $space-md;
      }
      padding: 1em;
      cursor: pointer;
    }
  }
</style>
