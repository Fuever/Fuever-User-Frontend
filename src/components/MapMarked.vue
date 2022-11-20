<!--
* @FileDescription: 地图组件
* @Author: Gallon
* @Date: 2022/11/16
* @LastEditors: Gallon
* @LastEditTime: 2022/11/16 09:11
-->
<!-- TODO 这里定位的是IconButton左上角而不是图标的位置 -->
<script lang="ts" setup>
import type { Anniversary } from '@/server/models'
const props = defineProps<{ activities?: Anniversary[] }>()
</script>
<template>
    <div style="overflow: scroll">
        <div class="canves" style="height: 100%; position: absolute">
            <img src="../../local/map.png" alt="" />
            <div
                v-for="item in props.activities"
                class="icon-container"
                :style="{ top: item['y'], left: item['x'] }"
            >
                <el-button link>
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
    width: 180px;
    font-family: '楷体', '楷体_GB2312';
    /* 文本不换行 */
    white-space: nowrap;
    /* 防止文字内容过多导致被撑开 */
    overflow: hidden;
    /* 溢出文字用省略号取代 */
    text-overflow: ellipsis;
}
</style>
