<template>
  <div class="document-container" ref="document-body" id="document-body">
    <div class="document-body">
      <document-title :title="title"></document-title>
      <div class="content-container">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import DocumentTitle from '@/components/Document/DocumentTitle'

export default {
  name: 'DocumentBody',
  props: {
    title: {
      type: String
    }
  },
  components: {
    'document-title': DocumentTitle
  }
}
</script>

<style scoped>
.document-container {
  overflow-x: hidden;
  padding: 5% 5px 100px;
  height: 100%;
}

.document-body {
  max-width: 900px;
  min-height: 200px;
  margin: 10px auto;
  padding: 15px 0px 50px;
  border-radius: 10px;
}

.content-container {
  margin: 25px 0px;
  outline: none;
}
</style>
