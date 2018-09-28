<template>
  <Layout>
    <Header class="master-header" id="master-header">
      <master-list-header></master-list-header>
    </Header>
    <Content class="master-content" id="master-content">
      <slot></slot>
    </Content>
  </Layout>
</template>

<script>
import MasterListHeader from '@/components/MasterList/MasterListHeader'

export default {
  name: 'MasterEmptyBase',
  components: {
    'master-list-header': MasterListHeader
  },
  methods: {
    initUI () {
      var masterHeader = document.getElementById('master-header')
      var masterContent = document.getElementById('master-content')
      if (masterHeader && masterContent) {
        masterContent.style.top = masterHeader.clientHeight + 'px'
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
  bottom: 0px;
  border-bottom: 1px solid #dcdee2;
}

.master-content-empty {
  background-color: rgb(240, 240, 240);
}
</style>
