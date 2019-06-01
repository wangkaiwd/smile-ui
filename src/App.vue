<template>
  <div class="app">
    <div class="component-wrapper">
      <smile-collapse :selected.sync="select" single>
        <smile-collapse-item title="标题1" name="1">
          <ul>
            <li>内容1</li>
            <li>内容2</li>
            <li>内容3</li>
            <li>内容4</li>
            <li>内容5</li>
            <li>内容6</li>
            <li>内容7</li>
            <li>内容8</li>
            <li>内容9</li>
            <li>内容10</li>
          </ul>
        </smile-collapse-item>
        <smile-collapse-item title="标题2" name="2">
          <ul>
            <li>内容1</li>
            <li>内容2</li>
            <li>内容3</li>
            <li>内容4</li>
            <li>内容5</li>
            <li>内容6</li>
            <li>内容7</li>
            <li>内容8</li>
            <li>内容9</li>
            <li>内容10</li>
          </ul>
        </smile-collapse-item>
        <smile-collapse-item disabled title="标题3" name="3">
          <ul>
            <li>内容1</li>
            <li>内容2</li>
            <li>内容3</li>
            <li>内容4</li>
            <li>内容5</li>
            <li>内容6</li>
            <li>内容7</li>
            <li>内容8</li>
            <li>内容9</li>
            <li>内容10</li>
          </ul>
        </smile-collapse-item>
      </smile-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        select: ['1']
      };
    },
    mounted () {
    },
    methods: {}
  };
</script>
<style lang="scss" scoped>
  .app {
    .component-wrapper {
      margin: 20px;
    }
  }
</style>
