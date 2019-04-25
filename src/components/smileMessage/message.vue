<template>
  <div class="smile-message" :class="[position,type]">
    <div class="smile-message-wrapper">
      <smile-icon class="smile-message-icon" :icon="type"></smile-icon>
      <div class="smile-message-content">
        <slot></slot>
      </div>
    </div>
    <smile-icon class="smile-message-delete" icon="delete" @click="onClose" v-if="!autoClose"></smile-icon>
  </div>
</template>

<script>
  export default {
    name: 'SmileMessage',
    props: {
      type: { type: String, default: 'info' },
      text: { type: String, required: true },
      autoClose: { type: Boolean, default: true },
      position: {
        type: String,
        default: 'top',
        validator (val) {
          return ['top', 'middle', 'bottom'].includes(val);
        }
      },
      duration: { type: Number, default: 3000 },
      showClose: { type: Boolean, default: false },
      confirmClose: {
        type: Function,
        default: () => {}
      },
      // enableHtml: { type: Boolean, default: false } // 此功能谨慎开启
    },
    data () {
      return {
        visible: false
      };
    },
    mounted () {
      this.$nextTick(() => {
        this.open();
      });
    },
    methods: {
      open () {
        if (this.autoClose) {
          setTimeout(this.close, this.duration);
        }
      },
      close () {
        this.$destroy();
        this.$el.remove();
      },
      onClose () {
        this.close();
        this.confirmClose();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";

  .smile-message {
    position: fixed;
    display: flex;
    justify-content: space-between;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 15px 15px 20px;
    border-radius: $border-radius-md;
    min-width: 380px;
    &-wrapper {display: flex;}
    &-content {
      line-height: 1.2;
      word-break: break-all;
    }
    &-delete {cursor: pointer;}
    &.info {
      background-color: lighten($info, 38%);
      color: $info;
    }
    &.success {
      background-color: lighten($success, 38%);
      color: $success;
    }
    &.warning {
      background-color: lighten($warning, 38%);
      color: $warning;
    }
    &.error {
      background-color: lighten($danger, 38%);
      color: $danger;
    }
    &.top {top: 20px; animation: slide-top .4s;}
    &.bottom {bottom: 20px;animation: slide-bottom .4s;}
    &.middle {top: 50%;transform: translate(-50%, -50%); animation: slide-middle .4s;}
    &-icon {margin-right: $space-xs;}
    @keyframes slide-top {
      0% {top: 0;}
      100% {top: 20px;}
    }
    @keyframes slide-bottom {
      0% {bottom: 0;}
      100% {bottom: 20px;}
    }
    @keyframes slide-middle {
      0% {opacity: 0}
      100% {opacity: 1;}
    }
  }
</style>
