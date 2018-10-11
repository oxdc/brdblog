// Load basic library - Vue
import Vue from 'vue'

// Load App
import App from './App.vue'
import router from './router'
import store from './store'

// Reset CSS
import 'normalize.css/normalize.css'

// Load themes
import '@/assets/Themes/base.css'
import '@/assets/Themes/default.css'

// Load Highlight.js
import hljs from 'highlight.js'
import 'highlight.js/styles/vs.css'

// Load iView
import iView from 'iview'
import locale from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css'

// Load Katex
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Load Quill editor
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// Load Vue Awesome Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// Config Katex and Highlight
window.katex = katex
window.hljs = hljs

// Config Vue modules
Vue.use(VueQuillEditor)
Vue.use(VueAwesomeSwiper)
Vue.use(iView, { locale })

// Config Vue App
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
