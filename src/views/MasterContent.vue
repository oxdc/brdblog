<template>
  <master-base :title="$route.params.title">
    <quill-editor :disabled="true" :options="editorOption" @ready="onReady">
    </quill-editor>
  </master-base>
</template>

<script>
import MasterBase from '@/views/MasterBase'

export default {
  name: 'MasterContent',
  components: {
    'master-base': MasterBase
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
      quill.setContents(JSON.parse(this.$store.getters.contents(this.$route.params.id)))
    }
  }
}
</script>
