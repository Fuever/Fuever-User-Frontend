<template>
  <NavMenu></NavMenu>
  <div style="display: flex; align-items: center; flex-direction: column">
    <el-form label-width="30vw" style="width: 90vw; margin-top: 5vh" label-position="left">
      <el-form-item label="学号">
        <el-input :disabled="inputDisabled" v-model="studentNumber" />
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input :disabled="inputDisabled" v-model="name" />
      </el-form-item>
    </el-form>
    <el-button type="primary" style="margin-top: 6vh; width: 80vw" @click="onSubmit">
      <h3>开始认证</h3>
    </el-button>
    <div style="margin-bottom: 12vh">
      <h2 style="width: 90vw; margin-top: 6vh; color: darkred; font-weight: bolder">
        请选择下列名字中你舍友的名字（多选）
      </h2>
      <el-checkbox-group style="width: 90vw; margin-top: 4vh" v-model="checkboxGroup" size="small">
        <div v-for="i in 4" style="display: flex; justify-content: space-around">
          <el-checkbox
            v-for="j in 4"
            style="width: 21vw"
            :label="authNameArray ? authNameArray[(i - 1) * 4 + (j - 1)] : ''"
            border
          />
        </div>
      </el-checkbox-group>
    </div>
    <el-button
      v-if="authNameArray"
      type="primary"
      style="margin-top: 6vh; width: 80vw"
      @click="onSubmitAuth"
    >
      <h3>立即验证</h3>
    </el-button>
    <BaseTail></BaseTail>
  </div>
</template>

<script setup lang="ts">
import BaseTail from '@/components/BaseTail.vue'
import NavMenu from '@/components/NavMenu.vue'
import { getAuthNameArray, postAuthRoommates } from '@/server/api'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const inputDisabled = ref(false)
const studentNumber = ref('')
const name = ref('')
const authNameArray = ref<String[] | null>(null)
const router = useRouter()
const onSubmit = () => {
  getAuthNameArray(Number(studentNumber.value), name.value).then((res) => {
    if (res) {
      if (res == 404) {
        ElMessage.info('学号和姓名不匹配，请重试')
      } else if (res == 403) {
        ElMessage.info('验证失败次数过多，请联系管理员')
      } else if (res == 400) {
        ElMessage.info('请检查学号和姓名格式')
      } else {
        authNameArray.value = res
        inputDisabled.value = false
        ElMessage.info('请进行选择')
      }
    }
  })
}
const onSubmitAuth = () => {
  postAuthRoommates(Number(studentNumber.value), name.value, checkboxGroup.value).then((res) => {
    console.log('postAuthRoommates->', res)
    if (res == 409) {
      ElMessage.info('学号已被认证，请联系管理员')
    } else if (res == 418) {
      ElMessage.info('答案错误，验证失败')
    } else if (res == 403) {
      ElMessage.info('您的认证权限失效，请重试')
    } else {
      router.back()
      ElMessage.success('恭喜您认证成功')
    }
  })
}
const checkboxGroup = ref([])
</script>

<style scoped></style>
<style>
label.el-checkbox {
  margin: 0px;
}
</style>
