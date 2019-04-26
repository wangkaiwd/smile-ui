<template>
  <v-icon :icon="icon" @click="$emit('click')"></v-icon>
</template>

<script>
  import VIcon from 'components/smileIcon';

  export default {
    name: 'SmileIcon',
    props: {
      icon: { type: String, required: true }
    },
    components: { VIcon }
  };
</script>

<style lang="scss" scoped>

</style>
