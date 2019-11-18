<template>
    <div id="register">
        <div class="container">
            <div class="content">
                <h3 class="text-center">注册</h3>
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
                    <div class="col-sm-10">
                        <input class="form-control" id="inputEmail3" placeholder="Email" v-model="username">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword1" class="col-sm-2 control-label">密码：</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword1" placeholder="Password1" v-model="password1">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword2" class="col-sm-2 control-label">确认密码：</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password2" v-model="password2">
                    </div>
                </div>
                <div class="form-group">
                    <label class="text-info move">
                        学生
                        <input type="radio"  value="student" v-model="position">
                    </label>
                    <label class="text-info move">
                        老师
                        <input type="radio"  value="teacher" v-model="position">
                    </label><br>
                    <div class="col-sm-offset-2 col-sm-10">
                        <button class="btn btn-default btn-primary" @click="submit">注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {register} from '../../../api'
    export default {
        name: "register",
        data(){
            return{
                username:'',
                password1:'',
                password2:'',
                position:'',
                method: 'POST'
            }
        },
        methods:{
            async submit(){
                if(this.username == ''){
                    alert('用户名为空')
                }else if(this.password1 == '' || this.password2 == ''){
                    alert('密码为空')
                }else if(this.password1 != this.password2){
                    alert('两次输入密码不一致')
                }else if(this.position == ''){
                    alert('请选择职位')
                }else{
                    var data = {
                        username: this.username,
                        password1: this.password1,
                        password2: this.password2,
                        position: this.position
                    };
                    var result = await register(data,this.method);
                }
                if(result.code == 0){
                    this.$router.push('/login')
                    alert(result.msg)
                }
                if(result.code == 1){
                    alert(result.msg)
                }
                console.log(result)
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
.move{
    margin-left: 20px;
}
h3{
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    margin: 20px 0;
}
.content{
    margin-top: 50px;
    height:500px;
    background-color: white;
    border: #4ec2e9 solid 1px;
}
</style>