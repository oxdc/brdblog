import Vue from 'vue'
import Router from 'vue-router'
import MasterContent from '@/views/Master/MasterContent'
import MasterList from '@/views/Master/MasterList'
import MasterFrontPage from '@/views/Master/MasterFrontPage'
import MasterRSS from '@/views/Master/MasterRSS'
import Error404 from '@/views/ErrorPages/Error404'
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
      path: '/rss',
      name: 'master-rss',
      component: MasterRSS
    },
    {
      path: '/404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
