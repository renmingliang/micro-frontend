import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layout'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      }
    ]
  },
  {
    path: '/child',
    component: Layout,
    children: [
      {
        path: '*',
        name: 'child',
        component: () => import(/* webpackChunkName: "child" */ '../views/Child.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
