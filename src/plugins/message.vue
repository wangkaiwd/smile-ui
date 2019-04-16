<template>
  <div class="smile-message" :class="position">
    <div class="smile-message-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SmileMessage',
    props: {
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
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-message {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.top {
      top: 20px;
    }
    &.bottom {
      bottom: 20px;
    }
    &.middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }
    padding: 15px 15px 15px 20px;
    border-radius: $border-radius-md;
    min-width: 380px;
    background-color: pink;
  }
</style>
