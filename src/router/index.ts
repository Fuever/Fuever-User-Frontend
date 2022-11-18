import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LocalDevView from "../views/LocalDevView.vue";
import LoginView from "../views/LoginView.vue";
import ForumView from "../views/ForumView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/dev",
      name: "dev",
      component: LocalDevView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/forum",
      name: "forum",
      component: ForumView,
    },
  ],
});

export default router;
