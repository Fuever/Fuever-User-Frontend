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
  'galleryDetail'
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
      component: ()=> import('../views/ForumView.vue')
    },
    //需要更改↓
    {
        path: '/forum/post',
        name: 'post',
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
      component: () => import('../views/GuideOutView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/GuideOutView.vue')
    },
    {
      path: '/activity/detail',
      name: 'activityDetail',
      component: () => import('../views/GuideOutView.vue')
    },
    
    {
      path: '/forum/detail',
      name: 'forumDetail',
      component: () => import('../views/GuideOutView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
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

  let whiteDynamicListJudge: boolean = false

  if (whiteList.includes(to.name?.toString() as string) || whiteDynamicListJudge) {
    console.log(to.path)
    next()
  } else {
    next(false)
    ElMessage.info('请先登录')
  }
})
// if (!loginStateStore.login || !whiteList.includes(to.path)) {
//     // 如果没有登录，转入登录界面，并给出信息
//     // TODO 下面还未指定跳转的登录界面
//     ElMessage.info('请先登录')

// } else {
//     next({ path: '/login' })
// }

export default router
