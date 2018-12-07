<template>
<div>
    <div class="navbar">
        <div class="logo">
            <i class="i-logo"></i>
            <span>大华视频物联能力开放平台</span>
        </div>
        <div class="user">
            <span class="name">Administrator</span>
            <a class="logout" href="#/login">登出</a>
        </div>
    </div>
    <div class="sidebar">
        <sidebar></sidebar>
    </div>
    <div class="container">
        <pageTags class="pageTags">
            <tag-item v-for="item in tags"
            :key=item.path
            :to=item.path
            :title=item.name
            @close="closetag"></tag-item>
        </pageTags>
        <breadcrumb class="breadcrumb"></breadcrumb>
        <transition name="fade">
            <router-view class="content"></router-view>
        </transition>
    </div>

</div>
</template>

<script>
import sidebar from '../components/sidebar'
import pageTags from '../components/pageTags/pageTags'
import tagItem from '../components/pageTags/tagItem'
import breadcrumb from '../components/breadcrumb'

export default {
    components: {
        sidebar,
        pageTags,
        'tag-item': tagItem,
        breadcrumb
    },
    data () {
        return {
            tags: [
                // {path: '/homeConfig', name: '首页配置'}
            ]
        }
    },
    computed: {

    },
    methods: {
        closetag: function (to) {
            let index = this.tagIndexOf(to);
            this.tags.splice(index, 1);
            if(index < 1) return;
            let prePath = this.tags[index-1].path;
            this.$router.push({path: prePath});
        },
        tagIndexOf: function (to) {
            for(let i = 0; i < this.tags.length; i++) {
                if(this.tags[i].path == to) return i;
            }
            return -1;
        }
    },
    watch: {
        '$route': function (newval) {
            let index = this.tagIndexOf(newval.path);
            if(index == -1) {
                this.tags.push({path: newval.path, name: newval.meta.title})
            }
        }
    },
    mounted () {
         this.tags.push({path: this.$route.path, name: this.$route.meta.title})
         console.log(this.$route)
    }
}
</script>

<style lang="less" scoped>
.navbar {
    position: relative;
    height: 60px;
    width: 100%;
    background-color: #424f61;
    z-index: 99;
    .logo {
        position: absolute;
        left: 10px; top: 0;
        width: 350px;
        height: 100%;
        i {
            display: inline-block;
            position: absolute;
            left: 0;
            width: 60px;
            height: 60px;
            background-image: url('../assets/img/logo.png');
            background-repeat: no-repeat;
            background-position: 9px 9px;
            background-size: 42px 42px;
        }
        span {
            padding-left: 30px;
            font-size: 21px;
            color: #fff;
            line-height: 60px;
        }
    }
    .user {
        position:absolute;
        top: 0; right: 0px;
        height: 100%; 
        span, a {
            display: inline-block;
            line-height: 60px;
            font-size: 18px;
            color: #ccc;
            text-decoration: none;
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
    .pageTags {
        width: 100%;
    }
    .breadcrumb {
        position: relative;
        padding: 10px 25px;
        margin: 10px 0;
    }
    .content {
        position: absolute;
        left: 0; right: 0;
        padding: 0 25px;
    }
}
</style>

