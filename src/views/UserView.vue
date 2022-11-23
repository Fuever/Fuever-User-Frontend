<!--
* @FileDescription: 个人主页
* @Author: Phoshowy
* @Date: 2022/11/22
* @LastEditors: 
* @LastEditTime: 2022/11/22 23:42
-->
<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import Avatar from '@/components/Avatar.vue'
import BlockHeader from '@/components/BaseBlockHeader.vue'
import type { Post } from '@/server/models'
import BaseTail from '@/components/BaseTail.vue'
import { useRouter } from 'vue-router'
import type { UserDetailed } from '@/server/models'
const avatars = ref<UserDetailed[] | null>()
const posts = ref<Post[] | null>()

const router = useRouter()
const toMore = (path: string) => {
  router.push({
    path: path
  })
}
</script>

<template>
  <div style="margin: 2% 36%; height: 6vh">
    <img src="src\assets\images\qrcode.png" class="ava1" /><!--头像绑定-->
  </div>
  <div class="form-1">
    <div style="height: 8vh; display: flex"></div>
    <div><h1 style="text-align: center">欢迎校友</h1></div>
    <img class="years" src="../assets/images/years.png" alt="" style="margin: 4% 0 4% 0" />

    <div class="iconbar">
      <div class="iconbar1" v-on:click="toMore('/')">
        <svg
          t="1669108787434"
          class="icon"
          viewBox="0 0 1170 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4719"
          width="56"
          height="56"
        >
          <path
            d="M1081.782857 503.954286L610.889143 33.645714a36.498286 36.498286 0 0 0-51.638857 0L88.502857 503.954286a73.142857 73.142857 0 0 0 51.638857 124.928h49.590857v335.725714a36.571429 36.571429 0 0 0 36.571429 36.571429H512v-256h128v256h303.908571a36.571429 36.571429 0 0 0 36.571429-36.571429v-335.725714h49.590857a73.216 73.216 0 0 0 51.638857-124.928z"
            fill="#bd3124"
            p-id="4720"
          ></path>
        </svg>

        <h2 style="text-align: center; color: #bd3124; font-weight: bolder">首页</h2>
      </div>

      <div class="iconbar1" v-on:click="toMore('/forum')">
        <svg
          t="1669117306190"
          class="icon"
          viewBox="0 0 1195 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5015"
          width="56"
          height="56"
        >
          <path
            d="M1152 44.032H846.933333c-65.450667 0-129.450667 18.773333-184.576 54.272L597.333333 139.946667l-65.109333-41.813334A340.309333 340.309333 0 0 0 347.733333 44.117333H42.666667a42.666667 42.666667 0 0 0-42.666667 42.666667V843.946667a42.666667 42.666667 0 0 0 42.666667 42.666666h305.066666c65.450667 0 129.450667 18.773333 184.490667 54.272l59.221333 38.058667a11.093333 11.093333 0 0 0 5.717334 1.706667 9.984 9.984 0 0 0 5.802666-1.706667l59.136-38.058667a341.845333 341.845333 0 0 1 184.832-54.272H1152a42.666667 42.666667 0 0 0 42.666667-42.666666V86.698667a42.666667 42.666667 0 0 0-42.666667-42.666667zM453.290667 567.296c0 5.546667-4.266667 10.069333-9.386667 10.069333H196.096c-5.12 0-9.386667-4.522667-9.386667-10.069333v-59.989333c0-5.461333 4.266667-9.984 9.386667-9.984H443.733333c5.12 0 9.386667 4.522667 9.386667 9.984v59.989333h0.256z m0-186.624c0 5.461333-4.266667 9.984-9.386667 9.984H196.096c-5.12 0-9.386667-4.522667-9.386667-9.984v-59.989333c0-5.461333 4.266667-9.984 9.386667-9.984H443.733333c5.12 0 9.386667 4.522667 9.386667 9.984v59.989333h0.256z m554.666666 186.624c0 5.546667-4.266667 10.069333-9.386666 10.069333H750.762667c-5.12 0-9.386667-4.522667-9.386667-10.069333v-59.989333c0-5.461333 4.266667-9.984 9.386667-9.984H998.4c5.12 0 9.386667 4.522667 9.386667 9.984v59.989333h0.170666z m0-186.624c0 5.461333-4.266667 9.984-9.386666 9.984H750.762667c-5.12 0-9.386667-4.522667-9.386667-9.984v-59.989333c0-5.461333 4.266667-9.984 9.386667-9.984H998.4c5.12 0 9.386667 4.522667 9.386667 9.984v59.989333h0.170666z"
            fill="#bd3124"
            p-id="5016"
          ></path>
        </svg>
        <h2 style="text-align: center; color: #bd3124; font-weight: bolder">交流区</h2>
      </div>

      <div class="iconbar1" v-on:click="toMore('/')"
        ><!--路径要改到完善信息-->
        <svg
          t="1669117392236"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5305"
          width="56"
          height="56"
        >
          <path
            d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0z m36.571429 758.857143a9.142857 9.142857 0 0 1-9.142858 9.142857h-54.857142a9.142857 9.142857 0 0 1-9.142858-9.142857v-310.857143c0-5.046857 4.096-9.142857 9.142858-9.142857h54.857142c5.046857 0 9.142857 4.096 9.142858 9.142857v310.857143zM512 365.714286a54.857143 54.857143 0 1 1 0-109.714286A54.857143 54.857143 0 0 1 512 365.714286z"
            fill="#bd3124"
            p-id="5306"
          ></path>
        </svg>
        <h2 style="text-align: center; color: #bd3124; font-weight: bolder">完善信息</h2>
      </div>

      <div class="iconbar1" v-on:click="toMore('/login')">
        <svg
          t="1669117208206"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4721"
          width="56"
          height="56"
        >
          <path
            d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0z m189.001143 706.56l-75.337143-0.365714L512 570.733714l-113.517714 135.314286-75.483429 0.365714a9.069714 9.069714 0 0 1-9.142857-9.142857c0-2.194286 0.731429-4.242286 2.194286-5.924571L464.603429 514.194286 315.977143 337.188571a9.142857 9.142857 0 0 1 6.948571-15.067428l75.556572 0.292571L512 457.801143l113.517714-135.314286 75.337143-0.292571c5.12 0 9.216 3.949714 9.216 9.142857a9.508571 9.508571 0 0 1-2.194286 5.851428l-148.48 177.078858L708.022857 691.419429a9.142857 9.142857 0 0 1-6.948571 15.067428z"
            fill="#bd3124"
            p-id="4722"
          ></path>
        </svg>
        <h2 style="text-align: center; color: #bd3124; font-weight: bolder">退出登录</h2>
      </div>
    </div>
    <!--校友推荐-->
    <BlockHeader title="校友推荐" title_english="Recommendation" :hideMore="true" />
    <div class="recommend">
      <div class="recommend1" v-for="i in avatars">
        <el-avatar :src="i.avatar" size="large" />
        <Avatar :grade="i.classID" :schoolmate="i.nickname" />
      </div>
    </div>
    <!--热聊话题-->
    <BlockHeader title="热聊话题" title_english="Forum" to-path="/forum"></BlockHeader>
    <div class="flex f-col forum-container">
      <BlockSingleForum
        v-for="item in posts"
        :title="item['title']"
        :description="item['description']"
        :creator="item['authorID'].toString()"
        :date="item['updatedTime']"
      />
    </div>
  </div>
  <BaseTail />
</template>
<style>
.form-1 {
  height: 90vh;

  display: flex;
  flex-direction: column;

  box-shadow: 1px 2px 10px #000;
  border-radius: 20px;
  margin-left: 3%;
  margin-right: 3%;
  /*z-index: -1;*/
}
.ava1 {
  border-radius: 60px;
  width: 120px;
  height: 120px;

  display: flex;
  position: absolute;
  /*z-index: 3;*/
}
.iconbar {
  border: 3px solid rgb(218, 218, 218);
  border-radius: 20px;
  margin: 1% 3% 5% 3%;
  height: 10vh;
  display: flex;
  flex-direction: row;
}
.iconbar1 {
  width: 60px;
  height: 9vh;
  display: flex;
  flex-direction: column;
  margin: 1% auto 5%;
}
.recommend {
  border: 3px solid rgb(218, 218, 218);
  border-radius: 20px;
  margin: 1% 3% 5% 3%;
  height: 14vh;
  display: flex;
  flex-direction: row;
}
.recommend1 {
  width: 60px;
  height: 9vh;
  display: flex;
  flex-direction: column;
  margin: 1% auto 5%;
}
.recommend2 {
  display: flex;
  flex-direction: column;
  height: 3vh;
}
</style>
