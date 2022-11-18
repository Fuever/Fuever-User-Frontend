<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LocalDevView from "../views/LocalDevView.vue";
import LoginView from "../views/LoginView.vue";
import ForumView from "../views/ForumView.vue";
=======
import SignUpView from '@/views/SignUpView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocalDevView from '../views/LocalDevView.vue'
import LoginView from '../views/LoginView.vue'
>>>>>>> ee40b338914c8f3a7b8cdca5a0cc5279b77368d2
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
<<<<<<< HEAD
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
=======
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
>>>>>>> ee40b338914c8f3a7b8cdca5a0cc5279b77368d2
    },
    {
      path: "/dev",
      name: "dev",
      component: LocalDevView,
    },
    {
<<<<<<< HEAD
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
=======
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
     component:SignUpView
    }
  ]
})
>>>>>>> ee40b338914c8f3a7b8cdca5a0cc5279b77368d2

export default router;
