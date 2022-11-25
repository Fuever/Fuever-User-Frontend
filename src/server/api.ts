import { useLoginStateStore } from './../stores/counter'
import { useRouter } from 'vue-router'

import instance from './intercept'
import type {
  News,
  User,
  Anniversary,
  Post,
  Gallery,
  CaptchaRespose,
  Message,
  BlockResponse
} from './models'

// 新闻

// GET /api/pub/news 获取多条新闻
export async function getNews(offset: number, limit: number): Promise<News[] | null> {
  try {
    // const response = await instance.get(`/api/pub/news?offset=${offset}&limit=${limit}`)
    const response = await instance.get(`/api/pub/news?_page=1&_limit=12`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
// GET /api/pub/news/{id} 获取单条新闻
export async function getNewsDetail(id: number): Promise<News | null> {
  try {
    const response = await instance.get(`/api/pub/news/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

// 院庆活动
// GET /api/pub/anniversaries 获取多条活动
export async function getAnniversaries(
  offset: number,
  limit: number
): Promise<Anniversary[] | null> {
  try {
    // const response = await instance.get(`/api/pub/anniversaries?offset=${offset}&limit=${limit}`)
    const response = await instance.get(`/api/pub/anniversaries?_page=1&_limit=100`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
// GET /api/pub/anniversaries 获取单条活动
export async function getAnniversary(id: number): Promise<Anniversary | null> {
  try {
    const response = await instance.get(`/api/pub/anniversaries?id=${id}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

// 注册

// GET /api/pub/user/captcha 获取图形验证码
export async function getCaptcha(): Promise<CaptchaRespose | null> {
  try {
    const response = await instance.get(`/api/pub/user/captcha`)
    // console.log('getCaptcha response===>', response)
    return response.data.data
  } catch (error) {
    console.log(error)
    return null
  }
}
// POST /api/pub/user/verify 获取邮箱验证码
export async function postEmailCaptcha(verify_id: string, verify_code: string, mailbox: string) {
  const jsonObject = {
    verify_id: verify_id,
    verify_code: verify_code,
    mailbox: mailbox
  }
  // console.log('postEmailCaptcha jsonObject ===> ', jsonObject)
  await instance.post(`/api/pub/user/verify`, jsonObject)
  // 成功时then，失败时catch
}

// POST /api/pub/user/register 注册接口
export async function postRegister(email_verify_code: number, mailbox: string, password: string) {
  const jsonObject = {
    email_verify_code: email_verify_code,
    mailbox: mailbox,
    password: password
  }
  console.log('postRegister jsonObject ===> ', jsonObject)
  await (
    await instance.post(`/api/pub/user/register`, jsonObject)
  ).data
  // 成功时then，失败时catch
}

// 登录

// POST /api/pub/user/login 用户登录
export async function postLogin(password: string, mailbox: string) {
  const jsonObject = {
    password: password,
    mailbox: mailbox
  }
  console.log('postLogin jsonObject ===> ', jsonObject)
  const response = await instance.post(`/api/pub/user/login`, jsonObject)
  console.log('postLogin response.data ===> ', response.data)
  return response.data.data
  // {
  //   "token":"dolor sunt adipisicing nisi anim"
  // }
}

// 帖子

// GET /api/pub/news/{id} 获取单条帖子
export async function getPost(id: number): Promise<Post | null> {
  try {
    // const response = await instance.get(`/api/pub/posts/${id}`)
    const response = await instance.get(`/api/pub/posts?id=${id}`)
    console.log('getPost===>', response)
    return response.data[0]
  } catch (error) {
    console.log(error)
    return null
  }
}
// GET /api/pub/news 获取多条帖子
export async function getPosts(offset: number, limit: number): Promise<Post[] | null> {
  try {
    const response = await instance.get('/posts')
    // const response = await instance.get(`/api/pub/news?offset=${offset}&limit=${limit}`)
    // console.log("getPosts response===>",response);
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
// POST /api/auth/posts/p 创建帖子
export async function postCreatePost(title: string, block_id: number) {
  const jsonObject = { title: title, block_id: block_id }
  console.log('postCreatePost jsonObject ===> ', jsonObject)
  // await instance.post(`/api/auth/posts/p`, jsonObject)
  await instance.post(`/api/auth/posts/p`, jsonObject)
}
// POST /api/auth/posts/p/{id} 增加评论
export async function postComment(comment: string, post_id: number) {
  const jsonObject = { content: comment }
  console.log('postComment jsonObject ===> ', jsonObject)
  // await instance.post(`//api/auth/posts/p/${id}`, jsonObject)
  await instance.post(`/comments`, jsonObject)
}
// 初始化帖子
// export async function initialPost(
//   title: string,
//   comment: string,
//   block_id: number,
//   post_id: number
// ) {
//   try {
//     await postCreatePost(title, block_id)
//     postComment(comment,post_id)  
//   } catch (error) {
//     console.log("initialPost==>",error)
//   }
// }

// 主题

// GET /api/pub/block 获取主题
export async function getBlocks(offset: number, limit: number): Promise<BlockResponse[] | null> {
  try {
    const response = await instance.get('/blocks')
    // const response = await instance.get(`/api/pub/blocks?offset=${offset}&limit=${limit}`)
    console.log('getBlocks response===>', response)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

// 长廊

// GET /api/pub/gallery 获取所有gallery

export async function getGalleries(): Promise<Gallery[] | null> {
  try {
    const response = await instance.get('/api/pub/gallery')
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

// GET /api/pub/gallery/{id} 获取指定gallery
export async function getGalleryDetail(id: number): Promise<Gallery[] | null> {
  try {
    // const response = await instance.get(`/api/pub/gallery/?id=${id}`)
    const response = await instance.get(`/gallery?id=${id}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

// 退出登录 前端操作
// 1. 将localStorage清空
// 2. 将全局登录状态改为false
export function logout() {
  localStorage.clear()
  const loginStateStore = useLoginStateStore()
  loginStateStore.setLoginOut()
}
