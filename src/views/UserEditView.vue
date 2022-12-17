<!--
* @FileDescription: 从帖子的回复可以点进去看的用户资料
* @Author: Gallon
* @Date: 2022/12/09
* @LastEditors: Gallon
* @LastEditTime: 2022/12/09 09:31
-->
<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
import type { UserDetailed } from '@/server/models'
import { computed, ref } from 'vue'
import { getUserDetail,putEditInfo } from '@/server/api'
import { useRoute, useRouter } from 'vue-router'
import { useLoginStateStore } from '@/stores/counter'
import { reactive,watch } from 'vue'
// @ts-ignore
import { provinceAndCityDataPlus, CodeToText,TextToCode } from 'element-china-area-data'
import { ElMessage } from 'element-plus'
const loginStateStore = useLoginStateStore()
const router = useRouter()
const residenceCodes = ref()
const form = ref<UserDetailed>({id:-1,mail:""})
getUserDetail(loginStateStore.currentUser?.id as number).then(
  res => {
    form.value = res as UserDetailed
    let residenceRes = TextToCode
    if (res?.residence) {
      console.log(res.residence);
      for (const text of res?.residence?.split('/')) {
        console.log(111,text);
        residenceRes = residenceRes[text]
      }
    }
    residenceCodes.value = residenceRes.code
    
    
    
  }
)

const onSubmit = () => {
  if (residenceCodes.value) {
    form.value.residence = residenceCodes.value.map((e: string | number) => { return CodeToText[e] }).join("/")
  }

  putEditInfo(form.value as UserDetailed).then(res => {
    ElMessage.success('编辑完成！')
    router.back()
  })
}

</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <NavMenu></NavMenu>
    <el-form
      label-width="30vw"
      style="width: 90vw; margin-top: 5vh"
      label-position="left"
    >
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.gender">
          <el-radio :label="true">男</el-radio>
          <el-radio :label="false">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input-number v-model="form.age" :min="18" :max="100" />
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="职业">
        <el-input v-model="form.job" />
      </el-form-item>
      <el-form-item label="居住地">
        <el-cascader
          placeholder="请选择地区"
          size="default"
          :options="provinceAndCityDataPlus"
          v-model="residenceCodes">
        </el-cascader>
      </el-form-item>
      <el-form-item label="入学年月">
        <el-date-picker
          v-model="form.entranceTime"
          type="month"
          placeholder="选择入学年月"
          style="width: 100%"
          format="YYYY年MM月"
          value-format="x"
          tag-type="success"
        />
      </el-form-item>
      

      <el-form-item style="margin-top: 10vh;">
        <el-button type="primary" @click="onSubmit" style="width:60vw">更新</el-button>
      </el-form-item>
    </el-form>
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
