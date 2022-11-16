export interface User {
  id: number;
  mail: string;
  userName: string;
  password: string;
}
export interface UserDetailed extends User {
  nickname?: string;
  avatar?: string;
  studentID?: number;
  phone?: number;
  gender?: boolean;
  age?: number;
  job?: string;
  entranceTime?: number;
  classID?: number;
  residence?: string;
}
export interface Post {
  id: number;
  authorID: number;
  title: string;
  createdTime: number;
  updatedTime: number;
  state: number;
  blockID: number;
  isLock: boolean;
}
export interface News {
  id: number;
  authorID: number;
  title: string;
  content: string;
  createTime: number;
  cover: string;
}
export interface Message {
  id: number;
  authorID: number;
  content: string;
  postID: number;
  createdTime: number;
}
export interface Gallery {
  id: number;
  title: string;
  author: string;
  content: string;
  cover: string;
  createTime: number;
}
// 班级名隐式与Block相等
export interface Class {
  id: number;
  className: string;
  major: string;
  grade: number;
}
export interface ResponseError {
  error: string;
  message?: string;
}
