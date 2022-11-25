// 所有日期由后端的number修改成string了
export interface User {
  id: number
  mail: string
  user_name: string
  password: string
}
export interface UserDetailed extends User {
  nickname?: string
  avatar?: string
  student_id?: number
  phone?: number
  gender?: boolean
  age?: number
  job?: string
  entrance_time?: number
  class_id?: number
  residence?: string
}
// 下面增加description字段
// 帖子
export interface Post {
  id: number
  author_id: number
  author_name: string
  author_avatar: string
  title: string
  created_time: number
  updated_time: number
  state: number
  block_id: number
  description: string
  is_lock: boolean
  comments?: Message[]
}
// 评论
export interface Message {
  id: number
  author_id: number
  author_name: string
  avatar: string
  content: string
  post_id: number
  created_time: number
}

export interface News {
  id: number
  author_id: number
  author_name: string
  title: string
  content: string
  create_time: number
  cover: string
}

export interface Message {
  id: number
  author_id: number
  author_name: string
  avatar: string
  content: string
  post_id: number
  created_time: number
}
export interface Location {
  id: number
  x?: string
  y?: string
  title: string
}

export interface Gallery extends Location {
  author_id: number
  author_name:string
  content: string
  cover: string
  create_time: number
  // 需要增加对应热帖的id
}
export interface Anniversary extends Location {
  admin_id: number
  content: string
  start_time: number
  end_time: number
}

// 班级名隐式与Block相等
export interface Class {
  id: number
  class_name: string
  major: string
  grade: number
}
export interface CaptchaRespose {
  img: string
  verify_id: string
}

export interface ResponseError {
  error: string
  message?: string
}

export interface Block {
  id: number
  title: string
  author_id: number
}
export interface BlockResponse {
  block: Block
  author_name: string
} 