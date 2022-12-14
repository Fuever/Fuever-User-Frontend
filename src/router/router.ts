import { useLoginStateStore } from '../stores/counter'
import SignUpView from '@/views/SignUpView.vue'
import { ElMessage } from 'element-plus'
import { createRouter, createWebHistory, useRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocalDevView from '../views/LocalDevView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound from '@/views/NotFoundView.vue'

const whiteList: Array<string> = [
  'home',
  'dev',
  'about',
  'login',
  'signup',
  'news',
  'newsDetail',
  'forum',
  'notFound',
  'gallery',
  'galleryDetail',
  'video',
  'anniversary',
  'post',
  'user',
  'working',
  // 'profile',
  // 'edit'
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/dev',
      name: 'dev',
      component: LocalDevView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/forum',
      name: 'forum',
      component: () => import('../views/ForumView.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../views/PostDetailedView.vue')
    },
    {
      path: '/post/create',
      name: 'createPost',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/news/detail/:id',
      name: 'newsDetail',
      component: () => import('../views/NewsDetailView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/gallery/detail/:id',
      name: 'galleryDetail',
      component: () => import('../views/GalleryDetailView.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/VideoView.vue')
    },
    {
      path: '/anniversary',
      name: 'anniversary',
      component: () => import('../views/ActivityView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/user/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/user/edit',
      name: 'edit',
      component:()=>import('../views/UserEditView.vue')
    },
    {
      path: '/class',
      name: 'class',
      component:()=>import('../views/ClassSearchView.vue')
    },
    {
      path: '/class/:name',
      name: 'classDetail',
      component:()=>import('../views/ClassDetailView.vue')
    },
    {
      path: '/working',
      name: 'working',
      component: () => import('../views/GuideOutView.vue')
    },
    {
      path: '/user/profile/:id',
      name: 'profile',
      component: () => import('../views/UserProfileView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => NotFound
    }
  ]
})
router.beforeEach((to, from, next) => {
  const loginStateStore = useLoginStateStore()
  //https://stackoverflow.com/questions/70710965

  if (
    whiteList.includes(to.name?.toString() as string) ||
    loginStateStore.login 
    
  ) {
    console.log('beforeEach to path ===>', to.path)
    next()
  } else {
    console.log(loginStateStore.currentUser);
    ElMessage.info('????????????')
  }
})
// if (!loginStateStore.login || !whiteList.includes(to.path)) {
//     // ?????????????????????????????????????????????????????????
//     // TODO ???????????????????????????????????????
//     ElMessage.info('????????????')

// } else {
//     next({ path: '/login' })
// }

export default router
