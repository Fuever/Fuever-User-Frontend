<!--
* @FileDescription: 注册界面
* @Author: Gallon
* @Date: 2022/11/12
* @LastEditors: Gallon
* @LastEditTime: 2022/11/12 09:28
-->
<script setup lang="ts">
import { ElForm, ElFormItem } from 'element-plus'
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import IconFzu from '@/components/icons/IconFzu.vue'
import type { CaptchaRespose } from '@/server/models'
import { postEmailCaptcha, getCaptcha, postRegister } from '@/server/api'
import { useRouter } from 'vue-router'
import Schema from 'async-validator'

const router = useRouter()

const imgUrl = ref<String | null>()

const currentVerifyID = ref<String | null>()

const messageRequired = () => {
  ElMessage.warning('有必选项未填写！')
}

const submitRuleFormRef = ref<FormInstance>()
const submitRuleForm = reactive({
  email: '',
  password: '',
  verify_code: '',
  email_verify_code: ''
})
const submitRules = reactive<FormRules>({
  email: [
    {
      required: true,
      message: '请输入您的邮箱',
      trigger: 'blur'
    },
    {
      pattern: '^[A-Za-z0-9\u4e00-\u9fa5]{1,30}@[a-zA-Z0-9_-]{1,30}(\.[a-zA-Z0-9_-]{1,30}){1,30}$',
      message: '您的邮箱格式不正确',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入您的密码',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 20,
      message: '密码长度应该在6-20位之间',
      trigger: 'blur'
    },
    {
      whitespace: false,
      message: '密码内不能含有空格',
      trigger: 'blur'
    }
  ],
  verify_code: [
    {
      required: true,
      message: '请输入图形验证码',
      trigger: 'blur'
    }
  ],
  email_verify_code: [
    {
      required: true,
      message: '请输入您邮箱中的验证码',
      trigger: 'blur'
    }
  ]
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      postRegister(+submitRuleForm.email_verify_code, submitRuleForm.email, submitRuleForm.password)
        .then((res) => {
          router.back()
          ElMessage.info('注册成功，请登录！')
        })
        .catch((err) => {
          ElMessage.info('验证码错误！')
        })
    } else {
      messageRequired()
    }
  })
}

const verifyRespose = ref<CaptchaRespose | null>()
const getCaptchaImage = () => {
  getCaptcha().then((res) => {
    verifyRespose.value = res
    imgUrl.value = res?.img
    currentVerifyID.value = res?.verifyId
    // console.log("==>" + verifyRespose.value)
    // console.log("==>" + res?.img)
    // console.log("==>"+res?.verify_id)
  })
}
getCaptchaImage()

const emailDescriptor = {
  email: 
    {
      pattern: '^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$',
      trigger: 'blur'
    }
  
}
const emailValidator = new Schema(emailDescriptor)


const getEmailCaptcha = async (email:string) => {
  const judge= await emailValidator.validate({
    email:email
  }).catch(err => {
    ElMessage.info('您的邮箱格式不正确')
  })
  if (judge) {
    postEmailCaptcha(
    currentVerifyID.value as string,
    submitRuleForm.verify_code,
    submitRuleForm.email
  )
    .then((res) => {
      ElMessage.info('邮箱正在发送中，如未收到请检查您邮箱的垃圾站')
    })
    .catch((err) => {
      //验证不通过的情况
      ElMessage.info('验证码错误！')
      getCaptchaImage()
    })
  }
}
</script>

<template>
  <img src="@/assets/images/login_bk.jpg" class="bk" alt="" />
  <div class="bk-filter"></div>
  <div class="flex col">
    <IconFzu class="icon-fzu" />
    <div class="flex col" style="100%">
      <el-card class="form">
        <el-form ref="submitRuleFormRef" :model="submitRuleForm" :rules="submitRules">
          <el-form-item label="邮箱：" class="account" prop="email">
            <el-input v-model="submitRuleForm.email" placeholder="请输入您的邮箱" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              v-model="submitRuleForm.password"
              type="password"
              show-password
              placeholder="请输入您的密码"
            />
          </el-form-item>
          <el-form-item prop="verify_code">
            <div class="flex">
              <el-input
                v-model="submitRuleForm.verify_code"
                type="password"
                show-password
                placeholder="请输入图形验证码"
              />
              <img
                id="img"
                @click="getCaptchaImage()"
                :src="imgUrl?imgUrl as string:'src/assets/loading.svg'"
                alt=""
              />
            </div>
          </el-form-item>
          <el-form-item prop="email_verify_code" style="justify-content: center">
            <div class="flex">
              <el-input
                v-model="submitRuleForm.email_verify_code"
                type="password"
                show-password
                placeholder="请查看邮箱验证码"
              />
              <el-button class="accept" @click="getEmailCaptcha(submitRuleForm.email)" type="primary">
                获取验证码
              </el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="submit" type="primary" @click="submitForm(submitRuleFormRef)">
              注册
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<style scoped>
.flex {
  display: flex;
}
.col {
  flex-direction: column;
  align-items: stretch;
}

.icon-fzu {
  fill: #bd3124;
  margin-top: 10%;
  width: 50%;
  align-self: center;
}

.form {
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
}

.accept {
  margin-left: 4%;
}

.bk {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -2;
}

.bk-filter {
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.6));
  z-index: -1;
}

.submit {
  width: 100%;
}

#img {
  width: 50vw;
  height: 5vh;
  margin-left: 2vw;
  color: #bd3124;
}
</style>
