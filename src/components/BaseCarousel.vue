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
        <el-image style="height: 100%;" :src="carouselUrls[item-1]" fit="fill"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
const carouselUrls = ["https://fuever-1313037799.cos.ap-nanjing.myqcloud.com/1671155023136925901.jpg",
  "https://fuever-1313037799.cos.ap-nanjing.myqcloud.com/1671155522340950442.jpg",
  "https://fuever-1313037799.cos.ap-nanjing.myqcloud.com/1671155550052697954.jpg",
  "https://fuever-1313037799.cos.ap-nanjing.myqcloud.com/1671155577977827772.jpg"
]
</script>

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
