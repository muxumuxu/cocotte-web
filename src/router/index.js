import Vue from 'vue'
import Router from 'vue-router'
import ga from 'vue-ga'
import LandingPage from '@/components/landing/LandingPage'
import AboutPage from '@/components/pages/AboutPage'
import CategoryPage from '@/components/category/CategoryPage'
import FoodPage from '@/components/food/FoodPage'
import MobilePage from '@/components/mobile/MobilePage'
import ErrorPage from '@/components/pages/ErrorPage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
    },
    {
      path: '/categories/:category_id/foods/:food_id',
      name: 'FoodPage',
      component: FoodPage
    },
    {
      path: '/404',
      name: 'ErrorPage',
      component: ErrorPage
    },
    {
      path: '/mobile',
      name: 'MobilePage',
      component: MobilePage
    },
    {
      path: '*',
      redirect: '404'
    }
  ]
})

ga(router, 'UA-83226935-14')

router.beforeEach((to, from, next) => {
  const userAgent = navigator.userAgent
  const patterns = ['iPhone', 'iPod', 'Android', 'Windows Phone']
  const matches = patterns.filter(p => {
    const regex = new RegExp(p, 'i')
    return userAgent.match(regex)
  })
  if (matches.length > 0 && to.fullPath !== '/mobile') {
    return next('/mobile')
  }
  next()
})

export default router
