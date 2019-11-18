<template>
    <div id="login">
        <h1 class="text-center text-white pt-5 title-size">信息工程学院</h1>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" >
                            <h3 class="text-center text-info top">登陆</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">用户名:</label><br>
                                <input type="text" v-model="formMess.username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">密码:</label><br>
                                <input type="password" v-model="formMess.password" id="password" class="form-control">
                            </div>
                            <div class="form-group select">
                                <label for="remember-me" class="text-info">
                                    <span>记住账号</span> 
                                    <span><input id="remember-me" type="checkbox" v-model="isChecked"></span>
                                </label>
                                <label class="text-info">
                                    学生
                                    <input type="radio"  value="student" v-model="formMess.position">
                                </label>
                                <label class="text-info">
                                    老师
                                    <input type="radio"  value="teacher" v-model="formMess.position">
                                </label><br>
                                <input type="button" class="btn btn-info btn-md" value="登陆" @click="login">
                            </div>
                            <div id="register-link" class="text-right register">
                                <router-link to="/register" class="text-info">在这里注册</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '../../../api'
    import {getUserInfo} from "../../../api";
    export default {
        name: "login",
        data(){
            return{
                formMess:{
                    username:'',
                    password:'',
                    position:'student'
                },
                isChecked:''
            }
        },
        methods:{
            async login(){
                if(this.isChecked == true){
                    localStorage.checked = "a"
                    localStorage.position = this.formMess.position
                    localStorage.username = this.formMess.username
                    localStorage.password = this.formMess.password
                }
                if(this.isChecked == false){
                    localStorage.clear()
                }
                if(this.formMess.username == ''){
                    alert('用户名为空')
                }else if(this.formMess.password == ''){
                    alert('密码为空')
                }else {
                    var method = "POST";
                    var result = await login(this.formMess,method)
                }
                if(result.code == 0){
                    sessionStorage.login = 'success'
                    this.$router.push('/homePage')
                }
                if(result.code == 1){
                    alert(result.msg)
                }
            },
            setChecked(){
                console.log(this.isChecked)
                if(localStorage.checked == 'a'){
                    this.isChecked = true
                    this.formMess.position = localStorage.position
                    this.formMess.username = localStorage.username
                    this.formMess.password = localStorage.password
                }
            },
            async autoLogin(){
                var result = await getUserInfo()
                //过期清除sessionStorage
                if(result.user){
                    sessionStorage.login = 'success'
                }else {
                    sessionStorage.clear()
                }
                //如果登录过一定时间内无需在次登录
                if(result.user && this.$route.path == '/login'){
                    this.$router.push('/homePage')
                }
            }
        },
        mounted() {
            this.autoLogin()
            this.setChecked(this.userInfo);
        },
        // watch: {
        //     userInfo: function (val) {
        //         console.log(val);   // 接收父组件的值
        //     }
        // },
    }
</script>

<style type="text/css">
    #login {
        width: 100vw;
        height: 100vh;
        background-color: #4ec2e9;
    }
    .container #login-row #login-column #login-box {
        margin-top: 120px;
        max-width: 600px;
        height: 320px;
        border: 1px solid #9C9C9C;
        background-color: #EAEAEA;
    }
    #login .container #login-row #login-column #login-box #login-form {
        padding: 20px;
    }
    #login .container #login-row #login-column #login-box #login-form #register-link {
        margin-top: -85px;
    }
    .top{
        height: 25px;
        line-height: 25px;
        font-size: 20px;
    }
    label{
        height: 20px;
    }
    .register{
        margin-top: -75px!important;
    }
    .title-size{
        font-size: 30px;
        font-weight: inherit;
    }
</style>