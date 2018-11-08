<template>
  <div class="tag-bar-plane">
    <label v-if="!tags.length" class="no-tag-flag">No Tag</label>
    <div
     v-if="tags"
     v-for="tag in tags"
     :key="tag"
     :id="tag">
      <Tag>{{tag}}</Tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagBarPlane',
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.tag-bar-plane {
  margin: 0px 0px 30px;
  padding: 10px 60px;
  background: #f7f7f7;
}

.no-tag-flag {
  font-style: italic;
  color: gray;
}
</style>
