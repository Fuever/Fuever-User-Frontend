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
        
        <h4 class="info-title">· {{title}}</h4>

        <h4 class="info-date">- {{month}}/{{day}}</h4>
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


.info-title{
  color: black;
  overflow: hidden;
  font-weight: bold;
  flex:1;
  margin: 1% 0 0 4%;

  /* 多余内容省略号 */
  width: 70%;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.hidden{
  overflow:hidden;
}



.info-date{
  color: #999;
  margin: 1% 4% 0 2%;
}
</style>
