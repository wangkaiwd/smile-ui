<template>
  <div class="smile-input">
    <div class="smile-input-wrapper">
      <input
        ref="smileInput"
        :value="value"
        @input="onInput"
        type="text"
        placeholder="Recipient's username"
      >
    </div>
    <smile-icon v-if="suffix" class="smile-input-suffix" :icon="suffix"></smile-icon>
    <!--    <smile-icon v-if="allowClear" class="smile-input-clear" icon="delete"></smile-icon>-->
  </div>
</template>

<script>
  import SmileIcon from '../smileIcon';

  export default {
    name: 'SmileInput',
    components: { SmileIcon },
    props: {
      suffix: String,
      value: String,
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
    computed: {},
    mounted () {
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
      border-radius: $border-radius-md;
      border: 1px solid lighten($gray, 30%);
      color: $gray;
      &::placeholder {
        color: lighten($gray, 14%);
      }
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
