<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  
  display: flex;
  justify-content:space-around;
}

nav a.router-link-exact-active {
  color: darkred;
  font-weight: bolder;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0;
  color: gray;


}

nav a:first-of-type {
  border: 0;
}
</style>
