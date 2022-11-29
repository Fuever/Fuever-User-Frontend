<template>
  <div class="top">
    <NavMenu />
    <div class="flex f-col" style="overflow: hidden">
      <BaseCarousel></BaseCarousel>
      <BaseBlockHeader title="影像福大" title_english="Video" :hide-more="true"></BaseBlockHeader>
    </div>
    <div v-for="i in 4" class="v-container flex f-col">
      <p class="title">
        {{ titles[i - 1] }}
      </p>
      <hr />
      <video controls class="video" preload="none">
        <source :src="urls[i - 1]" type="video/mp4" />
      </video>
    </div>
    <BaseTail />
  </div>
</template>

<script setup lang="ts">
import BaseBlockHeader from '@/components/BaseBlockHeader.vue'
import NavMenu from '@/components/NavMenu.vue'
import BaseTail from '@/components/BaseTail.vue'
import BaseCarousel from '@/components/BaseCarousel.vue'
const titles = ['攀登者', '疫去春来', '立德树人，培根铸魂', '迈向世界的东南强校']
const urls = [
  'https://www.fzu.edu.cn/__local/3/2D/CF/769AA58D13176CBE29C2C1D6DD1_706B817F_B5115C1.mp4',
  'https://news.fzu.edu.cn/__local/6/3D/EF/C2A4B68E681360EA48AB4ABD0FF_B00AF9BA_C724CC8.mp4',
  'https://news.fzu.edu.cn/__local/B/0A/06/AEF04518D08BD9061678327388E_E35E3071_21ED6B9B.mp4',
  'https://news.fzu.edu.cn/__local/3/C8/2A/DA1CB0B1964C71ACB86F17DDD8B_D3FFFEC6_1F47FE97.mp4'
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
.title {
  font-size: 2em;
  font-weight: bold;
}
.f-col {
  flex-direction: column;
}

.v-container {
  width: 92vw;
  align-self: center;
  margin-bottom: 4%;
}

hr {
  border: none;
  border-top: 3px solid darkred;
  color: darkred;
  overflow: visible;
  text-align: center;
  height: 6px;
  margin-bottom: 2%;
}
</style>
