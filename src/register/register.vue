<template>
    <div id="register">
        <div class="container">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
                <div class="col-sm-10">
                    <input class="form-control" id="inputEmail3" placeholder="Email" v-model="username">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="password">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button class="btn btn-default btn-primary" @click="submit">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {register} from '../api/index'
    export default {
        name: "register",
        data(){
            return{
                username:'',
                password:'',
                method: 'POST'
            }
        },
        methods:{
            async submit(){
                var data = {
                    username: this.username,
                    password: this.password
                };
                var result = await register(data,this.method);
                if(result.code == 1){
                    window.location.href = '/login.html'
                    alert(result.msg)
                }
                if(result.code == 4){
                    alert(result.msg)
                }
                console.log(result)
            }
        },
        mounted() {

        }
    }
</script>

<style type="text/css">

</style>