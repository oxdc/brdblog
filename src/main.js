import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/Themes/base.css'
import '@/assets/Themes/default.css'

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

import hljs from 'highlight.js'
import 'highlight.js/styles/vs.css'
import 'katex/dist/katex.min.css'
import katex from 'katex'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

window.katex = katex
window.hljs = hljs

Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
