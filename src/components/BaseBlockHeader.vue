<!--
* @FileDescription: 首页模块block标题头组件
* 使用时绑定标题、英文标题
* @Author: Gallon
* @Date: 2022/11/07
* @LastEditors: Gallon
* @LastEditTime: 2022/11/13 16:38
-->
<script setup lang="ts">
import { useRouter } from 'vue-router';

export interface Props {
  title: string;
  title_english: string;
  hideMore?: boolean;
  toPath?: string
}
const props = withDefaults(defineProps<Props>(), {
  hideMore: false,
  toPath: '/'
})
const router = useRouter()
const toMore = (path:string) => {
  router.push({
    path:path
  })
}
</script>
<template>
  <div class="flex header-container">
    <h1 class="title">{{ title }}</h1>
    <h2 class="title-eng">{{ title_english }}</h2>
    <div v-if="!hideMore">
      <el-button @click="toMore(toPath)" class="btn-more" type="primary" text>
        <h2 class="more-text">更多&nbsp;</h2>
        <el-icon size="12">
          <ArrowRightBold />
        </el-icon>
      </el-button>
    </div>
  </div>
  <img class="years" src="../assets/images/years.png" alt="" />
</template>

<style scoped>
.header-container {
  align-items: end;
  margin: 4% 0 0 0;
}
.flex {
  display: flex;
}

.title {
  font-size: 2.8em;
  margin: 0 0 0 4%;
  font-weight: bold;
}
.title-eng {
  font-size: 2em;
  margin: 0 0 1% 4%;
  flex: 1;
  color: #e99d42;
}

.more-text {
  font-size: 1.4em;
  font-weight: bolder;
}

.btn-more {
  margin: 0 4% 2% 0;
  padding: 0;
}

.years {
  margin: 0 0 4% 0;
}
</style>
