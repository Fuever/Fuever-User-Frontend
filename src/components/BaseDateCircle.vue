<script setup lang="ts">
import { computed } from 'vue';

const props=defineProps<{
  day: string;
  month: string;
  height: number;
}>();


</script>

<template>
  <div :style="{ height: height+'em', width: height+'em' }">
    <div class="circle-dashed"></div>
    <div class="circle-bk"></div>
    <div class="up-semicircle-bk"></div>
    <h2 class="day" :style="{fontSize:height/2.5+'em'}">{{ day }}</h2>
    <h1 class="month" :style="{fontSize:height/5+'em'}">{{ month }}</h1>
  </div>
</template>

<style scoped>
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
  left: 28%;
  bottom: 20%;
  position: absolute;
  color: azure;
  z-index:3;
}
.day{
  left: 28%;
  top: 0;
  position: absolute;
  color: azure;
  z-index:3;
}


</style>
