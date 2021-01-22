import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layout'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:OID(\\d+)',
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
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '*',
        name: 'sub',
        component: () => import(/* webpackChunkName: "child" */ '../views/Child.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
