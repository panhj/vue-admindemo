<template>
<div>
    <div class="navbar">
        
    </div>
    <div class="sidebar">
        <sidebar></sidebar>
    </div>
    <transition name="fade">
        <router-view class="container"></router-view>
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
    height: 60px;
    width: 100%;
    background-color: #5f6a75;
}
.sidebar {
    position: absolute;
    float: left;
    width: 250px;
    text-align: left;
}
</style>

