<!--
* @FileDescription: 首页界面
* @Author: Gallon
* @Date: 2022/11/11
* @LastEditors: Gallon
* @LastEditTime: 2022/11/22 16:58
-->
<script setup lang="ts">
import BlockNewsItem from '../components/BlockNewsItem.vue'
import BlockHeader from '@/components/BaseBlockHeader.vue'
import BlockSingleForum from '@/components/BlockSingleForum.vue'
import BaseTail from '@/components/BaseTail.vue'
import NavMenu from '@/components/NavMenu.vue'
import { ElCard, ElCarousel, ElTimeline, ElTimelineItem } from 'element-plus'
import { ref } from 'vue'
import { getAnniversaries, getGalleries, getNews, getPosts } from '@/server/api'
import type { News, Post, Anniversary, Gallery } from '@/server/models'
import { useRouter } from 'vue-router'
import BaseCarousel from '@/components/BaseCarousel.vue'
import { timestamp2date, timestamp2time } from '@/tool'
const router = useRouter()
const news = ref<News[] | null>()
const anniversaries = ref<Anniversary[] | null>()
const posts = ref<Post[] | null>()
const galleries = ref<Gallery[] | null>()
getGalleries().then((res) => {
  galleries.value = res
})
getNews(0, 3).then((result) => {
  news.value = result
  console.log('news==>', news.value)
})
getPosts(0, 2).then((result) => {
  posts.value = result
  console.log('posts==>', posts.value)
})
getAnniversaries(0, 5).then((result) => {
  anniversaries.value = result
  console.log('anniversaries==>', anniversaries.value)
})

const toNewsDetails = (id: number) => {
  router.push({
    path: `/news/detail/${id}`
  })
}
const toPostDetail = (id: number) => {
  router.push({
    path: `/post/${id}`
  })
}
</script>

<template>
  <div class="top">
    <NavMenu></NavMenu>
    <div class="flex f-col" style="overflow: hidden">
      <BaseCarousel></BaseCarousel>

      <BlockHeader title="校园资讯" title_english="Information" to-path="/news"></BlockHeader>

      <BlockNewsItem
        v-for="newsItem in news"
        :key="newsItem['id']"
        :day="timestamp2time(newsItem['createTime']).substring(8, 10)"
        :month="timestamp2time(newsItem['createTime']).substring(5, 7) + '月'"
        :title="newsItem['title']"
        :brief="newsItem['content']"
        @click="toNewsDetails(newsItem['id'])"
      ></BlockNewsItem>

      <BlockHeader title="影像福大" title_english="Videos" to-path="/video"></BlockHeader>

      <h1 style="align-self: center; font-weight: bold">疫去春来</h1>
      <video controls class="video" preload="none">
        <source
          src="https://news.fzu.edu.cn/__local/6/3D/EF/C2A4B68E681360EA48AB4ABD0FF_B00AF9BA_C724CC8.mp4"
          type="video/mp4"
        />
      </video>

      <BlockHeader
        title="校庆活动"
        title_english="Anniversary"
        to-path="/anniversary"
      ></BlockHeader>

      <div class="timeline-container">
        <el-timeline style="margin: 3%">
          <el-timeline-item
            v-for="item in anniversaries"
            center
            :timestamp="timestamp2date(item['start'])"
            placement="top"
          >
            <el-card>
              <h2>{{ item['title'] }}</h2>
              <h3>截止于{{ timestamp2date(item['end']) }}</h3>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <BlockHeader title="时光长廊" title_english="Gallery" to-path="/gallery"></BlockHeader>
      <div class="flex f-col images">
        <el-carousel :interval="3000" type="card" height="20vh" arrow="always">
          <el-carousel-item v-for="gallery in galleries" :key="gallery.id" style="height: 100%">
            <el-image style="height: 100%" :src="gallery.cover" alt="" fit="contain" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <BlockHeader title="交流论坛" title_english="Forum" to-path="/forum"></BlockHeader>
      <div class="flex f-col forum-container">
        <BlockSingleForum
          v-for="item in posts"
          :title="item['title']"
          :creator="item['authorName'].toString()"
          :date="timestamp2date(item['updatedTime'])"
          @click="toPostDetail(item.id)"
        />
      </div>
      <BaseTail />
    </div>
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

.images {
  margin: 0 2% 0 2%;
}

.video {
  align-self: center;
  width: 92vw;
}

.forum-container {
  height: 260px;
  overflow-y: hidden;
  overflow-x: hidden;
  align-items: center;
  margin: 0 3% 0 3%;
  padding-bottom: 2%;
}

.header {
  border-radius: 0 0 12px 12px;
  background-color: white;
  height: 48px;
  display: flex;
  z-index: 2;
  justify-content: space-between;
}
.timeline-container {
  margin: 0 2% 0 2%;
  overflow-y: overlay;
  height: 40vh;
  border-radius: 2%;
  border: 2px solid #bbb;
}
</style>
