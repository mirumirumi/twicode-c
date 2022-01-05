import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import New from '../pages/New.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    redirect: "/new",
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
