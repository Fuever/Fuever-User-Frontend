<!--
* @FileDescription: 首页论坛模块单个单元
* @Author: Gallon
* @Date: 2022/11/08
* @LastEditors: Gallon
* @LastEditTime: 2022/11/08 18:20
-->
<script setup lang="ts">
import IconFzu from "../components/icons/IconFzu.vue";
const props = defineProps<{
  title: string;
  description: string;
  creator: string;
  date: string;
}>();
</script>
<template>
  <div class="flex single-forum-container light-gray-bk">
    <IconFzu class="fzu-forum-icon" />
    <div class="flex f-col" style="flex: 1">
      <h2 style="font-weight: bolder; margin-top: 6%">
        {{ title }}
      </h2>
      <h3 style="flex: 1">
        {{ description }}
      </h3>
      <div class="flex">
        <User class="forum-icon"></User>
        <h3 class="forum-info">{{ creator }}</h3>
        <AlarmClock class="forum-icon"></AlarmClock>
        <h3 class="forum-info">{{ date }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  max-width: 100%;
}

.f-col {
  flex-direction: column;
}

.single-forum-container {
  border: 1px solid #777;
  height: 120px;
  margin: 2% 2% 0 2%;
}

.fzu-forum-icon {
  height: 100%;
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
</style>
