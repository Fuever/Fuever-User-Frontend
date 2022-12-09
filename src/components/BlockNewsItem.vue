<!--
* @FileDescription: 新闻Item组件，使用时指定日、月、标题、文章缩略
* @Author: Gallon
* @Date: 2022/11/07
* @LastEditors: Gallon
* @LastEditTime: 2022/11/07 22:16
-->
<script setup lang="ts">
import BaseDateCircle from "../components/BaseDateCircle.vue";
const props = defineProps<{
  title: string;
  brief: string;
  day: string;
  month: string;
}>();
</script>
<template>
  <div class="flex">
    <BaseDateCircle class="news-date" :month="month" :day="day"></BaseDateCircle>
    <div class="flex f-col news-titles hidden">
      <h4 class="title">{{ title }}</h4>
      <h4>{{ brief.replace(/#/g,'') }}</h4>
    </div>
  </div>
</template>

<style scoped>
.title{
  font-weight: bold;
}
h4 {
    /* 多余内容省略号 */
    width: 90%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.flex {
  display: flex;
  max-width: 100%;
}

.hidden{
  overflow: hidden;
}

.f-col {
  flex-direction: column;
}
.years {
  margin: 1%;
}

.news-date {
  height: 50px;
  font-size: 0.8em;
  margin: 0 2% 0 2%;
}

.news-titles {
  margin: 1% 2% 0 2%;
}
</style>
