<template>
    <div id="admin">
        <div v-if="userInfo.position == 'teacher'">
            <Header></Header>
            <Sidebar></Sidebar>
            <keep-alive>
                <router-view class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main tab-content"></router-view>
            </keep-alive>
        </div>
        <div v-else-if="userInfo == ''">
            <p>请先登录</p>
        </div>
        <div v-else>
            <p>对不起你无权访问该页面</p>
        </div>
    </div>

</template>

<script>
    import Header from './components/HeaderBar.vue'
    import Sidebar from './components/sidebar.vue'
    import {getUserInfo} from "../api";
    export default {
        data(){
          return{
              userInfo:''
          }
        },
        components:{
            Header,
            Sidebar
        },
        async mounted() {
            var result = await getUserInfo()
            if(result.code == 0){
                this.userInfo = result.user
            }
        }
    }
</script>

<style type="text/css">
    .tab-content{
        margin-top: 25px;
        margin-left: 100px;
    }
</style>