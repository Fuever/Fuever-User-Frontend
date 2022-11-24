<!--
* @FileDescription: 页头组件
* @Author: Phoshowy
* @Date: 2022/11/20
* @LastEditors: 
* @LastEditTime: 2022/11/20 22:46
*需完成路由配置后更改标签
-->
<script lang="ts">
export default {
    methods: {
        load() {},
        backHistory() {
            this.$router.go(-1) //返回上一层
        }
    }
}
</script>
<template>
    <div>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#bd3142"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            router="true"
        >
            <el-sub-menu index="1" expand-close-icon="<el-icon ><ArrowLeftBold /></el-icon>">
                <template #title style="display: flex">
                    <el-icon v-on:click="backHistory"><ArrowLeftBold /></el-icon>

                    <img
                        src="../assets/images/11.png"
                        style="width: 60px; height: 60%; display: flex; margin-left: 0"
                    />

                    <img
                        src="../assets/images/schoollogo.png"
                        style="width: 200px; height: 80%; display: flex; margin-left: 10px"
                    />
                </template>

                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/login">登录</el-menu-item>
                <el-menu-item index="/forum">交流区</el-menu-item>
                <!--增加新页面路由，以 index 作为 path 进行路由跳转，全部完成后顺序需调整-->
                <!--<el-menu-item index="/news">新闻资讯</el-menu-item>-->
                <!--<el-menu-item index="/">影像福大</el-menu-item>-->
                <!--<el-menu-item index="/">院庆活动</el-menu-item>-->
               <!--<el-menu-item index="/">时光长廊</el-menu-item>-->
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<style>
.el-sub-menu__title {
    height: 5vh;
}
.el-sub-menu .el-menu-item {
    height: 4vh;
}
</style>
<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
