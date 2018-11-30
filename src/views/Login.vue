<template>
    <div class="login-container">
        <div class="login-bg" :class="[bgnth]"></div>
        <el-form class="login-form" status-icon
         ref="loginForm" 
        :rules="rules" 
        :model="loginForm" >
            <div class="form-bg"></div>
            <p class="title"><i class="logo"></i><span>大华视频物联能力开放平台后台管理</span></p>
            <el-form-item prop="name">
                <el-input v-model="loginForm.name"><i slot="prefix" class="iconfont icon-zhanghu"></i></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input @keyup.enter.native="submitForm('loginForm')" v-model="loginForm.password"><i slot="prefix" class="iconfont icon-mima"></i></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="submit-btn" type="primary" @keyup.enter.native="submitForm('loginForm')" @click="submitForm('loginForm')">登录</el-button>
                <!-- <el-button type="primary" @click="resetForm('loginForm')">SUBMIT</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'Vuex'
export default {
    name: 'login',
    data () {
        return {
            loginForm: {
                name: '',
                password: ''
            },
            rules: {
                name: [
                    { required: true, message: 'username required', trigger: 'blur' },
                    { min: 3, max: 16, message: 'limit in 3-16', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'password required', trigger: 'blur' },
                    { min: 3, max: 16, message: 'limit in 3-16', trigger: 'blur' }
                ]
            },
            bgnth: 'bg-nth0',
            bgindex: 0
        }
    },
    methods: {
        ...mapActions({
            login: 'login/login'
        }),
        submitForm (formName) {
            let _this = this;
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    _this.toLogin();
                } else {
                    //console.log("invalid!")
                    return false;
                }
            })
        },
        resetForm (formName) {
            this.$refs[formName].resetFields()
        },
        toLogin () {
            let params = {
                url: '/loginCheck',
                data: {
                    "userName": this.loginForm.name,
                    "passWord": this.loginForm.password
                }
            }
            this.$store.dispatch('login', params).then(() => {
                this.$router.push('/demand/problem');
            }).catch(e => {

            })
        }
    },
    mounted () {
        setInterval( () => {
            this.bgindex ++;
            if(this.bgindex == 3) this.bgindex = 0;
            this.bgnth = 'bg-nth' + this.bgindex
        },4000)
    }
}
</script>
<style lang="less">
.login-container {
    .el-input {
        input {
            padding-left: 40px;
        }
    }
}
</style>

<style lang="less" scoped>
.login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    .login-form {
        position: absolute;
        width: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px 50px 30px 50px;
        .iconfont {
            font-size: 18px;
            color: #aaa;
            padding-left: 7px;
        }
        .form-bg {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-color: #fff;
            border-radius: 5px;
            opacity: .75;
            z-index: -1;
        }
        .title {
            color: #333;
            font-size: 22px;
            i {
                display: inline-block;
                width: 38px;
                height: 38px;
                vertical-align: middle;
                background-image: url('../assets/img/logo.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: 36px 36px;
            }
        }
    }
    .submit-btn {
        width: 100%;
    }
    .login-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0px 0px;
        transition: all 1000ms;
    }
}
.bg-nth0 {
    background-image: url('../assets/img/bg0.jpg')
}
.bg-nth1 {
    background-image: url('../assets/img/bg1.jpg')
}
.bg-nth2 {
    background-image: url('../assets/img/bg2.jpg')
}
</style>