// 所有日期由后端的number修改成string了
export interface User {
  id: number
  mail: string
  userName: string
  password: string
}
export interface UserDetailed extends User {
  nickname?: string
  avatar?: string
  studentId?: number
  phone?: number
  gender?: boolean
  age?: number
  job?: string
  entranceTime?: number
  classId?: number
  residence?: string
}
// 下面增加description字段
// 帖子
export interface Post {
  id: number
  authorId: number
  authorName: string
  authorAvatar: string
  title: string
  createdTime: number
  updatedTime: number
  state: number
  blockId: number
  isLock: boolean
}

export interface PostResponse {
  post: Post
  comment: Message[]
}
// 评论
export interface Message {
  id: number
  authorId: number
  authorName: string
  authorAvatar: string
  content: string
  postId: number
  createdTime: number
}

export interface News {
  id: number
  authorId: number
  authorName: string
  title: string
  content: string
  createTime: number
  cover: string
}

export interface Message {
  id: number
  authorId: number
  authorName: string
  avatar: string
  content: string
  postId: number
  createdTime: number
}
export interface Location {
  id: number
  positionX?: number
  positionY?: number
  title: string
}

export interface Gallery extends Location {
  authorId: number
  authorName: string
  content: string
  cover: string
  createTime: number
  // 需要增加对应热帖的id
}
export interface Anniversary extends Location {
  adminId: number
  content: string
  start: number
  end: number
}

// 班级名隐式与Block相等
export interface Class {
  id: number
  className: string
  major: string
  grade: number
}
export interface CaptchaRespose {
  img: string
  verifyId: string
}

export interface ResponseError {
  error: string
  message?: string
}

export interface Block {
  id: number
  title: string
  authorId: number
  authorName: string
}
