<!--
* @FileDescription: 页面尾部说明
* @Author: Gallon
* @Date: 2022/11/08
* @LastEditors: Gallon
* @LastEditTime: 2022/11/08 19:50
-->
<script setup lang="ts">
import IconFzu from "../components/icons/IconFzu.vue";
</script>
<template>
  <div class="flex f-col tail-container f-center">
      <div class="flex" style="margin-top: 4%">
        <IconFzu class="tail-fzu-icon" />
        <img src="@/assets/images/characters.png" class="tail-fzu-icon" />
      </div>
      <h4 class="white">计算机与大数据学院/软件学院</h4>
      <p class="white" style="font-size: 2px">
        College of Computer and Data Science/College of Software
      </p>
      <div class="flex" style="margin-top: 4%">
        <div class="flex f-col" style="flex: 1; margin: 0 0 0 6%">
          <div class="flex">
            <h4 class="white tail-contacts" style="width: 24%">学院地址:</h4>
            <h4 class="white tail-contacts" style="flex: 1">
              福州市闽侯县学园路2号福州大学计算机与大数据学院/软件学院
            </h4>
          </div>

          <div class="flex">
            <h4 class="white tail-contacts" style="width: 24%">联系电话:</h4>
            <h4 class="white tail-contacts" style="flex: 1">13578633241</h4>
          </div>
        </div>
        <img class="tail-qrcode" src="@/assets/images/qrcode.png" />
      </div>
    </div>
</template>

<style scoped>

.flex {
  display: flex;
}

.f-center {
  align-items: center;
}
.f-col {
  flex-direction: column;
}
.tail-container {
  background-color: #bd3124;
  margin-top: 16vh;
}

.tail-fzu-icon {
  fill: currentColor;
  color: white;
  height: 50px;
}

.white {
  color: white;
}

.tail-qrcode {
  height: 70px;
  margin: 0 8% 0 8%;
}

.tail-contacts {
  line-height: 200%;
}

</style>
