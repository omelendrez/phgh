// https://medium.com/@oleg.agapov/basic-single-page-application-using-vue-js-and-firebase-part-1-9e4c0c11a228
// http://rws-fulfillmentengine-portal.azurewebsites.net/ActivityReport
import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {
    path: '/',
    name: 'landing',
    component: 'Landing'
  },
  {
    path: '/signin',
    name: 'signin',
    component: 'Signin'
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: 'ForgotPassword'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: 'Dashboard'
  },
  {
    path: '/users',
    name: 'users',
    component: 'Users'
  },
  {
    path: '/roles',
    name: 'roles',
    component: 'Roles'
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
