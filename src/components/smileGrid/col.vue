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
  const devices = ['phone', 'ipad', 'narrowPc', 'pc', 'widePc', 'largePc'];
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
      narrowPc: responseType,
      pc: responseType,
      widePc: responseType,
      largePc: responseType
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
        devices.forEach(device => classes.push(...this.createResponseClass(device)));
        return classes;
      }
    },
    methods: {
      createResponseClass (device) {
        let classes = [];
        if (this[device]) {
          const { span, offset } = this[device];
          span && classes.push(`${device}-span-${span}`);
          offset && classes.push(`${device}-offset-${offset}`);
        }
        return classes;
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
    /*width <= 576生效*/
    @media screen and (max-width: 576px) {
      @for $i from 1 through 24 {
        &.phone-span-#{$i} {width: ($i/24)*100%;}
        &.phone-offset-#{$i} {margin-left: ($i/24)*100%;}
      }
    }
    /*width >= 576生效*/
    @media screen and (min-width: 576px) {
      @for $i from 1 through 24 {
        &.ipad-span-#{$i} {width: ($i/24)*100%;}
        &.ipad-offset-#{$i} {margin-left: ($i/24)*100%;}
      }
    }
    @media screen and (min-width: 768px) {
      @for $i from 1 through 24 {
        &.narrowPc-span-#{$i} {width: ($i/24)*100%;}
        &.narrowPc-offset-#{$i} {margin-left: ($i/24)*100%;}
      }
    }
    @media screen and (min-width: 992px) {
      @for $i from 1 through 24 {
        &.pc-span-#{$i} {width: ($i/24)*100%;}
        &.pc-offset-#{$i} {margin-left: ($i/24)*100%;}
      }
    }
    @media screen and (min-width: 1200px) {
      @for $i from 1 through 24 {
        &.widePc-span-#{$i} {width: ($i/24)*100%;}
        &.widePc-offset-#{$i} {margin-left: ($i/24)*100%;}
      }
    }
    @media screen and (min-width: 1600px) {
      @for $i from 1 through 24 {
        &.largePc-span-#{$i} {width: ($i/24)*100%;}
        &.largePc-offset-#{$i} {margin-left: ($i/24)*100%;}
      }
    }
  }
</style>
