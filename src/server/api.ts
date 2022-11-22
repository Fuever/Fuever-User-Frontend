import { useRouter } from 'vue-router'

import instance from './intercept'
import type { News, User, Anniversary, Post, Gallery } from './models'

export async function getNewsByPAge(page:number,limit:Number): Promise<News[] | null> {
  try {
    const response = await instance.get(`/news?_page=${page}&_limit=${limit}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export async function getPostsByPAge(page:number,limit:Number): Promise<Post[] | null> {
  try {
    const response = await instance.get(`/posts?_page=${page}&_limit=${limit}`)
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
export async function getGalleries(): Promise<Gallery[] | null> {
  try {
    const response = await instance.get('/galleries')
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export async function getNewsDetail(id:number): Promise<News[]| null>{
  try {
    const response = await instance.get(`/news?id=${id}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export async function getGalleryDetail(id:number): Promise<Gallery[]| null>{
  try {
    const response = await instance.get(`/galleries?id=${id}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}