<!--
* @FileDescription: 交流区
* @Author: Phoshowy
* @Date: 2022/11/20
* @LastEditors: 
* @LastEditTime: 2022/11/20 22:47
-->
<script setup lang="ts">
import BlockHeader from '@/components/BaseBlockHeader.vue'
import BlockSingleForum from '@/components/BlockSingleForum.vue'
import BaseTail from '@/components/BaseTail.vue'
import NavMenu from '@/components/NavMenu.vue'
import { ElCarousel } from 'element-plus'
import TopicIconVue from '@/components/TopicIcon.vue'

import { ref } from 'vue'
import axios from 'axios'

const forums = ref([])
const loadForums = async () => {
    try {
        let { data } = await axios('http://localhost:3001/forums')
        forums.value = data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
loadForums()
</script>

<template>
    <div style="display: flex; flex-direction: column">
        <div class="flex f-col" style="overflow: auto">
            <NavMenu></NavMenu>
            <div>
                <!--轮播图-->
                <el-carousel>
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h1 class="small justify-center" text="2xl">{{ item }}</h1>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <BlockHeader title="交流论坛" title_english="Forums"></BlockHeader>
            <!--标题栏-->
            <!--图标-->
            <div class="icon-div">
                <Filter class="icon-more" />
                <TopicIconVue /><!--网页页面比例不合适-->
                <Search class="icon-more" />
            </div>

            <div
                class="infinite-list-wrapper forum-container"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled"
            >
                <BlockSingleForum
                    v-for="item in forums"
                    :title="item['title']"
                    :description="item['description']"
                    :creator="item['creator']"
                    :date="item['date']"
                />
            </div>
        </div>
        <div style="text-align: center">
            <el-button v-on:click="backHistory">取消</el-button>
        </div>
        <BaseTail /><!--底部信息栏-->
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {}
    },

    methods: {
        load() {},
        backHistory() {
            this.$router.go(-1) //返回上一层
        }
    }
}
</script>

<style scoped>
.frame {
    border: 2px solid royalblue;
}

.f-center {
    align-items: center;
}
.f-col {
    flex-direction: column;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.image-title {
    align-self: center;
    font-weight: bold;
}

.images {
    margin: 0 2% 0 2%;
}

.header {
    border-radius: 0 0 12px 12px;
    background-color: white;
    height: 48px;
    display: flex;
    z-index: 2;
    justify-content: space-between;
}
.flex {
    display: flex;
}

.forum-container {
    border: 1px solid #777;
    height: 360px;
    overflow-y: auto;
    margin: 0 3% 0 3%;
}

.icon-div {
    border: #777;
    margin: 0 3% 5% 3%;
    display: flex;
    flex-direction: row;
}
.icon-more {
    width: 10%;
    height: 10%;
    color: #bd3124;
}
</style>
