<template>
    <div class="f-col">
      <NavMenu></NavMenu>
      <div
        style="
          display: flex;
          flex-direction: column;
          width: 100vw;
          align-items: center;
          margin-bottom: 4vh;
          margin-top: 4vh;
        "
      >
        <img src="@/assets/clock.svg" style="width: 48vw" />
        <h1 style="font-weight: bolder">在这里，福依旧</h1>
        <h1 style="font-weight: bolder">加入班级，找回记忆</h1>
      </div>
      <div class="icon-div">
        <el-input v-model="searchValue" placeholder="搜索" :prefix-icon="Search" clearable />
  
        <el-button icon @click="handleSearch">
          <Search style="height: 3vh; color: #bd4132" />
        </el-button>
      </div>
      <BaseBlockHeader title_english="Class" title="班级" :hide-more="true"></BaseBlockHeader>
      <div
        v-for="item in classList"
        style="display: flex; align-items: center; border: 1px solid gray; margin: 1vh 3vw 0 2vw"
      >
        <IconFzu class="fzu-forum-icon" />
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 2vw;
          "
        >
          <h2>{{ item }}</h2>
          <h3 style="font-family: 楷体; font-weight: bolder">计算机与大数据学院/软件学院</h3>
        </div>
      </div>
  
      <h1
        style="margin-top: 2vh; font-weight: bolder"
        v-if="classList ? classList?.length < 10 : true"
        class="nomore"
        >直接搜索查找你自己的班级</h1
      >
  
      <BaseTail></BaseTail>
    </div>
  </template>
  
  <script lang="ts" setup>
  import BaseBlockHeader from '@/components/BaseBlockHeader.vue'
  import BaseTail from '@/components/BaseTail.vue'
  import BlockSingleForum from '@/components/BlockSingleForum.vue'
  import IconFzu from '@/components/icons/IconFzu.vue'
  import NavMenu from '@/components/NavMenu.vue'
  import { getClassList, getClassListBySearch, getPersonalClassList } from '@/server/api'
  import { randomCNWord } from '@/tool'
  import { Search } from '@element-plus/icons-vue'
  import { ref, watch } from 'vue'
  const classList = ref()
  const userClassList = ref<String[] | null>()
  
  const searchValue = ref('')
  watch(searchValue, (newVal, oldVal) => {
    if (newVal.length < oldVal.length || newVal == '') {
      getClassList(0, 5).then((res) => {
        classList.value = res
      })
    }
  })
  getClassList(0, 5).then((res) => {
    classList.value = res
  })
  
  getPersonalClassList().then((res) => {
    userClassList.value = res
  })
  
  const handleSearch = () => {
    getClassListBySearch(searchValue.value).then((res) => {
      classList.value = res
    })
  }
  </script>
  
  <style scoped>
  .f-col {
    display: flex;
    flex-direction: column;
  }
  .icon-div {
    border: #777;
    margin: 0 3% 5% 3%;
    display: flex;
    justify-content: space-between;
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
  </style>
  