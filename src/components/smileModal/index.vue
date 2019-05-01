<template>
  <transition name="fade-scale">
    <div class="smile-modal" v-if="visible" @click="onClickMask">
      <div class="smile-modal-wrapper" ref="modalWrapper" :style="{width}">
        <div class="smile-modal-title">
          <h3>{{title}}</h3>
          <span class="smile-modal-close-icon" @click="$emit('update:visible',false)">
            <smile-icon
              class="smile-modal-close-icon-delete"
              icon="close-bold"
            >
            </smile-icon>
          </span>
        </div>
        <div class="smile-modal-content">
          <slot name="content"></slot>
        </div>
        <div class="smile-modal-custom-footer" v-if="customFooter">
          <slot name="footer"></slot>
        </div>
        <div class="smile-modal-footer" v-else="customFooter">
          <smile-button
            type="secondary"
            class="smile-modal-footer-cancel"
            @click="$emit('on-cancel')"
          >
            {{cancelText}}
          </smile-button>
          <smile-button @click="$emit('on-ok')">{{okText}}</smile-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SmileModal',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: { type: String, required: true },
      cancelText: {
        type: String,
        default: '取消'
      },
      okText: {
        type: String,
        default: '确认'
      },
      width: { type: String },
      customFooter: { type: Boolean, default: false },
    },
    watch: {
      // 模态框出现后阻止浏览器滚动
      visible (newVal) {
        if (newVal) {
          document.body.classList.add('modal-open');
        } else {
          document.body.classList.remove('modal-open');
        }
      }
    },
    mounted () {
      this.initModal();
    },
    methods: {
      onClickMask (e) {
        const { modalWrapper } = this.$refs;
        // 只有在点击蒙层时才会关闭模态框
        if (modalWrapper && !modalWrapper.contains(e.target)) {
          this.$emit('update:visible', false);
        }
      },
      initModal () {
        document.body.appendChild(this.$el);
      }
    },
  };
</script>
<style lang="scss">
  .modal-open {
    overflow: hidden;
  }
</style>
<style lang="scss" scoped>
  @import "~styles/vars";
  @import "~styles/mixins";
  .smile-modal {
    z-index: 10000;
    overflow: hidden;
    &.fade-scale-enter,
    &.fade-scale-leave-to {
      opacity: 0;
      .smile-modal-wrapper {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
      }
    }
    &.fade-scale-enter-active,
    &.fade-scale-leave-active {
      .smile-modal-wrapper {
        transition: all 0.4s;
      }
      /*必须要加这个过渡时间，动画效果才会生效*/
      transition: all 0.6s;
    }
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    .smile-modal-wrapper {
      opacity: 1;
      position: absolute;
      background-color: #fff;
      top: 50%;
      left: 50%;
      width: 50vw;
      min-width: 400px;
      transform: translate(-50%, -50%);
      border-radius: $border-radius-md;
      overflow: hidden;
    }
    &-title {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 $space-lg;
      height: 52px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .16);
      background-color: #f5f5f5;
      h3 {
        font-weight: 500;
        font-size: 18px;
      }
    }
    &-content {
      max-height: 70vh;
      overflow: auto;
      padding: $space-xl $space-lg;
      line-height: 1.5;
    }
    &-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 52px;
      padding: 0 $space-lg;
    }
    &-custom-footer {
      height: 52px;
      padding: 0 $space-lg;
    }
    &-footer-cancel {
      margin-right: $space-md;
    }
    &-close-icon {
      cursor: pointer;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      right: $space-md;
      transform: translateY(-50%);
      height: 30px;
      width: 30px;
      border-radius: 50%;
      font-size: 16px;
      color: rgba(0, 0, 0, .38);
      &:hover {
        background-color: rgba(0, 0, 0, .1);
        color: rgba(0, 0, 0, .87);
      }
    }
  }
</style>
