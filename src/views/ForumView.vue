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
import { getPosts } from '@/server/api'
import type { Post } from '@/server/models'
const posts = ref<Post[] | null>()
const displayMode = ref('location')
getPosts().then((res) => {
  posts.value = res
})
const filteredPosts = computed(() => {
  if (displayMode.value === 'theme') {
    return posts.value?.filter((item) => {
      console.log(item.basedOnTheme)
      return item.basedOnTheme
    })
  } else if (displayMode.value === 'location') {
    return posts.value?.filter((item) => {
      return !item.basedOnTheme
    })
  }
})

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
        <Filter class="icon-more" />
        <el-radio-group size="large" v-model="displayMode">
          <el-radio-button label="location">
            <h2>地点</h2>
          </el-radio-button>
          <el-radio-button label="theme">
            <h2>主题</h2>
          </el-radio-button>
        </el-radio-group>
        <Search class="icon-more" />
      </div>

      <div class="flex f-col forum-container">
        <BlockSingleForum
          v-for="item in filteredPosts"
          :title="item['title']"
          :description="item['description']"
          :creator="item['authorID'].toString()"
          :date="item['updatedTime']"
        />
      </div>
    </div>
    <BaseTail />
  </div>
</template>

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
.icon-more {
  width: 10%;
  height: 10%;
  color: #bd3124;
}
</style>
