<script setup lang="ts">
import BaseDateCircle from '../components/BaseDateCircle.vue'
</script>
<template>
  <div class="about">
    <h1>The page is for preview</h1>
    <BaseDateCircle day="01" month="10月" :height="8"></BaseDateCircle>
    <BaseDateCircle day="20" month="10月" :height="8"></BaseDateCircle>
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
