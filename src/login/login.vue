<template>
    <div id="login">
            <h3 class="text-center text-white pt-5">信息工程学院</h3>
            <div class="container">
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">
                            <form id="login-form" class="form" action="" >
                                <h3 class="text-center text-info">登陆</h3>
                                <div class="form-group">
                                    <label for="username" class="text-info">用户名:</label><br>
                                    <input type="text" v-model="formMess.username" id="username" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">密码:</label><br>
                                    <input type="password" v-model="formMess.password" id="password" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="remember-me" class="text-info">
                                        <span>记住账号</span> 
                                        <span><input id="remember-me" name="remember-me" type="checkbox" v-model="isChecked"></span>
                                    </label><br>
                                    <input type="button" class="btn btn-info btn-md" value="登陆" @click="login">
                                </div>
                                <div id="register-link" class="text-right">
                                    <a href="http://localhost:3002/register.html" class="text-info">在这里注册</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import {login} from '../api/index'
    export default {
        name: "login",
        data(){
            return{
                formMess:{
                    username:'',
                    password:''
                },
                isChecked:''
            }
        },
        methods:{
            async login(){
                if(this.isChecked == true){
                    localStorage.checked = "a"
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
                if(result.code == 1){
                    window.location.href = '/index.html'
                }
                if(result.code == 5 || result.code == 6){
                    alert(result.msg)
                }
            },
            setChecked(){
                console.log(this.isChecked)
                if(localStorage.checked == 'a'){
                    this.isChecked = true
                    this.formMess.username = localStorage.username
                    this.formMess.password = localStorage.password
                }
            }
        },
        mounted() {
            this.setChecked();
        }
    }
</script>

<style type="text/css">
    #login .container #login-row #login-column #login-box {
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
</style>