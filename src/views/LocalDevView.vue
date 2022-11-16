<!--
* @FileDescription: 新闻界面
* @Author: Luyti
* @Date: 2022/11/16
-->
<script setup lang="ts">
import BlockNewsItem from "../components/BlockNewsItem.vue";
import BlockHeader from "@/components/BaseBlockHeader.vue";
import BlockSingleForum from "@/components/BlockSingleForum.vue";
import BaseTail from "@/components/BaseTail.vue";
import {
  ElCard,
  ElCarousel,
  ElTimeline,
  ElTimelineItem,
  ElScrollbar,
} from "element-plus";
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
  <div style="display: flex; flex-direction: column">
    <div class="flex f-col" style="overflow: auto">
      <div>
        <el-carousel>
          <el-carousel-item v-for="item in 4" :key="item">
            <h1 class="small justify-center" text="2xl">{{ item }}</h1>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="flex header-container">
        <h1 string class="title">校园资讯</h1>
        <h2 class="title-eng">Infomation</h2>
      </div>
      <img class="years" src="../assets/images/years.png" alt="" />

      <el-scrollbar style="height: 400px">
        <BlockNewsItem
          v-for="newItem in news"
          :day="(newItem['date'] as string).substring(8,10)"
          :month="(newItem['date'] as string).substring(5,7)+'月'"
          :title="newItem['title']"
          :brief="newItem['content']"
        ></BlockNewsItem>
      </el-scrollbar>

      <BlockNewsItem
        v-for="newItem in news"
        :day="(newItem['date'] as string).substring(8,10)"
        :month="(newItem['date'] as string).substring(5,7)+'月'"
        :title="newItem['title']"
        :brief="newItem['content']"
      ></BlockNewsItem>

      <BaseTail />
    </div>
  </div>
</template>
<style scoped>
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

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
