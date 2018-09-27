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
     :email="item.email"
     :website="item.website"
     :childList="item.childList"
     @update-list="onUpdate"
     @reply="onReply">
    </comment-item>
    <div v-if="comments.length == 0" class="comment-empty-label">
      No comments here.
    </div>
  </div>
</template>

<script>
import { atou } from '@/uitls/miscellaneous'
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
    this.onUpdate()
  },
  methods: {
    onUpdate () {
      if (window.socket) {
        window.socket.emit('list', {
          id: this.docId
        })
        window.socket.on('list-response', (data) => {
          var comments = JSON.parse(data)
          this.comments = []
          var ref = {}
          for (var comment of comments) {
            ref[comment.id.toString()] = comment
            comment.childList = []
          }
          for (var comment of comments) {
            comment.comments = atou(comment.comments)
            if (comment.parent && comment.parent != 'None' && ref[comment.parent]) {
              ref[comment.parent].childList.push(comment)
            } else {
              this.comments.push(comment)
            }
          }
       })
      }
    },
    onReply (name, id) {
      this.$emit('reply', name, id)
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
