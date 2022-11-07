<!--
* @FileDescription: 首页资讯栏下的Item
* @Author: Gallon
* @Date: 2022/11/07
* @LastEditors: Gallon
* @LastEditTime: 2022/11/07 22:22
-->
<script setup lang="ts">
    const props = defineProps<{
    day: string,
        month: string;
        title: string;
  
}>();
</script>
<template>
  <div class="flex f-col">
      <div class="flex hidden">
        <h1 class="info-month">{{month}}/</h1>
        <h2 class="info-day">{{day}}</h2>
        <h2 class="info-title">{{title}}</h2>
      </div>
    </div>
</template>

<style scoped>

.flex {
  display: flex;
}
.f-col {
  flex-direction: column;
}
.info-month{
  color: #BD3124;
  margin: 0 0 0 4%;
  font-weight: bold;
}

.info-day{
  color: #BD3124;
  margin: 2% 0 0 0 ;
  font-weight: bold;
}

.info-title{
  color: black;
  overflow: hidden;
  margin: 2% 0 0 2% ;

  /* 多余内容省略号 */
  width: 70%;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.hidden{
  overflow:hidden;
}


.years {
  margin: 0 0 4% 0;
}
</style>
