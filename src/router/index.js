import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  }],
  mode: 'history'
})

export default router
