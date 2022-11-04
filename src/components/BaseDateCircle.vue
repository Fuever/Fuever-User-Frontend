<!--
* @FileDescription: 首页-新闻模块下日期组件，使用时需要设定style中的font-size属性
* @Author: Gallon
* @Date: 2022/11/04
* @LastEditors: Gallon
* @LastEditTime: 2022/11/04 21:55
-->
<script setup lang="ts">
import { computed } from 'vue';

const props=defineProps<{
  day: string;
  month: string;
}>();


</script>

<template>
  <div class="square-by-height">
    <div class="square-by-width">
      <div class="circle-dashed"></div>
      <div class="circle-bk"></div>
      <div class="up-semicircle-bk"></div>
      <h1 class="day frame">{{ day }}</h1>
      <h1 class="month frame">{{ month }}</h1>
    </div>
  </div>
  
</template>

<style scoped>
.square-by-height{
  /* 表示能在父容器中表示的最大正方形 */
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
}
.square-by-width{
  /* 表示能在父容器中表示的最大正方形 */
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
}
.circle-dashed {
  background-color: transparent;
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  position: absolute;
  border-radius: 50%;
  border: 2px dashed darkgray;
  z-index: 0;
}
.circle-bk {
  background-color: #E99D42;
  width: 90%;
  height: 90%;
  position: absolute;
  left: 5%;
  top: 5%;
  border-radius: 50%;
  z-index: 1;
}
.up-semicircle-bk{
  background-color: #BD3124;
  width: 90%;
  height: 45%;
  position: absolute;
  border-radius: 10000px 10000px 0 0;
  left: 5%;
  top: 5%;
  z-index: 2;
}
.month{
  width: 100%;
  
  /* 字体居中 */
  margin: 0 auto;
  text-align: center;

  font-size: 1em;

  position: absolute;
  bottom: 10%;

  color: azure;
  z-index:3;
}
.day{
  width: 100%;

  /* 字体居中 */
  margin: 0 auto;
  text-align: center;

  font-size: 1.6em;

  position: absolute;
  

  color: azure;
  z-index:3;
}
/* .frame {
  border: 2px solid red;
} */

</style>
