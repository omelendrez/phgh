import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import Vuetify from 'vuetify'
import VueChartkick from 'vue-chartkick'
// import firebase from 'firebase'
import './registerServiceWorker'

Vue.use(Vuetify)
Vue.use(VueChartkick)

Vue.config.productionTip = false
Vue.prototype.$http = axios

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

/*
firebase.initializeApp({
  apiKey: "AIzaSyBUnhsAQR0501sD_qllcxjv0jvz8w9kBIU",
  authDomain: "phgh-c22c4.firebaseapp.com",
  databaseURL: "https://phgh-c22c4.firebaseio.com",
  projectId: "phgh-c22c4",
  storageBucket: "phgh-c22c4.appspot.com",
  messagingSenderId: "95453109205"
})

*/

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
