<!--
* @FileDescription: 登录界面
* @Author: Gallon
* @Date: 2022/11/11
* @LastEditors: Gallon
* @LastEditTime: 2022/11/11 15:40
-->
<script setup lang="ts">
import IconFzu from "@/components/icons/IconFzu.vue";
import { useRouter } from "vue-router";
import { ElForm, ElFormItem } from "element-plus";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from 'element-plus';
import { Message } from "@element-plus/icons-vue";
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  accountID: "",
  password: "",
});
const rules = reactive<FormRules>({
  accountID: [{ required: true, message: "请输入您的账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入您的密码", trigger: "blur" }],
});
const open = () => {
  ElMessage.warning('账号和密码不得为空！')
}
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      open();
    }
  });
};

const router=useRouter()
const toSignUp = () =>
{
  router.push({
    name:'signup'
  })
}





</script>

<template>
  <img src="@/assets/login_bk.jpg" class="bk" alt="" />
  <div class="bk-filter"></div>
  <div class="f-col f-center top-container">
    <IconFzu class="fzu-icon" />
    <h1 class="welcome-hint">欢迎您回到福州大学</h1>
    <h3 class="welcome-hint-eng">Welcome Back FZU</h3>
    <elCard class="f-col form-card">
      <el-form class="form" ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <el-form-item label="账号：" class="account"  prop="accountID">
          <el-input v-model="ruleForm.accountID" placeholder="邮箱/电话号" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="密码" show-password/>
          
        </el-form-item>
        <el-form-item class="login">
          <el-button type="primary" style="flex: 1" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" text style="flex: 1" @click="toSignUp">未有账号？立即注册</el-button>
        </el-form-item>
      </el-form>
    </elCard>
  </div>
</template>
<style scoped>
.f-all {
  flex: 1;
}

.f-center {
  align-items: center;
}
.f-col {
  display: flex;
  flex-direction: column;
}
.form-card {
  margin: 0;
  padding: 0;
}
.fzu-icon {
  width: 50%;
  margin-top: 5%;
  fill: currentColor;
  color: #bd3124;
}
.welcome-hint {
  font-family: "楷体";
  font-weight: bolder;
}

.welcome-hint-eng {
  font-weight: bold;
  margin: 0 0 10% 0;
}

.top-container {
  height: 100%;
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
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.6)
  );
  z-index: -1;
}

.account {
  margin-top: 6%;
}

.login {
  margin-top: 24%;
}
</style>
