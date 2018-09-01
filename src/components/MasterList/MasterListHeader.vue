<template>
  <div>
    <span class="blog-title"> {{ blogTitle }} </span>
    <Menu mode="horizontal" theme="dark" active-name="home" class="menu">
      <MenuItem name="home" to="/" v-show="expanded">
        <Icon type="md-home" />
        Home
      </MenuItem>
      <MenuItem name="about" to="/about" v-show="expanded">
        <Icon type="md-information-circle" />
        About
      </MenuItem>
      <MenuItem name="inspiring" to="/inspiring" v-show="expanded">
        <Icon type="md-flame" />
        Inspiring
      </MenuItem>
      <MenuItem name="tags" to="/tags" v-show="expanded">
        <Icon type="md-pricetag" />
        Tags
      </MenuItem>
      <MenuItem name="archive" to="/archive" v-show="expanded">
        <Icon type="md-archive" />
        Archive
      </MenuItem>
      <MenuItem name="rss" to="/rss" v-show="expanded">
        <Icon type="logo-rss" />
        RSS
      </MenuItem>
      <MenuItem name="fork" v-show="expanded">
        <Icon type="logo-github" />
        <a style="color: rgba(255,255,255,.7);" href="//github.com/oxdc/brdblog">Fork Me</a>
      </MenuItem>
      <Submenu name="submenu" v-show="!expanded">
        <template slot="title">
          <Icon type="md-menu" />
        </template>
        <MenuItem name="home" to="/">
          <Icon type="md-home" />
          Home
        </MenuItem>
        <MenuItem name="about" to="/about">
          <Icon type="md-information-circle" />
          About
        </MenuItem>
        <MenuItem name="inspiring" to="/inspiring">
          <Icon type="md-flame" />
          Inspiring
        </MenuItem>
        <MenuItem name="tags" to="/tags">
          <Icon type="md-pricetag" />
          Tags
        </MenuItem>
        <MenuItem name="archive" to="/archive">
          <Icon type="md-archive" />
          Archive
        </MenuItem>
        <MenuItem name="rss" to="/rss">
          <Icon type="logo-rss" />
          RSS
        </MenuItem>
        <MenuItem name="fork">
          <Icon type="logo-github" />
          <a style="color: #515a6e;" href="//github.com/oxdc/brdblog">Fork Me</a>
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import { getSize } from '@/uitls/miscellaneous'

export default {
  name: 'MasterListHeader',
  data () {
    return {
      expanded: true
    }
  },
  methods: {
    initUI () {
      if (getSize().width > 1000) {
        this.expanded = true
      } else {
        this.expanded = false
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
    blogTitle: {
      get () {
        return this.$store.getters.blogTitle
      }
    }
  }
}
</script>

<style scoped>
.blog-title {
  color: #f8f8f9;
  font-size: 2em;
  text-transform: capitalize;
}

.menu {
  float: right;
  width: auto;
}
</style>
