// https://medium.com/@oleg.agapov/basic-single-page-application-using-vue-js-and-firebase-part-1-9e4c0c11a228
// http://rws-fulfillmentengine-portal.azurewebsites.net/ActivityReport
import Vue from 'vue'
import Router from 'vue-router'

import routesList from './routes'

const routes = routesList.map(route => {
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
