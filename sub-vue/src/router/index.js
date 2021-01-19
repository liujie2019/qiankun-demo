import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  // 设置路由 base，值和它的 主应用中配置的activeRule 是一样的
  base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue' : process.env.BASE_URL,
  routes
})

export default router
