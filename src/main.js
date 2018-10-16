// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'  // 引入路由模块
import axios from 'axios'
import App from './App'
import {routes} from './routes' // 引入路由JS

Vue.use(VueRouter)  // Vue用一下

axios.defaults.headers.common['SecurityCode'] = 'WXys1234567'
axios.defaults.headers.post['Content-type'] = 'application/json'
Vue.prototype.$axios = axios

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path == '/login' || to.path == '/reg'){
//     next()
//   }else{
//     alert("还没有登录，请先登录");
//     next('/login')
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
