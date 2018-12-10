<template>
  <div class="title-container">
    <input class="title" placeholder="Untitled" :value="title" disabled>
  </div>
</template>

<script>
export default {
  name: 'DocumentTitle',
  props: {
    title: {
      type: String,
      default: 'Untitled'
    }
  }
}
</script>

<style scoped>
.title-container {
  margin: 40px 5% 20px 5%;
}

.title {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  width: 100%;
  margin: 0px;
  padding: 30px 10px 10px 10px;

  background: transparent;

  outline: none;
  border: none;
}
</style>
