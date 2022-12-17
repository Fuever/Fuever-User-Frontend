import type { UserDetailed } from './models'
import { useLoginStateStore } from './../stores/counter'
import axios from 'axios'
import humps from 'humps'
import { getUserDetail } from './api'
// 创建一个单例（实例）
const instance = axios.create({
  // baseURL: 'http://localhost:3001',
  // baseURL: 'http://192.168.0.109:8080',
  baseURL: 'http://1.13.169.95:8080',
  // baseURL: 'http://192.168.246.67:8080',
  timeout: 4000,
  responseType: 'json',
  
})

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    // 部分接口需要拿到token
    let token = localStorage.getItem('token')
    if (token) {
      config.headers!['Authorization'] = token
      
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    res.data = humps.camelizeKeys(res.data)
    // console.log("camelized data==>",res.data)
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

// GET /api/auth/user/r 获取token
async function getToken(): Promise<number | null> {
  const response = await instance.get(`/api/auth/user/r`)
  if (response.status == 200) {
    return response.data.data
  } else {
    return null
  }
}

getToken().then((res) => {
  if (res) {
    const loginStateStore = useLoginStateStore()
    loginStateStore.setUserID(res)
    getUserDetail(res).then((res) => loginStateStore.setCurrentUser(res as UserDetailed))
    loginStateStore.setLogin()
  }
})

// 整体导出
export default instance
