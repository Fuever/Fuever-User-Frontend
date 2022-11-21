<!--
* @FileDescription: 单页资讯详情
* @Author: Gallon
* @Date: 2022/11/20
* @LastEditors: Gallon
* @LastEditTime: 2022/11/20 23:04
-->
<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
import { getNewsDetail } from '@/server/api'
import type { News } from '@/server/models'
import { stringLiteral } from '@babel/types'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const news = ref<News | null>()
const contentRows = ref<string[] | null>()
getNewsDetail(+route.params.id).then((result) => {
  // https://stackoverflow.com/questions/14667713
  news.value = result ? result[0] : null
  contentRows.value = news.value ? news.value.content?.split('\n') : ['']
  console.log(news.value)
})

const back = () => {
  router.back()
}
</script>
<template>
  <div class="f-col">
    <NavMenu></NavMenu>
    <div class="news-body f-col">
      <h2 class="title"> {{ news?.title }} </h2>
      <div class="flex info">
        <h3>发布日期：{{ news?.createTime }}</h3>
        <h3>作者：{{ news?.authorID }}</h3>
      </div>
      <el-divider content-position="center" />
      <p v-for="row in contentRows" class="row">
        {{ row }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
}
.f-col {
  display: flex;
  flex-direction: column;
}
.header {
  margin-left: 2%;
  padding: 0px;
}

.back {
  height: 100%;
}

.news-body {
  padding: 5%;
}

.title {
  font-weight: bold;
}

.info {
  margin-top: 2vh;
  margin-bottom: 1vh;
}

.row {
  text-indent: 2em;
  font-size: 1.4em;
  white-space: pre-line;
  margin-top: 2%;
}
</style>
