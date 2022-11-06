<!--
* @FileDescription: 首页-新闻模块下日期组件，使用时需要设定style中的font-size属性
* @Author: Gallon
* @Date: 2022/11/04
* @LastEditors: Gallon
* @LastEditTime: 2022/11/04 21:55
-->
<script setup lang="ts">
const props = defineProps<{
    title: string,
    title_english: string;
  
}>();
</script>
<template>
  <div class="flex" style="align-items: end">
      <h1 class="title">{{title}}</h1>
      <h2 class="title-eng">{{title_english}}</h2>
      <el-button class="btn-more" type="primary" text>
        <h2 class="more-text">更多&nbsp;</h2>
        <el-icon size="12">
          <ArrowRightBold/>
        </el-icon>
      </el-button>
    </div>
    <img class="years" src="../assets/images/years.png" alt="" />
</template>

<style scoped>
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
  margin: 0 0 2% 4%;
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
</style>
