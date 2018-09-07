<template>
  <master-base :title="$route.params.title">
    <quill-editor :disabled="true" :options="editorOption" @ready="onReady" class="article">
    </quill-editor>
    <Divider style="margin-top: 60px;" />
    <master-comment></master-comment>
  </master-base>
</template>

<script>
import getContents from '@/uitls/getContents'
import MasterBase from '@/views/MasterBase'
import MasterComment from '@/views/MasterComment'

export default {
  name: 'MasterContent',
  components: {
    'master-base': MasterBase,
    'master-comment': MasterComment
  },
  computed: {
    editorOption: {
      get () {
        return {
          theme: 'snow',
          scrollingContainer: '#document-body',
          modules: {
            formula: true,
            toolbar: false
          },
          placeholder: 'Oops ! It\'s empty ! What\'s wrong ?',
          readOnly: true
        }
      }
    }
  },
  methods: {
    onReady (quill) {
      var path = this.$store.getters.path(this.$route.params.id)
      if (path) {
        getContents(path).then((data) => {
          var contents = JSON.parse(data.content)
          quill.setContents(contents.ops)
        })
      }
    }
  }
}
</script>
