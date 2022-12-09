<script setup lang="ts">
import BaseTail from '@/components/BaseTail.vue'
import IconFzu from '@/components/icons/IconFzu.vue'
import NavMenu from '@/components/NavMenu.vue'
import { getBlocks, getPost, postComment } from '@/server/api'
import type { Post, Message, PostResponse } from '@/server/models'
import { useLoginStateStore } from '@/stores/counter'
import { timestamp2date } from '@/tool'
import { ElMessage } from 'element-plus'
import { ceil, floor, round } from 'lodash'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const currentPage = ref(1)
const totalPageCount = ref(0)
const postResponse = ref<PostResponse | null>()
const topMessage = ref<Message | null>()
const restMessage = ref<Message[] | null>()
const textarea = ref('')
getPost(+route.params.id, 0, 5).then((res) => {
  postResponse.value = res
  totalPageCount.value = ceil((res?.post.commentNumber as number) / 5)
  topMessage.value = res?.comment ? res.comment[0] : null
  restMessage.value = res?.comment ? res.comment.slice(1) : null
})
const displayDrawer = ref(false)
const onClickComment = () => {
  const loginStateStore = useLoginStateStore()
  if (loginStateStore.login) {
    displayDrawer.value = true
    if (postResponse.value?.post.isLock) {
      ElMessage.info('该帖子无法添加评论！')
    }
  } else {
    ElMessage.info('请先登录！')
  }
}
const submitComment = () => {
  postComment(textarea.value, +route.params.id).then(() => {
    ElMessage.info('发布成功！\n正在审核中')
    displayDrawer.value = false
  })
}
const handleCurrentChange = (val: number) => {
  getPost(+route.params.id, (val - 1) * 5, 5).then((res) => {
    postResponse.value = res
    if (val == 1) {
      topMessage.value = res?.comment ? res.comment[0] : null
      restMessage.value = res?.comment ? res.comment.slice(1) : null
    } else {
      topMessage.value = null
      restMessage.value = res?.comment ? res.comment : null
    }
  })
}
const toUserProfile = (id: number) => {
  // console.log('toUserProfile->', id)
  router.push({
    name: 'profile',
    params: {
      id: id
    }
  })
}
</script>
<template>
  <div class="f-col">
    <NavMenu></NavMenu>
    <h1 class="post-title">{{ postResponse?.post?.title }}</h1>
    <hr />
    <IconFzu style="height: 20vh; color: currentColor; fill: #bd3124"></IconFzu>
    <div
      v-if="topMessage"
      class="comment-msg-container"
      @click="toUserProfile(topMessage?.authorId as number)"
    >
      <div class="sticked"></div>
      <p class="sticked-text">楼主</p>
      <div class="f-col user-info">
        <el-avatar
          shape="square"
          class="avatar"
          fit="contain"
          :src="topMessage?.authorAvatar"
          @click="toUserProfile(topMessage?.authorId as number)"
        />
        <h3>{{ topMessage?.authorName }}</h3>
      </div>
      <div class="f-col text-container">
        <p class="content">{{ topMessage?.content }}</p>
        <p class="msg-time">
          {{ timestamp2date(topMessage?.createdTime as number) }}
        </p>
      </div>
    </div>
    <div
      v-for="msg in restMessage"
      class="comment-msg-container"
      @click="toUserProfile(topMessage?.authorId as number)"
    >
      <div class="f-col user-info">
        <el-avatar
          shape="square"
          class="avatar"
          fit="contain"
          :src="msg.authorAvatar"
          @click="toUserProfile(msg?.authorId as number)"
        />
        <h3>{{ msg?.authorName }}</h3>
      </div>
      <div class="f-col text-container">
        <p class="content">{{ msg?.content }}</p>
        <p class="msg-time">
          {{ timestamp2date(msg?.createdTime as number) }}
        </p>
      </div>
    </div>
    <h1 v-if="postResponse ? postResponse?.comment.length < 5 : true" class="nomore"
      >没有更多了哦~</h1
    >
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="totalPageCount"
      v-model:currentPage="currentPage"
      class="pager"
      @current-change="handleCurrentChange"
    />
    <el-button type="primary" class="submit-comment" @click="onClickComment()">发表评论</el-button>
    <el-drawer v-model="displayDrawer" direction="btt" size="50%">
      <template #header>
        <h2>回复：</h2>
      </template>
      <template #default>
        <div>
          <el-input
            type="textarea"
            maxlength="300"
            show-word-limit
            v-model="textarea"
            :rows="8"
            placeholder="请输入您的回复内容"
          ></el-input>
        </div>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="displayDrawer = false">取消</el-button>
          <el-button type="primary" @click="submitComment">确认提交</el-button>
        </div>
      </template>
    </el-drawer>
    <BaseTail
      :style="{
        'margin-top': postResponse ? (postResponse.comment.length == 0 ? '28vh' : '22vh') : '28vh'
      }"
    ></BaseTail>
  </div>
</template>

<style scoped>
.frame {
  border: 2px solid blue;
}
.flex {
  display: flex;
}

.f-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-title {
  font-size: 2em;
  margin: 2% 0 0 4%;
  font-weight: bold;
  align-self: flex-start;
  width: 80vw;

  white-space: nowrap;
  /* 防止文字内容过多导致被撑开 */
  overflow: hidden;
  /* 溢出文字用省略号取代 */
  text-overflow: ellipsis;
}

.sticked {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 19vw solid #bd3142;
  border-right: 19vw solid transparent;
  z-index: 2;
}
.post-image {
  width: 92vw;
  height: 30vh;
}
.sticked-text {
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(-45deg);
  font-size: 5vw;
  margin: 1vw 0 0 1vw;
  z-index: 3;
}
hr {
  border: none;
  border-top: 3px solid darkred;
  color: darkred;
  overflow: visible;
  width: 95vw;
  height: 5px;
  margin-bottom: 2%;
}
.text-container {
  flex: 1;
  margin: 2vw;
  font-size: 1.2em;
  justify-content: space-between;
}

.comment-msg-container {
  border: 1px solid #555;
  width: 92vw;
  height: 14vh;
  border-radius: 2vw;
  margin-top: 2vh;
  display: flex;
}

.avatar {
  width: 15vw;
  height: 15vw;
}

.user-info {
  padding-left: 5vw;
  padding-top: 4vw;
  padding-right: 2vw;
  align-items: space-around;
  border-right: 1px solid #555;
}

.msg-time {
  align-self: flex-end;
}

.submit-comment {
  align-self: flex-end;
  margin: 2vh 4vw 0 0;
}

.content {
  align-self: flex-start;

  width: 50vw;
}

.pager {
  align-self: center;
  margin-top: 4%;
  margin-bottom: 2%;
}

.nomore {
  align-self: center;
  flex: 1;
  font-size: 1.2em;
}
</style>
