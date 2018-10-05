// https://medium.com/@oleg.agapov/basic-single-page-application-using-vue-js-and-firebase-part-1-9e4c0c11a228

import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {
    path: '/',
    name: 'landing',
    component: 'Landing'
  },
  {
    path: '/login',
    name: 'login',
    component: 'Login'
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: 'ForgotPassword'
  },
  {
    path: '/home',
    name: 'home',
    component: 'Home'
  }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})