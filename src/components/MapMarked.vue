<!--
* @FileDescription: 地图组件
* @Author: Gallon
* @Date: 2022/11/16
* @LastEditors: Gallon
* @LastEditTime: 2022/11/16 09:11
-->
<!-- TODO 这里定位的是IconButton左上角而不是图标的位置 -->
<!-- TODO 需要对这里的跳转按钮添加动画效果 -->
<script lang="ts" setup>
import type { Anniversary, Gallery } from '@/server/models'
import { useRouter } from 'vue-router'
const props = defineProps<{ anniversaries?: Anniversary[] | null; galleries?: Gallery[] | null }>()
const router = useRouter()
const toDetail = (id: number) => {
  router.push({
    path: `/gallery/detail/${id}`
  })
}
</script>
<template>
  <div style="overflow: scroll">
    <div class="canves" style="height: 100%; position: absolute">
      <img src="@/assets/images/map.png" alt="" />
      <div
        v-for="item in props.anniversaries"
        class="icon-container"
        :style="{ top: item['y'], left: item['x'] }"
      >
        <el-button class="btn" link>
          <LocationFilled color="red" class="icon" />
          <h1 class="activity_title" style="">
            {{ item['title'] }}
          </h1>
        </el-button>
      </div>

      <div
        v-for="item in props.galleries"
        class="icon-container"
        :style="{ top: item['y'], left: item['x'] }"
      >
        <el-button class="btn" link @click="toDetail(item.id)">
          <LocationFilled color="red" class="icon" />
          <h1 class="activity_title" style="">
            {{ item['title'] }}
          </h1>
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-container {
  position: absolute;
  z-index: 3;

  display: flex;
  flex-direction: column;
}

.icon {
  height: 40px;
  width: 40px;
}

.activity_title {
  color: red;
  font-size: 1.6em;
  font-weight: bolder;
  text-align: left;
  width: 180px;
  font-family: '楷体', '楷体_GB2312';
  /* 文本不换行 */
  white-space: nowrap;
  /* 防止文字内容过多导致被撑开 */
  overflow: hidden;
  /* 溢出文字用省略号取代 */
  text-overflow: ellipsis;
}
.btn:hover {
  border: 1px solid darkred;
}
</style>
