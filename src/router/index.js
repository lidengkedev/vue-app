import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: Index,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'input',
        name: 'input',
        component: () => import('../views/Input.vue'),
        meta: { title: 'Input' }
      },
      {
        path: 'select',
        name: 'select',
        component: () => import('../views/Select.vue'),
        meta: { title: 'Select' }
      },
      {
        path: 'floor',
        name: 'floor',
        component: () => import('../views/Floor.vue'),
        meta: { title: '楼层导航' }
      },
      {
        path: 'backtop',
        name: 'backtop',
        component: () => import('../views/Backtop.vue'),
        meta: { title: '返回顶部' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '关于'
        }
      }
    ]
  },
  {
    path: '/example',
    name: 'example',
    component: () => import(/* webpackChunkName: "example" */ '../example/index.vue')
  }, {
    path: '/snipaste',
    name: 'snipaste',
    component: () => import(/* webpackChunkName: "example" */ '../example/snipaste.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
