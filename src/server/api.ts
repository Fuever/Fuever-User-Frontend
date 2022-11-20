import { useRouter } from 'vue-router'

import instance from './intercept'
import type { News, User, Anniversary, Post } from './models'

export async function getNews(): Promise<News[] | null> {
  try {
    const response = await instance.get('/news')
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export async function getPosts(): Promise<Post[] | null> {
  try {
    const response = await instance.get('/posts')
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export async function getAnniversaries(): Promise<Anniversary[] | null> {
  try {
    const response = await instance.get('/activities')
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
