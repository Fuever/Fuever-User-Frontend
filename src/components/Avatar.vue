<script setup lang="ts">
import Vue from 'vue'
import { useRouter } from 'vue-router'

export interface Props {
  grade: number | undefined
  schoolmate: string | undefined
}

const props = withDefaults(defineProps<Props>(), {})

</script>
<template>
  

    <div class="recommend2">
      <h2 style="text-align: center; font-weight: bolder">{{ grade }}</h2>
      <h2 style="text-align: center">{{ schoolmate }}</h2>
    </div>
</template>
<style>
.recommend1 {
  width: 60px;
  height: 9vh;
  display: flex;
  flex-direction: column;
  margin: 1% auto 5%;
}
.recommend2 {
  display: flex;
  flex-direction: column;
  height: 3vh;
}
</style>

<script lang="ts">

</script>
