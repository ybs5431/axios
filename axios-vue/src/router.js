import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/get',
      name: 'get',
      component: () => import(/* webpackChunkName: "about" */ './views/get.vue')
    },
    {
      path: '/concurrent',
      name: 'concurrent',
      component: () => import(/* webpackChunkName: "about" */ './views/concurrent.vue')
    },
    
    {
      path: '/instance',
      name: 'instance',
      component: () => import(/* webpackChunkName: "about" */ './views/instance.vue')
    }
  ]
})
