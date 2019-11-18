<template>
    <div>
        <div class="container">
            <div class="page-header text-center">
                <h2 class="text-primary"><em>{{data.title}}</em></h2>
            </div>
            <div class="btn-group">
                <button class="btn btn-success glyphicon glyphicon-plus" data-toggle="modal"
                        @click="goTo">
                    添加文章
                </button>
                <button class="btn btn-danger glyphicon glyphicon-trash" id="multiDeleteBtn"
                        type="button" data-container="body" data-content="请至少选择一个"
                        data-toggle="popover" data-placement="right" data-trigger="manual">批量删除
                </button>
            </div>
            <div class="btn-group pull-right">
                <button class="btn btn-primary glyphicon glyphicon-th" data-toggle="dropdown" title="列">
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" id="dropdownMenu1">
                    <!--<li>
                        <label>
                            <input type="checkbox" checked="checked">ID
                        </label>
                    </li>-->
                </ul>
                <button class="btn btn-warning glyphicon glyphicon-refresh" id="refreshBtn" title="刷新"></button>
            </div>
            <div class="alert-wrap" :class="[{showAlert:isShow},{hiddenAlert:isHidden}]">
                <div class="alert alert-danger alert-dismissible in text-center"
                     id="deleteConfirm">
                    <button type="button" class="close">
                        <span class="glyphicon glyphicon-remove"></span>
                    </button>
                    <h4>确认删除？</h4>
                    <p>
                        <button type="button" class="btn btn-danger confirm" @click="selAll">确定</button>
                        <button type="button" class="btn btn-default" @click="hiddenAlert">取消</button>
                    </p>
                </div>
            </div>
            <div class="table-responsive" id="tableBlock">
                    <table class="table table-striped table-hover table-condensed">
                        <thead>
                        <tr>
                            <th></th>
                            <th><input type="checkbox" title="全选" id="selectAllCheckBox"/></th>
                            <th>ID</th>
                            <th>文章标题</th>
                            <th>日期</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in data.list" :key="item.id">
                            <td class="text-center">
                                <span class="detail glyphicon glyphicon-plus" title="详情"></span>
                            </td>
                            <td><input type="checkbox" class="single-checkbox" title="select"></td>
                            <td>{{index+1}}</td>
                            <td class="title">{{item.title}}</td>
                            <td>{{item.date}}</td>
                            <td>
                                <a class="btn btn-primary glyphicon glyphicon-pencil" data-toggle="modal"
                                   data-target="#editDiv" title="编辑"></a>
                                <a @click="showAlert(item.article_id)" class="btn btn-danger glyphicon glyphicon-trash btn-single-delete" title="删除"></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            <nav class="text-center">
                <ul class="pagination">
                    <li class="previous"><a href="#"><span>&laquo;</span></a></li>
                    <li class="active number"><a href="#">1</a></li>
                    <li class="number"><a href="#">2</a></li>
                    <li class="number"><a href="#">3</a></li>
                    <li class="number"><a href="#">4</a></li>
                    <li class="number"><a href="#">5</a></li>
                    <li class="number"><a href="#">6</a></li>
                    <li class="next"><a href="#"><span>&raquo;</span></a></li>
                </ul>
            </nav>
        </div>
        <div class="modal fade" id="editDiv">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span class="glyphicon glyphicon-remove"></span>
                        </button>
                        <h4 class="text-center">edit user</h4>
                    </div>
                    <form action="#" method="post">
                        <div class="modal-body form-group">
                            <label for="usernameEditInput">username</label>
                            <input type="text" id="usernameEditInput" name="username">
                        </div>
                        <div class="modal-body form-group">
                            <label for="passwordEditInput">password</label>
                            <input type="password" id="passwordEditInput" name="password">
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-dismiss="modal">
                                summit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getListDataByCateId} from '../../api/index'
    import {removeArticle} from '../../api/index'
    export default {
        data(){
            return{
                data:'',
                cate_id:0,
                isShow:false,
                isHidden:false,
                willDeleteArticleId:''
            }
        },
        methods:{
            async getCategoryData(cate_id){
                let result = await getListDataByCateId(cate_id)
                if(result.code == 0){
                     this.data = result.data
                }
            },
            goTo(){
                var url = location.href
                this.cate_id = url.slice(url.indexOf('=')+1)
                this.$router.push({path:'/addArticle',query:{cate:this.cate_id}})
            },
            showAlert(article_id){
                this.willDeleteArticleId = article_id
                this.isHidden = false
                this.isShow = true
            },
            hiddenAlert(){
                this.isShow = false
                this.isHidden = true
            },
            //删除文章
            async deleteArticle(){
                var cate_id = this.data.cate_id
                var article_id = this.willDeleteArticleId
                var result = await removeArticle(cate_id,article_id)
                if(result.code == 0){
                    alert(result.msg)
                }
            },
            //确认删除后执行所有点击事件
            selAll(){
                this.deleteArticle()
                this.hiddenAlert()
            }
        },
        mounted() {
            this.getCategoryData(0)
        },
        watch:{
            $route:function (to,from,next) {
                this.getCategoryData(this.$route.query.cate)
            },
        }
    }
</script>

<style type="text/css">
.title{
    width: 40%;
}
.alert-wrap{
    height: 0;
    overflow: hidden;
}

.showAlert{
    height: 95.2px;
    transition:height 0.5s linear;
}
.hiddenAlert{
    height: 0px;
    transition:height 0.5s linear;
}
</style>