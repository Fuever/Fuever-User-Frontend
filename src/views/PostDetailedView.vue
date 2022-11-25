<template>
  <div class="f-col">
    <NavMenu></NavMenu>
    <h1 class="post-title">{{ post?.title }}</h1>
    <hr />
    <IconFzu style="height: 20vh; color: currentColor; fill: #bd3124"></IconFzu>
    <div class="sticked-msg-container">
      <div class="sticked"></div>
      <p class="sticked-text">楼主</p>
      <div class="f-col user-info">
        <el-avatar
          shape="square"
          class="avatar"
          fit="contain"
          src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
        />
        <h3>{{ topMessage?.author_name }}</h3>
      </div>
      <div class="f-col text-container">
        <p>{{ topMessage?.content }}</p>
        <p class="msg-time">
          {{ timestamp2date(topMessage?.created_time as number) }}
        </p>
      </div>
    </div>
    <div v-for="msg in restMessage" class="comment-msg-container">
      <div class="f-col user-info">
        <el-avatar
          shape="square"
          class="avatar"
          fit="contain"
          src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
        />
        <h3>{{ msg?.author_name }}</h3>
      </div>
      <div class="f-col text-container">
        <p>{{ msg?.content }}</p>
        <p class="msg-time">
          {{ timestamp2date(msg?.created_time as number) }}
        </p>
      </div>
    </div>
    <el-button type="primary" class="submit-comment" @click="onClickComment()">发表评论</el-button>
    <el-drawer v-model="displayDrawer" direction="btt" size="50%">
      <template #title>
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
    <BaseTail></BaseTail>
  </div>
</template>

<script setup lang="ts">
import BaseTail from '@/components/BaseTail.vue'
import IconFzu from '@/components/icons/IconFzu.vue'
import NavMenu from '@/components/NavMenu.vue'
import { getBlocks, getPost, postComment } from '@/server/api'
import type { Post, Message, BlockResponse } from '@/server/models'
import { useLoginStateStore } from '@/stores/counter'
import { timestamp2date } from '@/tool'
import type { Block } from '@babel/types'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const post = ref<Post | null>()
const topMessage = ref<Message | null>()
const restMessage = ref<Message[] | null>()
const textarea = ref('')
getPost(+route.params.id).then((res) => {
  post.value = res
  topMessage.value = res?.comments ? res.comments[0] : null
  restMessage.value = res?.comments ? res.comments.slice(1) : null
  // console.log("res===>",res);
  // console.log("post.value===>",post.value);
  // console.log("topMessage.value===>",topMessage.value);
  // console.log("restMessage.value===>", restMessage.value);
  // console.log("res?.comments===>", res?.comments);
})
const displayDrawer = ref(false)
const onClickComment = () => {
  const loginStateStore = useLoginStateStore()
  if (loginStateStore.login) {
    displayDrawer.value = true
  } else {
    ElMessage.info('请先登录！')
  }
}
const submitComment = () => {
  postComment(textarea.value, +route.params.id).then(() => {
    ElMessage.info('发布成功！\n正在审核中')
    displayDrawer.value=false
  })
}

</script>

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
  font-size: 6vw;
  margin: 1vw 0 0 1vw;
  z-index: 3;
}
hr {
  border: none;
  border-top: 3px solid darkred;
  color: darkred;
  overflow: visible;
  width: 96vw;
  height: 6px;
  margin-bottom: 2%;
}
.text-container {
  margin: 2vw;
  font-size: 1.2em;
  justify-content: space-between;
}
.sticked-msg-container {
  border: 1px solid red;
  width: 92vw;
  height: 16vh;
  border-radius: 2vw;
  margin-top: 2vh;
  display: flex;
}

.comment-msg-container {
  border: 1px solid #666;
  width: 92vw;
  height: 16vh;
  border-radius: 2vw;
  margin-top: 2vh;
  display: flex;
}

.avatar {
  width: 20vw;
  height: 20vw;
}

.user-info {
  padding-left: 6vw;
  padding-top: 4vw;
  padding-right: 2vw;
  align-items: space-around;
  border-right: 1px solid #666;
}

.msg-time {
  align-self: flex-end;
}

.submit-comment {
  align-self: flex-end;
  margin: 2vh 4vw 0 0;
}
</style>