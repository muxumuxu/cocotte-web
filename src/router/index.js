import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landing/LandingPage'
import AboutPage from '@/components/pages/AboutPage'
import CategoryPage from '@/components/category/CategoryPage'
import FoodPage from '@/components/food/FoodPage'

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
    },
    {
      path: '/categories/:category_id/foods/:food_id',
      name: 'FoodPage',
      component: FoodPage
    }
  ]
})
