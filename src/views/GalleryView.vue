<script setup lang="ts">
import BaseBlockHeader from '@/components/BaseBlockHeader.vue';
import NavMenu from '@/components/NavMenu.vue';
import MapMarked from '@/components/MapMarked.vue';
import BaseTail from '@/components/BaseTail.vue';
import type { Gallery } from '@/server/models';
import { ref } from 'vue';
import { getGalleries } from '@/server/api';
const galleries = ref<Gallery[] | null>()
getGalleries().then(res => {
  galleries.value=res
})
</script>
<template>
  <div class="top">
    <NavMenu></NavMenu>
    <div>
      <!--轮播图-->
      <el-carousel>
        <el-carousel-item v-for="item in 4" :key="item">
          <h1 class="small justify-center" text="2xl">{{ item }}</h1>
        </el-carousel-item>
      </el-carousel>
    </div>
    <BaseBlockHeader title="时光长廊" title_english="Gallery" :hide-more="true"/>
    <MapMarked style="height:50vh;margin: 3vw;" :galleries="galleries" />
    <BaseTail/>
  </div>
</template>

<style scoped>

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
.top {
  display: flex;
  flex-direction: column;
}
</style>