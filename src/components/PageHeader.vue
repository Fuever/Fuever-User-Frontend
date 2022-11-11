<template lang="">
  <div class="header"> 
    <ArrowLeftBold class="back" /> 
    <Fold class="fold" />
  </div>
</template>
<script lang="ts"></script>
<style lang="">
.header {
  border-radius: 0 0 12px 12px;
  background-color: white;
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.back{
    height: 60%; top: 20%; left: 2%
}
.fold{
    height: 60%; top: 20%; right: 2%
}
</style>
