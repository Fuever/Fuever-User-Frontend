<template lang="">
    <div style="width: 80vw; height: 80vh; overflow: scroll; margin-left: 10vw">
        <div class="canves" style="height: 100%; position: absolute">
            <img style="height: 100vh" src="../../local/map.png" alt="" />

            <div
                v-for="item in activities"
                class="icon-container"
                :style="{ top: item['y'], left: item['x'] }"
            >
                <el-button link>
                    <LocationFilled color="red" class="icon" />
                    <h1 class="activity_title" style="">
                        {{ item['title'] }}
                    </h1>
                </el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Activity } from "@/server/models"
</script>
<style lang=""></style>
