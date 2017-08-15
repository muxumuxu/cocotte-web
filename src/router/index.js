import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AboutPage from '@/components/AboutPage'
import CategoryPage from '@/components/CategoryPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/categories/:id',
      name: 'CategoryPage',
      component: CategoryPage
    }
  ]
})
