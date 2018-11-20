<template>
<el-menu
:default-active="$route.path"
class="el-menu-vertical-demo"
background-color="#37414f"
text-color="#aab5c7"
active-text-color="#fff"
:unique-opened="unique"
:router="isroute">
    <el-submenu index="/homeConfig">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>首页配置</span>
        </template>
        <el-menu-item index="/homeConfig/banner">Banner配置</el-menu-item>
        <el-menu-item index="/homeConfig/platform">平台服务</el-menu-item>
        <el-menu-item index="/homeConfig/apply">行业应用</el-menu-item>
    </el-submenu>
    <el-submenu index="/demand">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>需求管理</span>
        </template>
        <el-menu-item index="/demand/account">账号申请</el-menu-item>
        <el-menu-item index="/demand/problem">问题反馈</el-menu-item>
    </el-submenu>
    <el-menu-item index="/product">
        <i class="el-icon-location"></i>
        <span>产品服务</span>
    </el-menu-item>
    <el-menu-item index="/message">
        <i class="el-icon-location"></i>
        <span>信息发布</span>
    </el-menu-item>
</el-menu>
</template>

<script>
    export default {
        data () {
            return {
                isroute: true,
                unique: false
            }
        }
    }
</script>

<style scoped>
.el-menu {
    border: none;
    height:100%;
}
.el-menu--inline .el-menu-item {
    background-color: #252b33 !important;
}
</style>
