<script setup lang="ts">
import BaseDateCircle from '../components/BaseDateCircle.vue'
</script>
<template>
  <div class="about">
    <h1>The page is for preview</h1>
    <BaseDateCircle day="０１" month="10月" :height="6"></BaseDateCircle>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
