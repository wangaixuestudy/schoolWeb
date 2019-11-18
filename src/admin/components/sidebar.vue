<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <div class="nav-sidebar">
                    <div class="nav-sidebar-head">
                        <ul class="nav">
                            <li>
                                <a href="#group1" data-toggle="collapse">
                                    <span class="glyphicon glyphicon-minus"></span>&nbsp;&nbsp;&nbsp;文章管理
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="group1" class="nav-sidebar-body collapse in">
                        <ul class="nav">
                            <li :class="{active: current == index}" v-for="(item,index) in Category" :key="index"
                            @click="addClass(index)">
                                <a @click="goTo(index)" data-toggle="tab">{{item}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-sidebar">
                    <div class="nav-sidebar-head">
                        <ul class="nav">
                            <li>
                                <a href="#group2" data-toggle="collapse">
                                    <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;&nbsp;用户管理
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="group2" class="nav-sidebar-body collapse">
                        <ul class="nav">
                            <li><a href="#aaa" data-toggle="tab">aaa</a></li>
                            <li><a href="#bbb" data-toggle="tab">bbb</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                current: 0,
                Category:['学院动态','通知公告','教学管理','学生实践','党建工作','团学工作','图文导航','新闻图片']
            }
        },
        methods:{
            addClass(index){
                this.current = index
            },
            goTo(index){
                this.$router.push({path:'/listPage',query:{cate: index}})
            }
        }
    }
</script>

<style type="text/css">

</style>