<template>
  <div>
    <div
     v-if="!serverOnline"
     class="error-msg-container">
      <Icon type="md-warning" size="25" color="#ed4014" />
      <label class="error-msg">
        We encountered some problems while connecting to comment server.
      </label>
    </div>
    <comment-list
     :docId="docId"
     @reply="onReply">
    </comment-list>
    <comment-form
     :docId="docId" 
     :reply.sync="reply" 
     :replyId="replyId"
     v-if="serverOnline">
    </comment-form>
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
  },
  computed: {
    serverOnline: {
      get () {
        return this.$store.getters.serverStatus === 'online'
      }
    }
  }
}
</script>

<style scoped>
.error-msg-container {
  text-align: center;
  margin: 10px 0px;
  padding: 10px 0px;
  background-color: #ed40143d;
}

.error-msg {
  font-size: 14px;
  color: #ed4014;
  vertical-align: middle;
}
</style>
