<!--
* @FileDescription: 首页论坛模块单个单元
* @Author: Gallon
* @Date: 2022/11/08
* @LastEditors: Gallon
* @LastEditTime: 2022/11/08 18:20
-->
<script setup lang="ts">
import IconFzu from '../components/icons/IconFzu.vue'
const props = defineProps<{
  title: string
  creator: string
  date: string
}>()
</script>
<template>
  <div class="flex single-forum-container light-gray-bk">
    <IconFzu class="fzu-forum-icon" />
    <div class="flex f-col" style="flex: 1">
      <h2 style="font-weight: bolder; margin-top: 6%;flex:1">
        {{ title }}
      </h2>
      <div class="flex">
        <User class="forum-icon"></User>
        <h3 class="forum-info author">{{ creator }}</h3>
        <AlarmClock class="forum-icon"></AlarmClock>
        <h3 class="forum-info date">{{ date }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>

.flex {
  display: flex;
  width: 100%;
}

.f-col {
  flex-direction: column;
  align-items: start;
}

.single-forum-container {
  border: 1px solid #777;
  height: 15vh;
  width: 90vw;
  margin: 2% 2% 0 2%;
}

.fzu-forum-icon {
  height: 100%;
  width: 32vw;
  fill: currentColor;
  color: red;
}

.forum-icon {
  height: 24px;
  margin-bottom: 4%;
}

.forum-info {
  font-size: 1.2em;
  color: #888;
  margin: 0 2% 0 2%;
}

.light-gray-bk {
  background-color: #f1f1f1;
}

.date {
  width: 40%;
  white-space: nowrap;
  /* 防止文字内容过多导致被撑开 */
  overflow: hidden;
  /* 溢出文字用省略号取代 */
  text-overflow: ellipsis;
}

.author {
  width: 20%;
  white-space: nowrap;
  /* 防止文字内容过多导致被撑开 */
  overflow: hidden;
  /* 溢出文字用省略号取代 */
  text-overflow: ellipsis;
}
</style>
