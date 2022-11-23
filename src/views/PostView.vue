<!--
* @FileDescription: 
* @Author: Phoshowy
* @Date: 2022/11/22
* @LastEditors: 
* @LastEditTime: 2022/11/22 15:27
-->
<script setup lang="ts">
import BlockHeader from '@/components/BaseBlockHeader.vue'
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile } from 'element-plus'

const text = ref('')
const textarea = ref('')

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <div class="flex f-col">
      <BlockHeader title="发布帖子" title_english="Post" :hideMore="true" />
      <el-form>
        <h1 class="title">标题</h1>
        <div style="margin-left: 3%; margin-right: 3%">
          <el-input
            v-model="text"
            maxlength="20"
            placeholder="请输入标题"
            show-word-limit
            type="text"
          />
        </div>
        <div style="margin: 20px 0" />

        <h1 class="title">正文</h1>
        <div style="margin-left: 3%; margin-right: 3%">
          <el-input
            v-model="textarea"
            maxlength="300"
            placeholder="请输入正文"
            show-word-limit
            type="textarea"
          />
        </div>

        <div style="margin: 20px 0" />
        <h1 class="title">上传封面</h1>
        <div style="margin-left: 3%; margin-right: 3%">
          <el-upload
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text"> Drop file here or <em>click to upload</em> </div>
            <template #tip>
              <div class="el-upload__tip"> PS:jpg/png files with a size less than 500kb </div>
            </template>
          </el-upload>
        </div>

        <h1 class="title">主题</h1>
        <el-form-item>
          <h1 class="title" style="margin-left: 4%"></h1>
          <el-select v-model="value" class="m-2" placeholder="请选择主题" size="large">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div style="margin: 50px 0" />
      <el-button color="#bd3124" default><h3>发布帖子</h3></el-button>
    </div>
  </div>
</template>
<style scoped>
.title {
  font-size: 2em;
  margin: 0 0 2% 4%;
  font-weight: bold;
}
.frame {
  border: 2px solid royalblue;
}

.f-center {
  align-items: center;
}
.f-col {
  flex-direction: column;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.image-title {
  align-self: center;
  font-weight: bold;
}

.images {
  margin: 0 2% 0 2%;
}

.header {
  border-radius: 0 0 12px 12px;
  background-color: white;
  height: 48px;
  display: flex;
  z-index: 2;
  justify-content: space-between;
}
.flex {
  display: flex;
}

.forum-container {
  border: 1px solid #777;
  height: 360px;
  overflow-y: auto;
  margin: 0 3% 0 3%;
}

.icon-div {
  border: #777;
  margin: 0 3% 5% 3%;
  display: flex;
  flex-direction: row;
}
.icon-more {
  width: 10%;
  height: 10%;
  color: #bd3124;
}
</style>
