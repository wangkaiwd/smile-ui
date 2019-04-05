<template>
  <div class="smile-input">
    <input type="text" placeholder="Recipient's username">
  </div>
</template>

<script>
  export default {
    name: 'SmileInput'
  };
</script>

<style lang="scss" scoped>
  .smile-input {
    input {
      min-height: 32px;
      outline: none;
      padding-left: 10px;
      border-radius: $border-radius-md;
      border: 1px solid lighten($gray, 30%);
      color: $gray;
      &::placeholder {
        color: lighten($gray, 12%);
      }
      &:focus {box-shadow: 0 0 0 4px lighten($primary, 30%);}
    }
  }
</style>
