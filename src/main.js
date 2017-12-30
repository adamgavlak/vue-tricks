// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'flexboxgrid'

import Vue from 'vue'
import Notification from 'vue-notification'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Notification)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})