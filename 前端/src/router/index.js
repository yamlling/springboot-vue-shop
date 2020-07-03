import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    meta: { title: '首页' },
    component: () => import('@/views/index'),
  },
  {
    path: '/',
    meta: { title: '首页' },
    component: () => import('@/views/index'),
  },
  {
    path: '/car',
    meta: { title: '购物车' },
    component: () => import('@/views/car'),
  },
  {
    path: '/add',
    meta: { title: '发布' },
    component: () => import('@/views/add'),
  },
  {
    path: '/my',
    meta: { title: '我的' },
    component: () => import('@/views/my'),
  },
  {
    path: '/mygoods',
    meta: { title: '我的物品' },
    component: () => import('@/views/mygoods'),
  },
  {
    path: '/goods',
    meta: { title: '商品详情' },
    component: () => import('@/views/goods'),
  },
  {
    path: '/setting',
    meta: { title: '设置' },
    component: () => import('@/views/setting'),
  },
  {
    path: '/order',
    meta: { title: '订单' },
    component: () => import('@/views/order'),
  },
  {
    path: '/userConfig',
    meta: { title: '用户管理' },
    component: () => import('@/views/userConfig'),
  },
  {
    path: '/cate',
    meta: { title: '分类管理' },
    component: () => import('@/views/cate'),
  },
  {
    path: '/login',
    meta: { title: '登陆' },
    component: () => import('@/views/login'),
  },
  {
    path: '/register',
    meta: { title: '注册' },
    component: () => import('@/views/register'),
  },
]

const router = new VueRouter({
  routes
})

export default router
