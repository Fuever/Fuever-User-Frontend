<script setup lang="ts">
import BaseBlockHeader from '@/components/BaseBlockHeader.vue'
import BlockNewsItem from '@/components/BlockNewsItem.vue'
import NavMenu from '@/components/NavMenu.vue'
import { computed, ref, type Ref } from 'vue'
import { getNews } from '@/server/api'
import type { News } from '@/server/models'
import { ceil } from 'lodash'
import { useRouter } from 'vue-router'
import BaseTail from '@/components/BaseTail.vue'
import BaseCarousel from '@/components/BaseCarousel.vue'
import { timestamp2time } from '@/tool'
const router = useRouter()
const news = ref<News[] | null>()
// TODO 修改为换页时才请求
getNews(0, 10).then((result) => {
  news.value = result
})

const currentPage = ref(1)
const newsDisplayed = computed(() => {
  return news.value?.slice(currentPage.value * 10 - 10, currentPage.value * 10)
})
const toNewsDetails = (id: number) => {
  router.push({
    path: `/news/detail/${id}`
  })
}
</script>
<template>
  <div class="top">
    <NavMenu />
    <div class="flex f-col" style="overflow: hidden">
      <div>
        <BaseCarousel></BaseCarousel>
      </div>
      <div class="flex f-col">
        <BaseBlockHeader title="校园资讯" title_english="Information" :hide-more="true" />
        <BlockNewsItem
          v-for="newsItem in newsDisplayed"
          :key="newsItem.id"
          :day="timestamp2time(newsItem.createTime).substring(8, 10)"
          :month="timestamp2time(newsItem.createTime).substring(5, 7) + '月'"
          :title="newsItem['title']"
          :brief="newsItem['content']"
          @click="toNewsDetails(newsItem['id'])"
          class="item"
        ></BlockNewsItem>
        <h1 v-if="newsDisplayed?.length != 10" class="nomore">没有更多了哦~</h1>
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count="ceil((news ? news.length : 0) / 10)"
          v-model:currentPage="currentPage"
          class="pager"
        />
      </div>
    </div>
    <BaseTail />
  </div>
</template>
<style scoped>
.top {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
}

.flex {
  display: flex;
}

.f-center {
  align-items: center;
}
.f-col {
  flex-direction: column;
}

.pager {
  align-self: center;
  margin-top: 4%;
  margin-bottom: 2%;
}

.nomore {
  align-self: center;
  flex: 1;
  font-size: 1.2em;
}

.item {
  margin-bottom: 2%;
}
</style>
