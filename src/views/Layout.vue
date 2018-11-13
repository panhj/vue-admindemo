<template>
<div>
    <div class="navbar">
        <div class="logo">
            <i class="i-logo"></i>
            <span>大华视频物联能力开放平台</span>
        </div>
        <div class="user">
            <span class="name">Username</span>
            <span class="logout"></span>
        </div>
    </div>
    <div class="sidebar">
        <sidebar></sidebar>
    </div>
    <div class="container">
        
    </div>

    <transition name="fade">
        <router-view class=""></router-view>
    </transition>
</div>
</template>

<script>
import sidebar from '../components/sidebar'

export default {
    components: {
        sidebar,
    },
    data () {
        return {

        }
    },
    computed: {

    }
    
}
</script>

<style lang="less" scoped>
.navbar {
    position: relative;
    height: 60px;
    width: 100%;
    background-color: #5f6a75;
    z-index: 99;
    .logo {
        position: absolute;
        left: 0; top: 0;
        width: 350px;
        height: 100%;
        i {
            display: inline-block;
            position: absolute;
            left: 0;
            width: 60px;
            height: 60px;
            background: #888;
            
        }
        span {
            padding-left: 50px;
            font-size: 21px;
            color: #fff;
            line-height: 60px;
        }
    }
    .user {
        position:absolute;
        top: 0; right: 0px;
        height: 100%; 
        span {
            display: inline-block;
            line-height: 60px;
            font-size: 18px;
            color: #ccc;
        }
        .name {
            width: 150px;
            border-right: 1px solid #999;
        }
        .logout {
            width: 60px;
        }
    }
}
.sidebar {
    position: absolute;
    top: 0;
    float: left;
    width: 250px;
    height: 100%;
    padding-top: 60px;
    text-align: left;
}
.container {
    position: absolute;
    left: 250px; right: 0;
    background-color:#999;
}
</style>

