<template>
  <div class="smile-button" @click="$emit('click')">
    <button :class={[type]:type,disabled} :disabled="disabled">
      <smile-icon class="smile-button-loading" icon="loading" v-if="loading"></smile-icon>
      <smile-icon class="smile-button-icon" :icon="icon" v-if="icon && !loading"></smile-icon>
      <div class="smile-button-text">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
  import SmileIcon from '../smileIcon';

  export default {
    name: 'SmileButton',
    components: { SmileIcon },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      icon: { type: String },
      iconPosition: {
        type: String,
        default: 'left',
        validator (position) {
          return ['left', 'right'].includes(position);
        }
      },
      loading: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false }
    }
  };
</script>

<style lang="scss" scoped>
  @mixin btn-type($class,$color) {
    &.#{$class} {
      background-color: $color;
      border: 1px solid $color;
      @if $class == warning {
        color: $dark;
      }
      &:hover {background-color: darken($color, 5%);}
      &:focus {box-shadow: 0 0 0 4px lighten($color, 30%);}
    }
    &.#{$class}.disabled {
      cursor: default;
      border: 1px solid lighten($color, 15%);
      background-color: lighten($color, 15%);
      &:hover {background-color: lighten($color, 15%);}
    }
  }

  .smile-button {
    display: inline-flex;
    vertical-align: top;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5em 1em;
      outline: none;
      color: $white;
      cursor: pointer;
      border-radius: $border-radius-md;
      /*这里的代码该如何优化？*/
      @include btn-type(primary, $primary);
      @include btn-type(secondary, $secondary);
      @include btn-type(success, $success);
      @include btn-type(warning, $warning);
      @include btn-type(danger, $danger);
      @include btn-type(info, $info);
    }
    &-icon, &-loading {
      margin-right: 4px;
    }
    &-loading {@include spin(1s)}
  }
</style>