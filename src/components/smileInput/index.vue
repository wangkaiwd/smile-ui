<template>
  <div class="smile-input">
    <div class="smile-input-wrapper">
      <!--value:控件的初始值，此属性是可选的-->
      <input
        ref="smileInput"
        :value="value"
        v-bind="$attrs"
        v-on="inputListeners"
      >
    </div>
    <smile-icon v-if="suffix" class="smile-input-suffix" :icon="suffix"></smile-icon>
    <smile-icon
      v-if="isShowClear"
      class="smile-input-clear"
      icon="delete"
      @click="$emit('input','')"
    >
    </smile-icon>
  </div>
</template>

<script>
  import SmileIcon from '../smileIcon';

  /**
   * 封装组件使用：
   * 这些选项都不会影响到 class 和 style，在react中可以使用 ...this.props会将剩余的props参数进行扩展
   *  1. inheritAttrs:
   *    默认情况下，父作用域的不被认作props的特性的绑定(attribute bindings)将会“回退”且作为普通的html特性
   *    应用在子组件的根元素上。
   *  2. vm.$attrs:
   *    包含了父作用域中不作为prop被识别(且获取)的特性绑定。当一个组件没有声明任何prop时，这里会包含所有
   *    父作用域的绑定，并且可以通过v-bind="$attrs"传入内部组件--在创建高级组件时非常有用
   *  3. vm.$listeners:
   *    包含了父作用域中的（不含.native修饰器的）v-on事件监听器。它可以通过v-on="$listeners"传入内部组件
   *
   *  vue 2.4+  v-on 支持绑定对象： v-on="{mousedown: doThis, mouseup: doThat}"
   *
   *  v-bind 可以绑定对象
   */
  export default {
    name: 'SmileInput',
    // 开启之后仅仅会将子组件根元素上的属性和事件删除，并结合$attrs和$listener绑定到子组件中需要的元素上
    inheritAttrs: false,
    components: { SmileIcon },
    props: {
      suffix: String,
      value: {
        type: String,
        required: true
      },
      allowClear: {
        type: Boolean,
        default: true
      },
      errorMsg: {
        type: String
      }
    },
    data () {
      return {};
    },
    computed: {
      inputListeners () {
        return {
          ...this.$listeners,
          input: this.onInput
        };
      },
      isShowClear () {
        const { allowClear, value } = this;
        return allowClear && (value || value === 0);
      }
    },
    mounted () {
      // 父组件中传入的所有没有被子组件props接收的属性
      // console.log('attrs', this.$attrs);
      // 父组件中传入的所有没有被子组件props接收的方法
      // console.log('listeners', this.$listeners);
    },
    methods: {
      onInput (e) {
        const value = e.target.value;
        this.$emit('input', value);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-input {
    position: relative;
    display: inline-flex;
    vertical-align: top;
    input {
      min-height: 32px;
      outline: none;
      padding-left: 10px;
      padding-right: 28px;
      border-radius: $border-radius-md;
      border: 1px solid lighten($gray, 30%);
      color: $gray;
      &::placeholder {color: lighten($gray, 14%);}
      &:focus {box-shadow: 0 0 0 4px lighten($primary, 30%);}
    }
    &-suffix,
    &-clear {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      color: $gray;
    }
    &-clear {cursor: pointer;}
  }
</style>
