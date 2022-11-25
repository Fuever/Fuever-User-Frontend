<!--
* @FileDescription: 
* @Author: Phoshowy
* @Date: 2022/11/22
* @LastEditors: 
* @LastEditTime: 2022/11/22 15:27
-->
<script setup lang="ts">
import BlockHeader from '@/components/BaseBlockHeader.vue'
import { ref, watch } from 'vue'
import IconFzu from '@/components/icons/IconFzu.vue'
import { ElMessage, type UploadFile } from 'element-plus'
import type { BlockResponse } from '@/server/models'
import { getBlocks, postCreatePost } from '@/server/api'
import { initial } from 'lodash'
import NavMenu from '@/components/NavMenu.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const text = ref('')

const blockResponse = ref<BlockResponse[] | null>()
getBlocks(0, 1000).then((res) => {
  blockResponse.value = res
})
const blockValue = ref('')
watch(blockValue, (oldVal, newVal) => {
  console.log('old==>', oldVal)
  console.log('new==>', newVal)
})
const submitCreatePost = (title: string, block_id: number) => {
  postCreatePost(title, block_id).then(
    (res) => {
      ElMessage.info('创建成功，等待审核后发布！')
      router.back()
    },
    (err) => {
      ElMessage.info('创建失败')
    }
  )
}
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <div class="flex f-col">
      <NavMenu></NavMenu>
      <BlockHeader title="发布帖子" title_english="Post" :hideMore="true" />
      <el-form>
        <IconFzu style="color: currentColor; fill: #bd3124"></IconFzu>

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
        <div style="margin: 20px 0" />

        <h1 class="title">主题</h1>
        <el-form-item>
          <h1 class="title" style="margin-left: 4%"></h1>
          <el-select v-model="blockValue" class="m-2" placeholder="请选择主题" size="large">
            <el-option
              v-for="response in blockResponse"
              :key="response.block.id"
              :label="response.block.title"
              :value="response.block.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div style="margin: 5vh 0" />
      <el-button color="#bd3124" @click="submitCreatePost(text,+blockValue)" default><h3>发布帖子</h3></el-button>
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
