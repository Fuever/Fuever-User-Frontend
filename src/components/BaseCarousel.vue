<!--
* @FileDescription: 走马灯组件化
* @Author: Gallon
* @Date: 2022/11/22
* @LastEditors: Gallon
* @LastEditTime: 2022/11/22 14:12
-->
<template>
  <div class="top">
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image style="height: 100%;" :src="`@/../public/photo/photo${item}.jpg`" fit="fill"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.top {
  display: flex;
  flex-direction: column;
}

.flex {
  display: flex;
}

.f-col {
  flex-direction: column;
}
</style>
