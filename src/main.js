// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'

axios.defaults.headers.common['SecurityCode'] = 'WXys1234567'
axios.defaults.headers.post['Content-type'] = 'application/json'

// 绑定一个全局$axios的变量
Vue.prototype.$axios = axios



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
