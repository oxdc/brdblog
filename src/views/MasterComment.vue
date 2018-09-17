<template>
  <div>
    <comment-list :docId="docId"></comment-list>
    <comment-form :docId="docId"></comment-form>
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
  components: {
    'comment-form': CommentForm,
    'comment-list': CommentList
  }
}
</script>
