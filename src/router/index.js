import Vue from 'vue'
import Router from 'vue-router'
import MasterContent from '@/views/MasterContent'
import MasterList from '@/views/MasterList'
import MasterFrontPage from '@/views/MasterFrontPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'master-list',
      component: MasterList
    },
    {
      path: '/home',
      name: 'master-front-page',
      component: MasterFrontPage
    },
    {
      path: '/story',
      name: 'master-content',
      component: MasterContent
    },
    {
      path: '/about',
      redirect: {
        name: 'master-content',
        params: {
          id: 'about',
          title: "About"
        }
      }
    },
    {
      path: '/inspiring',
      redirect: {
        name: 'master-content',
        params: {
          id: 'inspiring',
          title: "Inspiring"
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
