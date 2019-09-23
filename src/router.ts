import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from "@/views/Home.vue"
import Index from "@/views/Home/index.vue"
import Special from "@/views/special/index.vue"
import Shoping from "@/views/shoping/index.vue"
import Classification from "@/views/classification/index.vue"
import My from "@/views/my/index.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      // component: Login,
      component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      // component: Home,
      component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
      redirect: "/home/index",
      children: [
        //首页
        {
          path: '/home/index',
          name: 'index',
          // component: Index
          component: () => import(/* webpackChunkName: "about" */ "@/views/Home/index.vue"),

        },
        //专题
        {
          path: '/home/special',
          name: 'special',
          // component: Special
          component: () => import(/* webpackChunkName: "about" */ '@/views/special/index.vue'),

        },
        //购物车
        {
          path: '/home/shoping',
          name: 'shoping',
          // component: Shoping
          component: () => import(/* webpackChunkName: "about" */ '@/views/shoping/index.vue'),
        },
        //分类
        {
          path: '/home/classification',
          name: 'classification',
          // component: Classification
          component: () => import(/* webpackChunkName: "about" */ '@/views/classification/index.vue'),
        },
        //我的
        {
          path: '/home/my',
          name: 'my',
          // component: My,
          component: () => import(/* webpackChunkName: "about" */ '@/views/my/index.vue'),
        }
      ]
    }
  ]
})
