<template>
  <div>
    <comment-list></comment-list>
    <comment-form></comment-form>
  </div>
</template>

<script>
import CommentList from '@/components/Comments/CommentList'
import CommentForm from '@/components/Comments/CommentForm'

export default {
  name: 'MasterComment',
  components: {
    'comment-form': CommentForm,
    'comment-list': CommentList
  }
}
</script>
