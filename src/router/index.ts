import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    redirect: "/new",
  },
  {
    path: '/new',
    name: 'New',
    component: () => import("../pages/BaseEditor.vue"),
    props: { new: true },
  },


  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import("../pages/BaseNote.vue"),
    props: { content: "privacy" },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import("../pages/BaseNote.vue"),
    props: { content: "terms" },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
