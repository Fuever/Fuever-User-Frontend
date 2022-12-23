<script setup lang="ts">
import BaseBlockHeader from '@/components/BaseBlockHeader.vue'
import NavMenu from '@/components/NavMenu.vue'
import BaseTail from '@/components/BaseTail.vue'
import type { Gallery, Post, PostResponse } from '@/server/models'
import { computed, ref } from 'vue'
import { getGalleries, getGalleryDetail, getPost } from '@/server/api'
import { VideoPlay } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import BlockSingleForum from '@/components/BlockSingleForum.vue'
import { timestamp2date } from '@/tool'
const gallery = ref<Gallery | null>()
const msg = new SpeechSynthesisUtterance()
const fontSize = ref('小')
const speaking = ref(-1)
const content = ref('')
const route = useRoute()
const router = useRouter()
const post = ref<Post>()
getGalleryDetail(+route.params.id).then((result) => {
  console.log("Gallery",result);
  // https://stackoverflow.com/questions/14667713
  gallery.value = result
  content.value = result?.content as string
  msg.lang = 'zh-CN' // 使用的语言
  msg.pitch = 0.1 // 表示说话的音高
  msg.rate = 0.8 // 语速
  msg.text = gallery.value?.content as string // 要合成的文字内容
  msg.volume = 8 // 声音的音量
  speaking.value = 0
  getPost(result?.postId as number, 0, 1).then((res) => {
    post.value = res?.post
  })
})

const controlSpeech = () => {
  if (speechSynthesis.paused) {
    speechSynthesis.resume()
    speaking.value = 1
  } else if (speechSynthesis.speaking) {
    // 暂停时speaking为True
    speechSynthesis.pause()
    speaking.value = 0
  } else {
    speechSynthesis.speak(msg)
    speaking.value = 1
  }
}
speechSynthesis.cancel()
const postAuthorName = computed(() => {
  console.log(post.value)
  if (!post.value?.authorId) {
    return '加载中'
  }
  else if (post.value.authorId == -1) {
    return '已注销'
  }
  else {
    return post.value.authorName
  }
})
const toPostDetail = (id: number) => {
  
  router.push(
    {
      path:`/post/${id}`
    }
  )
}
const editorFontSize = computed(() => {
  if (fontSize.value == '大') {
    console.log("大");
    return '28px'
  } else if (fontSize.value == '中') {
    console.log("中");
    return '16px'
  } else {
    return '12px'
  }
})
</script>
<template>
  <div class="top">
    <NavMenu></NavMenu>
    <h1 style="font-weight: bolder; font-size: 4em; margin-left: 5vw">图书馆</h1>
    <hr class="hr-dashed-fixed" />
    <BaseBlockHeader title="时光长廊" title_english="Gallery" :hide-more="true" />
    <el-image :src="gallery?.cover" fit="scale-down" style="height: 30vh">
      <template #placeholder>
        <div style="display: flex; flex-direction: column">
          <h1>加载中……</h1>
        </div>
      </template>
    </el-image>
    <BaseBlockHeader title="岁月史书" title_english="History" :hide-more="true" />

    <div class="flex center" style="margin-left: 2%; margin-right: 2%">
      <div class="flex center" style="margin-left: 2vw">
        <h2>字体：</h2>
        <el-radio-group v-model="fontSize" size="large" :border="false">
          <el-radio-button label="大"><h4>大</h4></el-radio-button>
          <el-radio-button label="中"><h4>中</h4></el-radio-button>
          <el-radio-button label="小"><h4>小</h4></el-radio-button>
        </el-radio-group>
      </div>

      <el-button link type="plain" @click="controlSpeech()">
        <h3>语音介绍</h3>
        <el-icon style="height: 40px; width: 40px">
          <img
            v-if="speaking === -1"
            style="height: 30px; width: 30px"
            src="@/assets/loading.svg"
            alt="加载中"
          />
          <VideoPlay v-else-if="speaking === 0" style="height: 30px; width: 30px"></VideoPlay>
          <VideoPause v-else style="height: 30px; width: 30px"></VideoPause>
        </el-icon>
      </el-button>
    </div>

    <div
      class="text-top flex col"
      :class="{ small: fontSize == '小', middle: fontSize == '中', large: fontSize == '大' }"
    >
      <div
        class="flex center"
        style="width: 100%; justify-content: space-around"
        :class="{ col: fontSize !== '小' }"
      >
        <div>作者：{{ gallery?.['authorName'] }}</div>
        <div>发布时间：{{ new Date(gallery?.createTime as number).toLocaleDateString() }}</div>
      </div>

      <mavon-editor class="editor" defaultOpen="preview" :editable="false" :toolbarsFlag="false" :class="{ 'editor-small': fontSize == '小', 'editor-middle': fontSize == '中', 'editor-large': fontSize == '大' }"  placeholder="开始编辑" :subfield="false" :boxShadow="false" v-model="content"/>
    </div>

    <BaseBlockHeader title="热聊话题" title_english="Topic" :hide-more="true" />
    <BlockSingleForum
      style="align-self: center"
      :title="(post?.title as string)"
      :creator="postAuthorName"
      @click="toPostDetail(post?.id as number)"
      :date="post ? timestamp2date(post.updatedTime) : '未知'"
    />
    <BaseTail />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.font {
  align-items: flex-end;
}

.center {
  align-items: center;
  justify-content: space-between;
}
.font-btn {
  width: 12vw;
  padding: 0;
  margin: 0;
}

.text-top {
  border-radius: 5px;
  border: 1px solid grey;
  margin: 4%;
  height: 60vh;
  overflow-y: scroll;
}
.content {
  margin: 1% 2% 5% 2%;
  text-indent: 2em;
  white-space: pre-line;
  margin-top: 2%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.top {
  display: flex;
  flex-direction: column;
}

.hr-dashed-fixed {
  border: 0;
  padding-top: 1px;
  background: repeating-linear-gradient(
    to right,
    #a2a9b6 0px,
    #a2a9b6 4px,
    transparent 8px,
    transparent 10px
  );
}

.small {
  font-size: 1.4em;
}
.middle {
  font-size: 1.8em;
}

.large {
  font-size: 2.1em;
}

.editor-small {
  font-size: 1em;
}
.editor-middle {
  font-size: 1.2em;
}

.editor-large {
  font-size: 1.4em;
}

.col {
  flex-direction: column;
}
</style>
