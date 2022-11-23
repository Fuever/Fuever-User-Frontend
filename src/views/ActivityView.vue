<template>
  <div class="top">
    <NavMenu />
    <div class="flex f-col" style="overflow: hidden">
      <BaseCarousel></BaseCarousel>
    </div>
    <BaseBlockHeader title="时间轴" title_english="Timeline" :hide-more="true"></BaseBlockHeader>

    <div
      class="timeline-container"
    >
      <el-timeline style="margin: 3%">
        <el-timeline-item
          v-for="item in anniversaries"
          center
          :timestamp="item['start']"
          placement="top"
        >
          <el-card>
            <h2>{{ item['title'] }}</h2>
            <h3>{{ item['adminID'] }}提交于{{ item['start'] }}</h3>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <BaseBlockHeader title="地图标注" title_english="Map" :hide-more="true"></BaseBlockHeader>
    <MapMarked :anniversaries="anniversaries" style="height: 50vh; margin: 3vw"></MapMarked>
    <BaseTail />
  </div>
</template>

<script setup lang="ts">
import BaseBlockHeader from '@/components/BaseBlockHeader.vue'
import NavMenu from '@/components/NavMenu.vue'
import BaseTail from '@/components/BaseTail.vue'
import BaseCarousel from '@/components/BaseCarousel.vue'
import { getAnniversaries } from '@/server/api'
import type { Anniversary } from '@/server/models'
import { ref } from 'vue'
import MapMarked from '@/components/MapMarked.vue'
const anniversaries = ref<Anniversary[] | null>()
getAnniversaries().then((res) => (anniversaries.value = res))
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

.timeline-container{
    margin: 0 2% 0 2%;
    overflow-y: overlay;
    height: 60vh;
    border-radius: 2%;
    border: 2px solid #bbb;
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
