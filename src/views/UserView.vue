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
import { getUserDetail, logout, postAvatar } from '@/server/api'
import { ElMessage, type UploadInstance, type UploadProps, type UploadUserFile } from 'element-plus'
const loginStateStore = useLoginStateStore()
const router = useRouter()
const avatarUrl = ref('')
console.log("loginStateStore.currentUser",loginStateStore.currentUser);
if (loginStateStore.currentUser) {
  avatarUrl.value = loginStateStore.currentUser.avatar as string
}
const currentFiles = ref<UploadUserFile | null>()
if (!loginStateStore.currentUser && loginStateStore.userID) {
  getUserDetail(loginStateStore.userID).then((res) => {
    if (!loginStateStore.currentUser) {
      loginStateStore.setCurrentUser(res as UserDetailed)
      avatarUrl.value=res?res['avatar'] as string:""
    }
  })
}
const toPath = (path: string) => {
  router.push({
    path: path
  })
}
const handleUploadAvatar = () => {
  if (loginStateStore.login) {
    displayUploadPictureDialog.value = true
  } else {
    ElMessage.info('请先登录！')
  }
}

const displayUploadPictureDialog = ref(false)

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  console.log('beforeAvatarUpload:我是有被调用的')
  if (!['image/jpeg', 'image/jpg', 'image/png'].includes(rawFile.type)) {
    ElMessage.error('头像图片格式应为jpeg、jpg、png中的一个')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('文件大小不得超过2MB!')
    return false
  }
  return true
}


const handleRequest = (item: any) => {
  console.log(item)
  postAvatar(item.file)
    .then((res) => {
      if (loginStateStore.currentUser) {
        loginStateStore.currentUser.avatar = res['avatar']
      }
    })
    .then(
      (res) => {
        displayUploadPictureDialog.value = false
        ElMessage.info('上传成功！')
      },
      (err) => {
        ElMessage.info('上传失败！')
      }
    )
}

const uploadRef = ref<UploadInstance>()
const submitUpload = () => {
  uploadRef.value!.submit()
}
const handleLogout = () => {
  logout()
  avatarUrl.value = ""
  loginStateStore.clearCurrentUser()

}
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <NavMenu></NavMenu>
    <div class="avatar-bk">
      <el-avatar
        @click="handleUploadAvatar"
        style="align-self: center"
        ref="avatarRef"
        :size="150"
        :limit="1"
        :src="avatarUrl"
      />

      <h1 style="text-align: center; color: white">
        <p>欢迎您来到福依旧!</p>
        <p v-if="loginStateStore.login">
          {{ loginStateStore.currentUser?.nickname }}
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
      <el-collapse-item name="2" disabled @click="toPath('/user/edit')">
        <template #title>
          <img
            style="margin-left: 2vw; color: darkred; font-weight: bolder; height: 50%"
            src="@/assets/refine.svg"
            alt=""
          />
          <h2 style="margin-left: 2vw; color: darkred; font-weight: bolder">完善信息</h2>
        </template>
      </el-collapse-item>
      <el-collapse-item name="3" disabled @click="toPath('/user/auth')">
        <template #title>
          <img
            style="margin-left: 2vw; color: darkred; font-weight: bolder; height: 50%"
            src="@/assets/recom.svg"
            alt=""
          />
          <h2 style="margin-left: 2vw; color: darkred; font-weight: bolder">校友推荐</h2>
        </template>
      </el-collapse-item>
      <el-collapse-item name="4" disabled @click="toPath('/class')">
        <template #title>
          <img
            style="margin-left: 2vw; color: darkred; font-weight: bolder; height: 50%"
            src="@/assets/topic.svg"
            alt=""
          />
          <h2 style="margin-left: 2vw; color: darkred; font-weight: bolder">加入班级</h2>
        </template>
      </el-collapse-item>
      <el-collapse-item v-if="loginStateStore.login" name="5">
        <div style="display: flex; justify-content: flex-end">
          <el-button @click="handleLogout" type="primary">
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

    <el-button
      type="primary"
      class="status"
      v-if="!loginStateStore.login"
      @click="toPath('/login')"
    >
      登录
    </el-button>
    <el-dialog
      v-model="displayUploadPictureDialog"
      title="上传头像"
      style="width: 70vw; display: flex; flex-direction: column"
    >
      <div style="display: flex; flex-direction: column; align-items: center">
        <el-upload
          style="display: flex; flex-direction: column; align-items: center"
          ref="uploadRef"
          class="avatar-uploader"
          v-model="currentFiles"
          :auto-upload="false"
          action="Fake Action"
          :before-upload="beforeAvatarUpload"
          :http-request="handleRequest"
          :limit="1"
          list-type="picture"
        >
          <el-icon class="avatar-uploader-icon"><Plus /></el-icon>

          <template #tip>
            <h3>- 文件大小 &lt; 2MB</h3>
            <h3 style="margin-bottom: 2vh">- 图片形式为jpg/png</h3>
            <el-button class="submit-btn" type="primary" @click="submitUpload">
              点击上传
            </el-button>
          </template>
        </el-upload>
      </div>
    </el-dialog>
  </div>
</template>
<style scoped>
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
<style>
.avatar-uploader .el-upload {
  border: 3px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #bd4132;
  width: 50vw;
  height: 50vw;
  text-align: center;
}

.submit-btn {
  width: 100%;
}
</style>
