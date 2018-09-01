import Vue from 'vue'
import Router from 'vue-router'
import MasterContent from '@/views/MasterContent'
import MasterList from '@/views/MasterList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'master-list',
      component: MasterList
    },
    {
      path: '/story',
      name: 'master-content',
      component: MasterContent
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
