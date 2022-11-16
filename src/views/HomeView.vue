<!--
* @FileDescription: 首页界面
* @Author: Gallon
* @Date: 2022/11/11
* @LastEditors: Gallon
* @LastEditTime: 2022/11/13 16:58
-->
<script setup lang="ts">
import BlockNewsItem from "../components/BlockNewsItem.vue";
import BlockHeader from "@/components/BaseBlockHeader.vue";
import BlockSingleForum from "@/components/BlockSingleForum.vue";
import BaseTail from "@/components/BaseTail.vue";
import { ElCard, ElCarousel, ElTimeline, ElTimelineItem } from "element-plus";
import axios from "axios";
import { ref } from "vue";
const news = ref([]);
const activities = ref([]);
const forums = ref([]);
const loadNews = async () => {
  try {
    let { data } = await axios("http://localhost:3001/news");
    news.value = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const loadActivities = async () => {
  try {
    let { data } = await axios("http://localhost:3001/activities");
    activities.value = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const loadForums = async () => {
  try {
    let { data } = await axios("http://localhost:3001/forums");
    forums.value = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
loadNews();
loadActivities();
loadForums();
</script>

<template>
  <div class="top">
    <div class="flex f-col" style="overflow: hidden">
      <div>
        <el-carousel>
          <el-carousel-item v-for="item in 4" :key="item">
            <h1 class="small justify-center" text="2xl">{{ item }}</h1>
          </el-carousel-item>
        </el-carousel>
      </div>

      <BlockHeader
        title="校园资讯"
        title_english="Information"
        to-path="/news"
      ></BlockHeader>

      <BlockNewsItem
        v-for="newItem in news"
        :day="(newItem['date'] as string).substring(8,10)"
        :month="(newItem['date'] as string).substring(5,7)+'月'"
        :title="newItem['title']"
        :brief="newItem['content']"
      ></BlockNewsItem>

      <BlockHeader title="影像福大" title_english="Videos" to-path="/video"></BlockHeader>
      <video class="frame" type="video/mp4"></video>

      <BlockHeader
        title="校庆活动"
        title_english="Activities"
        to-path="/activity"
      ></BlockHeader>

      <div style="margin: 0 4% 0 0; overflow-y: overlay; height: 240px">
        <el-timeline>
          <el-timeline-item
            v-for="item in activities"
            center
            :timestamp="item['date']"
            placement="top"
          >
            <el-card>
              <h4>{{ item["title"] }}</h4>
              <p>{{ item["creator"] }}提交于{{ item["date"] }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

      <BlockHeader
        title="时光长廊"
        title_english="Gallery"
        to-path="/gallery"
      ></BlockHeader>
      <div class="flex f-col images">
        <el-carousel :interval="5000" type="card" height="160px" arrow="always">
          <el-carousel-item v-for="item in 6" :key="item" style="border: 2px solid black">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <h2 class="image-title">图书馆后的小树林</h2>
      </div>

      <BlockHeader title="交流论坛" title_english="Forum" to-path="/forum"></BlockHeader>
      <div class="flex f-col forum-container">
        <BlockSingleForum
         v-for="item in forums"
          :title="item['title']"
          :description="item['description']"
          :creator="item['creator']"
          :date="item['date']"
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

.frame {
  border: 2px solid royalblue;
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

.forum-container {
  border: 1px solid #777;
  height: 260px;
  overflow-y: auto;
  margin: 0 3% 0 3%;
}

.header {
  border-radius: 0 0 12px 12px;
  background-color: white;
  height: 48px;
  display: flex;
  z-index: 2;
  justify-content: space-between;
}
</style>
