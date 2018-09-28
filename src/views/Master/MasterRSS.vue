<template>
  <pre class="feed-root">
    {{ xml }}
  </pre>
</template>

<script>
import generateRSS from '@/uitls/genRSS'

export default {
  name: 'MasterRSS',
  data () {
    return {
      xml: ''
    }
  },
  mounted() {
    this.xml = generateRSS()
  }
}
</script>

<style scoped>
.feed-root {
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
