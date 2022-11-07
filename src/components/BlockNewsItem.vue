<!--
* @FileDescription: 首页-新闻模块下日期组件，使用时需要设定style中的font-size属性
* @Author: Gallon
* @Date: 2022/11/04
* @LastEditors: Gallon
* @LastEditTime: 2022/11/04 21:55
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
      <h1>{{ title }}</h1>
      <h2>{{ brief }}</h2>
    </div>
  </div>
</template>

<style scoped>
h1{

    font-size: 2em;
    font-weight: bold;

    /* 多余内容省略号 */
    width: 70%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

}
h2 {
    /* 多余内容省略号 */
    width: 90%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

    max-width: 100%;
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
  height: 100px;
  font-size: 1.8em;
  margin: 2% 2% 0 2%;
}

.news-titles {
  margin: 4% 2% 0 2%;
}
</style>
