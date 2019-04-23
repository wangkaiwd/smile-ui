<template>
  <div
    class="smile-col"
    :class="colClasses"
    :style="colStyles"
  >
    <slot></slot>
  </div>
</template>

<script>
  const responseType = {
    type: Object,
    validator (val) {
      const array = ['offset', 'span'];
      let isValid = true;
      for (const k in val) {
        if (!array.includes(k)) {
          isValid = false;
        }
      }
      return isValid;
    }
  };
  const devices = ['phone', 'ipad', 'narrowPc'];
  export default {
    name: 'SmileCol',
    props: {
      span: {
        type: Number,
        default: 24
      },
      offset: {
        type: Number,
        default: 0
      },
      phone: responseType,
      ipad: responseType,
      narrowPc: responseType
    },
    data () {
      return {
        gutter: 0, // 这里要加初始值，否则会提示没有定义但是已经使用了的错误
        flexStyle: {}
      };
    },
    computed: {
      colStyles () {
        return {
          paddingLeft: `${this.gutter}px`,
        };
      },
      colClasses () {
        const classes = [`span-${this.span}`, `offset-${this.offset}`];
        return devices.map(device => [...classes, ...this.createResponseClass(device)]);
      }
    },
    methods: {
      createResponseClass (device) {
        if (this[device]) {
          const { span, offset } = this[device];
          return [`${device}-span-${span}`, `${device}-offset-${offset}`];
        }
        return [];
      }
    }
  };
</script>

<style lang="scss" scoped>
  .smile-col {
    display: inline-block;
    @for $i from 1 through 24 {
      &.span-#{$i} {
        width: ($i/24)*100%;
      }
      &.offset-#{$i} {
        margin-left: ($i/24)*100%;
      }
    }
    @each $item in 576px 768px 992px 1200px 1600px {
      @media screen and (min-width: #{$item}) {
        @for $i from 1 through 24 {
          @each $device in phone ipad narrowPc pc widePc largePc {
            &.#{$device}-span-#{$i} {
              width: ($i/24)*100%;
            }
            &.#{$device}-offset-#{$i} {
              width: ($i/24)*100%;
            }
          }
        }
      }
    }
  }
</style>
