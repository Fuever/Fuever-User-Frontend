<!--
* @FileDescription: 从帖子的回复可以点进去看的用户资料
* @Author: Gallon
* @Date: 2022/12/09
* @LastEditors: Gallon
* @LastEditTime: 2022/12/09 09:31
-->
<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
import type { User, UserDetailed } from '@/server/models'
import { computed, ref } from 'vue'
import { getUserDetail } from '@/server/api'
import { useRoute } from 'vue-router'
import { CreditCard } from '@element-plus/icons-vue'
import { timestamp2date } from '@/tool'

const userDisplayed = ref<UserDetailed | null>()
const avatarUrl = ref('')
const route = useRoute()
// console.log(route)
getUserDetail(+route.params.id).then((res) => {
  userDisplayed.value = res
  avatarUrl.value = res?.avatar as string
})
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <NavMenu></NavMenu>
    <div class="avatar-bk">
      <el-avatar
        style="align-self: center"
        ref="avatarRef"
        :size="150"
        :limit="1"
        :src="avatarUrl"
      />
    </div>
    <div style="width: 100vw">
      <el-descriptions :column="2" size="large" border>
        <el-descriptions-item :span="2">
          <template #label>
            <div class="cell-item">
              <el-icon>
                <CreditCard />
              </el-icon>
              <h3 style="font-weight: bolder; margin-left: 1vw"> 昵称 </h3>
            </div>
          </template>
          <h3>
            {{ userDisplayed ? userDisplayed?.nickname : '未知' }}
          </h3>
        </el-descriptions-item>
        <el-descriptions-item :span="2">
          <template #label>
            <div class="cell-item">
              <el-icon>
                <message />
              </el-icon>
              <h3 style="font-weight: bolder; margin-left: 1vw"> Email </h3>
            </div>
          </template>
          <h3>
            {{ userDisplayed ? userDisplayed?.mail : '未知' }}
          </h3>
        </el-descriptions-item>
        <el-descriptions-item :span="2">
          <template #label>
            <div class="cell-item">
              <el-icon>
                <iphone />
              </el-icon>
              <h3 style="font-weight: bolder; margin-left: 1vw"> 联系方式 </h3>
            </div>
          </template>
          <h3>
            {{ userDisplayed ? userDisplayed?.phone : '未知' }}
          </h3>
        </el-descriptions-item>
        <el-descriptions-item :span="2">
          <template #label>
            <div class="cell-item">
              <el-icon>
                <place />
              </el-icon>
              <h3 style="font-weight: bolder; margin-left: 1vw"> 居住地 </h3>
            </div>
          </template>
          <h3>
            {{ userDisplayed ? userDisplayed?.residence : '未知' }}
          </h3>
        </el-descriptions-item>
        <el-descriptions-item :span="2">
          <template #label>
            <div class="cell-item">
              <el-icon>
                <postcard />
              </el-icon>
              <h3 style="font-weight: bolder; margin-left: 1vw"> 职业 </h3>
            </div>
          </template>
          <h3>
            {{ userDisplayed ? userDisplayed?.job : '未知' }}
          </h3>
        </el-descriptions-item>
        <el-descriptions-item label="性别" :span="2">
          <template #label>
            <div class="cell-item">
              <el-icon>
                <user />
              </el-icon>
              <h3 style="font-weight: bolder; margin-left: 1vw"> 性别 </h3>
            </div>
          </template>
          <h3>
            {{ userDisplayed ? (userDisplayed?.gender ? '男' : '女') : '未知' }}
          </h3>
        </el-descriptions-item>
        <el-descriptions-item label="入学年份">
          <template #label>
            <div class="cell-item">
              <el-icon>
                <clock />
              </el-icon>
              <h3 style="font-weight: bolder; margin-left: 1vw"> 入学时间 </h3>
            </div>
          </template>
          <h3>
            {{ userDisplayed ? timestamp2date(userDisplayed?.entranceTime as number) : '未知' }}
          </h3>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>
<style scoped>
.avatar-bk {
  height: 28vh;
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

.cell-item {
  display: flex;
  align-items: center;
  width: 22vw;
  overflow-x: hidden;
}
</style>
<style>
.el-descriptions__label {
  width: 30vw;
}
</style>
