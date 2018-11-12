<template>
<el-menu
:default-active="$route.path"
class="el-menu-vertical-demo"
background-color="#545c64"
text-color="#aaa"
active-text-color="#ffd04b"
:unique-opened="unique"
:router="isroute">
    <el-submenu index="/homeConfig">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>首页配置</span>
        </template>
        <el-menu-item index="/homeConfig/banner">Banner配置</el-menu-item>
    </el-submenu>
</el-menu>
</template>

<script>
    export default {
        data () {
            return {
                isroute: true,
                unique: true
            }
        }
    }
</script>