<!--
* @FileDescription: 注册界面
* @Author: Gallon
* @Date: 2022/11/12
* @LastEditors: Gallon
* @LastEditTime: 2022/11/12 09:28
-->
<script setup lang="ts">
import { ElForm, ElFormItem } from "element-plus";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from 'element-plus';
import { Message } from "@element-plus/icons-vue";
import IconFzu from "@/components/icons/IconFzu.vue";
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  email: "",
  password: "",
  auth:""
});
const rules = reactive<FormRules>({
  email: [{ required: true, message: "请输入您的邮箱", trigger: "blur" }],
  password: [{ required: true, message: "请输入您的密码", trigger: "blur" }],
  auth: [{
    required: true, message: "请输入您的验证码", trigger: "blur" 
  }]

});
const open = () => {
  ElMessage.warning('有必选项未填写！')
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





</script>

<template>
  <img src="@/assets/images/login_bk.jpg" class="bk" alt="" />
  <div class="bk-filter"></div>
  <div class="flex col">
    
      <IconFzu class="icon-fzu"/>
      
    <div class="flex col" style="100%">
      <el-card class="form">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <el-form-item label="邮箱：" class="account"  prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入您的邮箱" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="ruleForm.password" type="password" show-password placeholder="请输入您的密码" />

        </el-form-item>
        <el-form-item prop="auth">
          <div class="flex">
            <el-input v-model="ruleForm.password" type="password" show-password placeholder="请查看邮箱验证码" />
          <el-button class="accept" type="primary">
            获取验证码
          </el-button>
          </div>
          

        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="submitForm(ruleFormRef)">
            注册
          </el-button>
        </el-form-item>
      </el-form>
      </el-card>
      
    </div>
      

  

  </div>
</template>
<style scoped>
  .flex{
    display:flex
  }
  .col{
    flex-direction: column;
    align-items:stretch ;
  }

  .icon-fzu{
    fill: #bd3124;
    margin-top: 10%;
    width:50%;
    align-self: center;
  }

  .form{
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .accept{
    margin-left: 4%
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

  .submit{
    width: 100%;
  }
  
</style>
