<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
</script>
<template>
  <div class="flex col">
    <NavMenu></NavMenu>
    <img src="../assets/working.svg" style="width: 40vw; align-self: center; margin-top: 20vh" />
    <div class="flex" style="align-self: center">
      <img src="../assets/clock.svg" style="width: 12vw; align-self: center" />
      <h1>该页面正在施工中！</h1>
    </div>
    <h1 style="align-self: center">去其他地方转转吧！</h1>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.col {
  flex-direction: column;
}
</style>
