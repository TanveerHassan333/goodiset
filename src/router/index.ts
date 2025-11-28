import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import Home from "@/pages/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/pages/cart.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
