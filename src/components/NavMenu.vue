<!--
* @FileDescription: 页头组件
* @Author: Phoshowy
* @Date: 2022/11/20
* @LastEditors: 
* @LastEditTime: 2022/11/20 22:46
*需完成路由配置后更改标签
-->
<template>
  <div class="stretch">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#bd3142"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
    >
      <el-sub-menu index="1" expand-close-icon="<el-icon ><ArrowLeftBold /></el-icon>">
        <template #title style="display: flex">
          <el-icon v-on:click="backHistory"><ArrowLeftBold /></el-icon>

          <img
            src="../assets/images/11.png"
            style="width: 60px; height: 60%; display: flex; margin-left: 0"
          />

          <img
            src="../assets/images/schoollogo.png"
            style="width: 200px; height: 80%; display: flex; margin-left: 10px"
          />
        </template>

        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/user">个人页面</el-menu-item>
        <el-menu-item index="/forum">交流区</el-menu-item>
        <el-menu-item index="/news">新闻资讯</el-menu-item>
        <el-menu-item index="/video">影像福大</el-menu-item>
        <el-menu-item index="/activity">院庆活动</el-menu-item>
        <el-menu-item index="/gallery">时光长廊</el-menu-item>
        <el-menu-item index="/dev">DEV</el-menu-item>
        <el-menu-item index="/login" v-if="!loginStateStore.login">登录</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style>
.stretch {
  align-self: stretch;
}
.el-sub-menu__title {
  height: 5vh;
}
.el-sub-menu .el-menu-item {
  height: 4vh;
}
</style>
<script lang="ts" setup>
import { useLoginStateStore } from '@/stores/counter'
import { logout } from '@/server/api'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const router = useRouter()
const backHistory = () => {
  router.go(-1) //返回上一层
}
const loginStateStore = useLoginStateStore()
const onLogout = () => {
  logout()
}
</script>
