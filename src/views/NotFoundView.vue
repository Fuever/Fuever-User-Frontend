<script setup lang="ts">
import { ElButton, type ElCard } from 'element-plus'
import { Loading } from '@element-plus/icons-vue'
// TODO 为按钮设置刷新界面
</script>
<template>
  <div class="top">
    <div class="flex hint">
      <h1 class="text-hint">您的页面走丢了！</h1>
      <Loading width="50" color="darkred" />
    </div>
    <img src="@/assets/images/404.png" class="img" />
    <ElButton type="primary">
      <h2>重新尝试</h2>
      <el-icon>
        <Loading />
      </el-icon>
    </ElButton>
  </div>
</template>
<style scoped>
.top {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  align-items: center;
}
.flex {
  display: flex;
}

.hint {
  margin-top: 20vh;
  flex: 1;
  color: darkred;
}

.img {
  width: 80%;
}
</style>
