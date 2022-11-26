<!--
* @FileDescription: 个人主页
* @Author: Phoshowy
* @Date: 2022/11/22
* @LastEditors: Gallon
* @LastEditTime: 2022/11/26 23:42
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLoginStateStore } from '@/stores/counter'
import NavMenu from '@/components/NavMenu.vue'
import type { UserDetailed } from '@/server/models'
import { ref } from 'vue'
import { getUserDetail, logout } from '@/server/api'
const loginState = useLoginStateStore()
const router = useRouter()
const currentUser = ref<UserDetailed | null>()

if (loginState.userID) {
  getUserDetail(loginState.userID).then((res) => {
    currentUser.value = res
  })
}
const toPath = (path: string) => {
  router.push({
    path: path
  })
}


const displayUploadPictureDialog = ref(false)
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <NavMenu></NavMenu>
    <div class="avatar-bk">
      <el-avatar @click="displayUploadPictureDialog=true" style="align-self: center" :size="150" :src="currentUser?.avatar" />

      <h1 style="text-align: center; color: white">
        <p> 欢迎您来到福依旧! </p>
        <p v-if="loginState.login">
          {{ currentUser?.nickname }}
        </p>
      </h1>
    </div>

    <el-collapse accordion>
      <el-collapse-item name="1" disabled @click="toPath('/')">
        <template #title>
          <img
            style="margin-left: 2vw; color: darkred; font-weight: bolder; height: 50%"
            src="@/assets/home.svg"
            alt=""
          />
          <h2 style="margin-left: 2vw; color: darkred; font-weight: bolder">首页</h2>
        </template>
      </el-collapse-item>
      <el-collapse-item name="2" disabled @click="toPath('/')">
        <template #title>
          <img
            style="margin-left: 2vw; color: darkred; font-weight: bolder; height: 50%"
            src="@/assets/refine.svg"
            alt=""
          />
          <h2 style="margin-left: 2vw; color: darkred; font-weight: bolder">完善信息</h2>
        </template>
      </el-collapse-item>
      <el-collapse-item name="3" disabled @click="toPath('/working')">
        <template #title>
          <img
            style="margin-left: 2vw; color: darkred; font-weight: bolder; height: 50%"
            src="@/assets/recom.svg"
            alt=""
          />
          <h2 style="margin-left: 2vw; color: darkred; font-weight: bolder">校友推荐</h2>
        </template>
      </el-collapse-item>
      <el-collapse-item name="4" disabled @click="toPath('/working')">
        <template #title>
          <img
            style="margin-left: 2vw; color: darkred; font-weight: bolder; height: 50%"
            src="@/assets/topic.svg"
            alt=""
          />
          <h2 style="margin-left: 2vw; color: darkred; font-weight: bolder">热聊话题</h2>
        </template>
      </el-collapse-item>
      <el-collapse-item v-if="loginState.login" name="5">
        <div style="display:flex;justify-content: flex-end;">
          <el-button  @click="logout"  type="primary">
            <h2>确认退出</h2>
          </el-button>
        </div>
        <template #title>
          <img
            style="margin-left: 2vw; color: darkred; font-weight: bolder; height: 50%"
            src="@/assets/exit.svg"
            alt=""
          />
          <h2 style="margin-left: 2vw; color: darkred; font-weight: bolder">退出登录</h2>
        </template>
      </el-collapse-item>
    </el-collapse>

    <el-button type="primary" class="status" v-if="!loginState.login" @click="toPath('/login')">
      登录
    </el-button>
    <el-dialog v-model="displayUploadPictureDialog" title="上传头像">
      
    </el-dialog>
  </div>
</template>
<style>
.avatar-bk {
  height: 40vh;
  background-color: darkred;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.status {
  height: 5vh;
  font-size: 1.8em;
  font-weight: bolder;
  margin: 10vh 2vw 0 2vw;
}
</style>
