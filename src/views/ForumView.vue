<!--
* @FileDescription: 交流区
* @Author: Phoshowy
* @Date: 2022/11/20
* @LastEditors: Gallon
* @LastEditTime: 2022/11/21 12:47
-->
<script setup lang="ts">
import BlockHeader from '@/components/BaseBlockHeader.vue'
import BlockSingleForum from '@/components/BlockSingleForum.vue'
import BaseTail from '@/components/BaseTail.vue'
import NavMenu from '@/components/NavMenu.vue'
import BaseCarousel from '@/components/BaseCarousel.vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getBlocks, getPosts } from '@/server/api'
import type { Block, Post } from '@/server/models'
import { timestamp2date } from '@/tool'
import type { ElDropdownInjectionContext } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
const posts = ref<Post[] | null>()
const router = useRouter()
const displayMode = ref('location')
const currentPage = ref(1)
const blocks = ref<Block[] | null>()
getBlocks(0, 1000).then((res) => {
  blocks.value = res
})
getPosts(0, 10).then((res) => {
  posts.value = res
})
const toPostDetail = (id: number) => {
  router.push({
    path: `/post/${id}`
  })
}
const toCreatePost = () => {
  router.push({
    path: `/post/create`
  })
}
const handleCurrentChange = (val: number) => {
  getPosts((val - 1) * 10, 10).then((res) => {
    posts.value = res
    console.log(res)
  })
}

const filterRadioValue = ref(0)
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <div class="flex f-col" style="overflow: auto">
      <NavMenu></NavMenu>
      <BaseCarousel></BaseCarousel>

      <BlockHeader title="交流论坛" title_english="Forums" :hide-more="true"></BlockHeader>
      <!--标题栏-->
      <!--图标-->
      <div class="icon-div">
        <el-popover placement="bottom" trigger="click">
          <template #reference>
            <el-button text>
              <Filter style="height: 4vh; color: #bd4132" />
              <h2 style="color: #bd4132; font-weight: bold">筛选主题</h2>
            </el-button>
          </template>
          
            <el-radio-group v-model="filterRadioValue" >
              <el-radio-button label="0" size="large">
                <h3 style="overflow: hidden;width: 20vw;overflow-x: hidden;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                  全部</h3>
                </el-radio-button>
              <el-radio-button v-for="block in blocks" :label="block.id" size="large">
              <h3 style="overflow: hidden;width: 20vw;overflow-x: hidden;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                {{block.title}}</h3>
              </el-radio-button>
            </el-radio-group>
          
        </el-popover>
        <el-popover placement="bottom" trigger="click">
          <template #reference>
            <el-button>
              <Search style="height: 4vh; color: #bd4132" />
              <h2 style="color: #bd4132; font-weight: bold">筛选主题</h2>
            </el-button>
          </template>
        </el-popover>
      </div>

      <div class="flex f-col forum-container">
        <BlockSingleForum
          v-for="item in posts"
          :title="item['title']"
          :creator="item['authorName'].toString()"
          :date="timestamp2date(item['updatedTime'])"
          @click="toPostDetail(item.id)"
        />
      </div>
    </div>
    <h1 v-if="posts ? posts?.length < 10 : true" class="nomore">没有更多了哦~</h1>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="100"
      v-model:currentPage="currentPage"
      class="pager"
      @current-change="handleCurrentChange"
    />
    <el-button type="primary" class="createPost" @click="toCreatePost()"
      >创建属于您的帖子</el-button
    >
    <BaseTail />
  </div>
</template>

<style scoped>
.frame {
  border: 2px solid royalblue;
}
.nomore {
  align-self: center;
  flex: 1;
  font-size: 1.2em;
}

.f-center {
  align-items: center;
}
.f-col {
  flex-direction: column;
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
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  margin: 0 3% 0 3%;
  padding-bottom: 2%;
  flex: 1;
}

.icon-div {
  border: #777;
  margin: 0 3% 5% 3%;
  display: flex;
  justify-content: space-around;
}

.createPost {
  margin: 5vh 3vw 1vh 3vw;
  font-size: 1.8em;
  height: 5vh;
  border-radius: 2vw;
}

.pager {
  align-self: center;
  margin-top: 4%;
  margin-bottom: 2%;
}

.el-popover{
  width: 250px;
}
</style>
