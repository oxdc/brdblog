<template>
  <div class="noselect">
    <span class="blog-title"> {{ blogTitle }} </span>
    <i-menu mode="horizontal" theme="dark" active-name="home" class="menu">
      <menu-item name="home" to="/" v-show="expanded">
        <Icon type="md-home" :size="20"/>
        Home
      </menu-item>
      <menu-item name="about" @click.native="toAbout" v-show="expanded">
        <Icon type="md-information-circle" :size="20"/>
        About
      </menu-item>
      <menu-item name="inspiring" @click.native="toInspiring" v-show="expanded">
        <Icon type="md-flame" :size="20"/>
        Inspiring
      </menu-item>
      <menu-item name="tags" to="/tags" v-show="expanded">
        <Icon type="md-pricetag" :size="20"/>
        Tags
      </menu-item>
      <menu-item name="archive" to="/archive" v-show="expanded">
        <Icon type="md-archive" :size="20"/>
        Archive
      </menu-item>
      <menu-item name="rss" to="/rss" v-show="expanded">
        <Icon type="logo-rss" :size="20"/>
        RSS
      </menu-item>
      <menu-item name="fork" v-show="expanded">
        <Icon type="logo-github" :size="20"/>
        <a style="color: rgba(255,255,255,.7);" href="//github.com/oxdc/brdblog">Fork Me</a>
      </menu-item>
      <Submenu name="submenu" v-show="!expanded">
        <template slot="title">
          <Icon type="md-menu" :size="20"/>
        </template>
        <menu-item name="home" to="/">
          <Icon type="md-home" />
          Home
        </menu-item>
        <menu-item name="about" @click.native="toAbout">
          <Icon type="md-information-circle" />
          About
        </menu-item>
        <menu-item name="inspiring" @click.native="toInspiring">
          <Icon type="md-flame" />
          Inspiring
        </menu-item>
        <menu-item name="tags" to="/tags">
          <Icon type="md-pricetag" />
          Tags
        </menu-item>
        <menu-item name="archive" to="/archive">
          <Icon type="md-archive" />
          Archive
        </menu-item>
        <menu-item name="rss" to="/rss">
          <Icon type="logo-rss" />
          RSS
        </menu-item>
        <menu-item name="fork">
          <Icon type="logo-github" />
          <a style="color: #515a6e;" href="//github.com/oxdc/brdblog">Fork Me</a>
        </menu-item>
      </Submenu>
    </i-menu>
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
    },
    toAbout () {
      this.$router.replace('/')
      this.$router.push({
        name: 'master-content',
        params: {
          id: 'about',
          title: 'About'
        }
      })
    },
    toInspiring () {
      this.$router.replace('/')
      this.$router.push({
        name: 'master-content',
        params: {
          id: 'inspiring',
          title: 'Inspiring'
        }
      })
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
