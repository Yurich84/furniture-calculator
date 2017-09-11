// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
var VueCookie = require('vue-cookie')
Vue.use(VueCookie)
import App from './App'
import router from './router'

window.$ = window.jQuery = require('jquery')
global.Popper = require('popper.js/dist/umd/popper.min.js');
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import '../static/css/custom.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
