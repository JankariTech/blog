import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/HomeView")
  },
  {
    name: "Filter",
    path: "/filter/:filterBy/:filterValue?",
    component: () => import("@/views/HomeView")
  },
  {
    name: "Sort",
    path: "/sort/:sortBy",
    component: () => import("@/views/HomeView")
  },
  {
    name: "Blog",
    path: "/blog/:name",
    component: () => import("@/views/PostView")
  },
  {
    name: "Series",
    path: "/blog/:series/:name",
    component: () => import("@/views/PostView")
  },
  {
    name: "404",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/404View")
  }
]

const router = createRouter({
  // https://router.vuejs.org/guide/essentials/history-mode.html
  history: createWebHistory(),
  routes // short for `routes: routes`
})

export default router
