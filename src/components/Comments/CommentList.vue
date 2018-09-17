<template>
  <div class="comment-list-container noselect" v-if="!disabled">
    <div class="comment-list-title">
      <Icon type="md-chatbubbles" />
      Comments
    </div>
    <comment-item
     v-if="!disabled"
     v-for="item in comments"
     :key="item.id"
     :id="item.id"
     :name="item.name"
     :timestamp="new Date(parseInt(item.timestamp))"
     :comments="item.comments"
     :like="item.like"
     :dislike="item.dislike"
     :fingerPrint="item.fingerPrint"
     :childList="item.childList">
    </comment-item>
    <div v-if="comments.length == 0" class="comment-empty-label">
      No comments here.
    </div>
  </div>
</template>

<script>
import CommentItem from '@/components/Comments/CommentItem'

export default {
  name: 'CommentList',
  props: {
    docId: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'comment-item': CommentItem
  },
  data () {
    return {
      comments: []
    }
  },
  mounted () {
    if (window.socket) {
      window.socket.emit('list', {
        id: this.docId
      })
      window.socket.on('list-response', (data) => {
        var comments = JSON.parse(data)
        this.comments = comments
      })
    }
  }
}
</script>

<style scoped>
.comment-list-container {
  margin: 40px 10% 10px;
}

.comment-list-title {
  font-size: 25px;
  font-weight: bolder;
  margin: 30px 0px;
}

.comment-empty-label {
  font-size: 14px;
  font-style: italic;
  text-align: center;
}
</style>
