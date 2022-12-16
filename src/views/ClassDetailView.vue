<template>
  <div class="f-col">
    <NavMenu></NavMenu>
    <h1 style="font-weight: bolder; align-self: flex-start; font-size: 2.2em; margin-left: 5vw">{{
      className
    }}</h1>
    <div
      style="
        display: flex;
        flex-direction: column;
        width: 100vw;
        align-items: center;
        margin-bottom: 4vh;
        border-top: 1px solid #999;
      "
    >
      <img src="@/assets/clock.svg" style="width: 48vw; margin-top: 2vh" />
      <h2 style="font-weight: bolder">回顾春秋，福大依旧</h2>
    </div>
    <BaseBlockHeader title="学生列表" title_english="Students" :hide-more="true"></BaseBlockHeader>
    <div style="display: flex; width: 90vw; flex-wrap: wrap">
      <el-tag v-for="i in studentList" style="margin: 1vw" size="large">{{ i }}</el-tag>
    </div>
    <el-button style="align-self: flex-end; margin: 6vw" :type="joinButtonType" @click="handleJoin">
      <h2>{{ joinButtonText }}</h2>
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import BaseBlockHeader from '@/components/BaseBlockHeader.vue'
import BaseTail from '@/components/BaseTail.vue'
import BlockSingleForum from '@/components/BlockSingleForum.vue'
import IconFzu from '@/components/icons/IconFzu.vue'
import NavMenu from '@/components/NavMenu.vue'
import {
  getPersonalClassList,
  getStudentList,
  postJoin
} from '@/server/api'
import { useLoginStateStore } from '@/stores/counter'
import { ElMessage } from 'element-plus'
import { join } from 'lodash'

import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const loginStateStore = useLoginStateStore()
const studentList = ref<any[]|null>()
const userClassList = ref<String[] | null>()
const route = useRoute()
const joined = ref(false)
const joinButtonType = computed(() => {
  if (!joined.value) {
    return `primary`
  } else {
    return `info`
  }
})
const joinButtonText = computed(() => {
  if (!joined.value) {
    return `加入该班级`
  } else {
    return `已加入该班级`
  }
})
const className = computed(() => {
  return route.params.name
})
const handleJoin = () => {
  if (!joined.value) {
      postJoin(route.params.name as string).then((res) => {
        console.log("postJoin",res);
      if (res == 409) {
        ElMessage.info('您加入的班级数到达上限！')
      } else {
          ElMessage.info('加入成功！')
          studentList.value?.push(loginStateStore.currentUser?.username)
        joined.value = !joined.value
      }
    })
  }

  
}
getPersonalClassList().then((res) => {
  userClassList.value = res
  if (res?.includes(route.params.name as string)) {
    joined.value = true
  }
})
getStudentList(route.params.name as string).then((res) => {
    console.log("stu list ->",res);
    studentList.value = res?.map((e) => {
    return e.name
  })
})
</script>

<style scoped>
.f-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pager {
  align-self: center;
  margin-top: 4%;
  margin-bottom: 2%;
}
.fzu-forum-icon {
  height: 20vw;
  width: 18vw;
  fill: currentColor;
  color: red;
}
.nomore {
  align-self: center;
  flex: 1;
  font-size: 1.4em;
}

.hr-dashed-fixed {
  border: 1px dashed #000;
}
</style>
