import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Vuetify from 'vuetify'
import './registerServiceWorker'

Vue.use(Vuetify)

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
