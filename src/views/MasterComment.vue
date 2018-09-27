<template>
  <div>
    <comment-list :docId="docId" @reply="onReply"></comment-list>
    <comment-form :docId="docId" :reply.sync="reply" :replyId="replyId"></comment-form>
  </div>
</template>

<script>
import CommentList from '@/components/Comments/CommentList'
import CommentForm from '@/components/Comments/CommentForm'

export default {
  name: 'MasterComment',
  props: {
    docId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      reply: '',
      replyId: ''
    }
  },
  components: {
    'comment-form': CommentForm,
    'comment-list': CommentList
  },
  methods: {
    onReply (name, id) {
      this.reply = name
      this.replyId = id
    }
  }
}
</script>
