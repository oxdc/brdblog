<template>
  <master-base :title="title">
    <tag-bar-plane :tags="tags"></tag-bar-plane>
    <quill-editor :disabled="true" :options="editorOption" @ready="onReady" class="article">
    </quill-editor>
    <Divider style="margin-top: 60px;" />
    <master-comment :docId="id"></master-comment>
    <loader :loading="loading"></loader>
  </master-base>
</template>

<script>
import getContents from '@/uitls/getContents'
import TagBarPlane from '@/components/TagBar/TagBarPlane'
import MasterBase from '@/views/Base/MasterBase'
import MasterComment from '@/views/Master/MasterComment'
import Loader from '@/components/Comments/Loader'

export default {
  name: 'MasterContent',
  components: {
    'master-base': MasterBase,
    'master-comment': MasterComment,
    'loader': Loader,
    'tag-bar-plane': TagBarPlane
  },
  data () {
    return {
      quill: null,
      loading: true,
      tags: []
    }
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
    },
    title: {
      get () {
        if (this.$route.params.title) {
          return this.$route.params.title
        } else if (this.$route.query.title) {
          return this.$route.query.title
        } else {
          return '$system/null'
        }
      }
    },
    id: {
      get () {
        if (this.$route.params.id) {
          return this.$route.params.id
        } else if (this.$route.query.id) {
          return this.$route.query.id
        } else {
          return '$system/null'
        }
      }
    }
  },
  watch: {
    title () {
      this.loadContent()
    },
    id () {
      this.loadContent()
    }
  },
  methods: {
    onReady (quill) {
      this.quill = quill
      this.loadContent()
    },
    loadContent() {
      this.loading = true
      var triedTimes = 0
      var loadingContent = setInterval(() => {
        var path = this.$store.getters.path(this.id)
        if (triedTimes >= 500) {
          clearInterval(loadingContent)
          this.$router.push('/404')
        }
        if (path) {
          clearInterval(loadingContent)
          getContents(path).then((data) => {
            var contents = JSON.parse(data.content)
            if (this.quill) {
              this.quill.setContents(contents.ops)
              this.loading = false
            } else {
              this.$router.push('/404')
            }
            if (data.tags) this.tags = data.tags
          })
        } else {
          triedTimes++
        }
      }, 50)
    }
  },
  mounted () {
    if (!this.id || !this.title) {
      this.$router.push('/404')
    }
  }
}
</script>
