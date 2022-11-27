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
import { getBlocks, getPosts, getPostsFromBlock } from '@/server/api'
import type { Block, Post } from '@/server/models'
import { timestamp2date } from '@/tool'
import type { ElDropdownInjectionContext } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
const posts = ref<Post[] | null>()
const router = useRouter()
const currentPage = ref(1)
const blocks = ref<Block[] | null>()
const filterRadioValue = ref(0)
getBlocks(0, 1000).then((res) => {
  blocks.value = res
})
getPosts(0, 6).then((res) => {
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
  if (filterRadioValue.value == 0) {
    getPosts((val - 1) * 6, 6).then((res) => {
      posts.value = res
      console.log('all posts 6==>', res)
    })
  } else {
    getPostsFromBlock((val - 1) * 6, 6, filterRadioValue.value).then((res) => {
      posts.value = res 
      console.log('block posts 6==>', res)
    })
  }
}
const displayFilterDrawer = ref(false)
const handleFilter = () => {
  displayFilterDrawer.value = false
  handleCurrentChange(1)
}
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
        <el-button icon @click="displayFilterDrawer=!displayFilterDrawer">
          <Operation style="height: 3vh; color: #bd4132" />
          <h3 style="color: #bd4132; font-weight: bold">筛选主题</h3>
        </el-button>
        <el-input class="w-50 m-2" placeholder="搜索" :prefix-icon="Search" />
        <el-button icon>
          <Search style="height: 3vh; color: #bd4132" />
        </el-button>
      </div>
      <el-drawer size="60%" v-model="displayFilterDrawer" direction="ltr">
        <template #header>
          <h4>筛选主题</h4>
        </template>
        <template #default>
          <div style="display:flex;flex-direction: column;">
            <el-radio class="radio" :border="true" v-model="filterRadioValue" :label="0" size="large">
              <p class="radio-text">
                全部
              </p>
              
            </el-radio>
            <el-radio class="radio" :border="true" v-for="block in blocks" v-model="filterRadioValue" :label="block.id" size="large">
              <p class="radio-text">
                {{block.title}}
              </p>
              
            </el-radio>
          </div>
          <div style="margin-top:20vh;">
            <el-button type="primary" style="width:22vw" @click="handleFilter">确定</el-button>
            <el-button type="plain" style="width:22vw" @click="displayFilterDrawer=!displayFilterDrawer">取消</el-button>
          </div>
        </template>
      </el-drawer>
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
    <h1 v-if="posts ? posts?.length < 6 : true" class="nomore">没有更多了哦~</h1>
    <el-pagination
      background
      layout="prev,next"
      :page-count="3"
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
  justify-content: space-between;
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

.el-popover {
  width: 250px;
}
.radio{
  width: 50vw;
  
}

.radio-text{
  width: 40vw;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>
<style>
.el-button--info{
  margin: 0;
  padding: 0;
}
</style>