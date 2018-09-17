<template>
  <Layout>
    <Header class="master-header" id="master-header">
      <master-list-header></master-list-header>
    </Header>
    <Content class="master-content" id="master-content">
      <document-body :title="title">
        <slot slot="content"></slot>
      </document-body>
    </Content>
    <Footer class="master-footer noselect" id="master-footer" style="padding: 5px;">
      {{ copyYear }} &copy; <span> {{ username }} </span> <br/>
      Powered by Project AIAS,
      <a href="https://github.com/oxdc/brdblog">Brdblog</a> and
      <a href="https://github.com/oxdc/brdnote">Brdnote</a>.
      <Icon type="md-git-branch" :size="18"/> <a href="https://github.com/oxdc/brdblog">Fork me on <Icon type="logo-github" :size="18"/> Github</a>
    </Footer>
  </Layout>
</template>

<script>
import MasterListHeader from '@/components/MasterList/MasterListHeader'
import DocumentBody from '@/components/Document/DocumentBody'

export default {
  name: 'MasterContent',
  props: {
    title: {
      type: String
    }
  },
  components: {
    'master-list-header': MasterListHeader,
    'document-body': DocumentBody
  },
  methods: {
    initUI () {
      var masterHeader = document.getElementById('master-header')
      var masterFooter = document.getElementById('master-footer')
      var masterContent = document.getElementById('master-content')
      if (masterHeader && masterFooter && masterContent) {
        masterContent.style.top = masterHeader.clientHeight + 'px'
        masterContent.style.bottom = masterFooter.clientHeight + 'px'
      }
    }
  },
  mounted () {
    this.initUI()
    window.addEventListener('resize', () => {
      this.initUI()
    })
  },
  computed: {
    username: {
      get () {
        return this.$store.getters.username
      }
    },
    copyYear: {
      get () {
        return this.$store.getters.copyYear
      }
    }
  }
}
</script>

<style scoped>
.master-header {
  top: 0px;
  left: 0px;
  right: 0px;
}

.master-content {
  position: fixed;
  left: 0px;
  right: 0px;
  border-bottom: 1px solid #dcdee2;
}

.master-footer {
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
