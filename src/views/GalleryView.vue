<script setup lang="ts">
import BaseBlockHeader from '@/components/BaseBlockHeader.vue'
import NavMenu from '@/components/NavMenu.vue'
import MapMarked from '@/components/MapMarked.vue'
import BaseTail from '@/components/BaseTail.vue'
import type { Gallery } from '@/server/models'
import { ref } from 'vue'
import { getGalleries } from '@/server/api'
import BaseCarousel from '@/components/BaseCarousel.vue'
const galleries = ref<Gallery[] | null>()
getGalleries().then((res) => {
  galleries.value = res
})
</script>
<template>
  <div class="top">
    <NavMenu></NavMenu>
    <BaseCarousel></BaseCarousel>
    <BaseBlockHeader title="时光长廊" title_english="Gallery" :hide-more="true" />
    <MapMarked style="height: 50vh; margin: 3vw" :galleries="galleries" />
    <ElButton style="margin: 3vw" link>
      <div style="display: flex; flex-direction: column; align-items: center">
        <a
          style="font-weight: bold; font-size: 1.8em; text-decoration: underline"
          href="https://www.expoon.com/9737/panorama"
        >
          前往全景地图链接
        </a>
        <div style="font-size: 1.6em;margin-top:2vh ;">（加载需要一点时间哦）</div>
      </div>
    </ElButton>
    <BaseTail />
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
