<template>
  <div class="document-container" ref="document-body" id="document-body">
    <div class="document-body">
      <document-title :title="title"></document-title>
      <!-- <tag-bar-plane></tag-bar-plane> -->
      <div class="content-container">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import DocumentTitle from '@/components/Document/DocumentTitle'
// import TagBarPlane from '@/components/TagBar/TagBarPlane'

export default {
  name: 'DocumentBody',
  props: {
    title: {
      type: String
    }
  },
  components: {
    'document-title': DocumentTitle
    // 'tag-bar-plane': TagBarPlane
  }
}
</script>

<style scoped>
.document-container {
  overflow-x: hidden;
  padding: 100px 5px 200px;
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
