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
  studentID?: number
  phone?: number
  gender?: boolean
  age?: number
  job?: string
  entranceTime?: number
  classID?: number
  residence?: string
}
// 下面增加description字段
export interface Post {
  id: number
  authorID: number
  title: string
  createdTime: string
  updatedTime: string
  state: number
  blockID: number
  description: string
  isLock: boolean
}
export interface News {
  id: number
  authorID: number
  title: string
  content: string
  createTime: string
  cover: string
}
export interface Message {
  id: number
  authorID: number
  content: string
  postID: number
  createdTime: string
}
export interface Gallery {
  id: number
  title: string
  author: string
  content: string
  cover: string
  createTime: number
}
// 班级名隐式与Block相等
export interface Class {
  id: number
  className: string
  major: string
  grade: number
}
export interface ResponseError {
  error: string
  message?: string
}
export interface Anniversary {
  id: number
  adminID: number
  title: string
  content: string
  start: string
  end: string
  x?: string
  y?: string
  cover: string
}
