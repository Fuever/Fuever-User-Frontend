<script setup lang="ts">

</script>

<template>
  <body class="flex column">
    <div style="height: 160px;" class="flex shuffle"></div>
    <div style="height: 280px;" class="flex column news">
      <div style="height: 100px;" class="flex title">新闻</div>
      <div style="flex:1" class="flex">
        <div class="flex news-date "  style="flex:1">日期</div>
        <div class="flex flex1"  style="flex:5">新闻简略信息</div>
      </div>
      <div style="flex:1" class="flex">
        <div class="flex news-date" style="flex:1">日期</div>
        <div class="flex flex1"  style="flex:5">新闻简略信息</div>
      </div>
    </div>
    
  </body>
</template>
<style scoped>

*{
  border: 1px solid black;
  
}
.flex{
  margin: 3px;
  padding: 3px;
  display:flex;
  
}

.flex1{
  flex:1
}
.column{
  flex-direction: column;

}

</style>