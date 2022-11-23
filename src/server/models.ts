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
  createdTime: number
  updatedTime: number
  state: number
  blockID: number
  description: string
  isLock: boolean
  comments?:Message[]
}
export interface News {
  id: number
  authorID: number
  title: string
  content: string
  createTime: number
  cover: string
}
export interface Message {
  id: number
  authorID: number
  content: string
  postID: number
  createdTime: number
  // 后端需要加头像
  // avatar
}
export interface Gallery extends Location {
  authorID: number
  content: string
  cover: string
  createTime: number
  // 需要增加对应热帖的id
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
export interface Anniversary extends Location {
  adminID: number
  content: string
  startTime: number
  endTime: string
}
export interface Location {
  id: number
  x?: string
  y?: string
  title:string
}