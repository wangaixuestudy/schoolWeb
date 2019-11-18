<template>
<div>
    <div class="page-header text-center">
        <h2 class="text-primary"><em>文章 添加</em></h2>
    </div>
    <div class="container">
        <div class="form-group row">
            <div class="col-sm-6">
                <label for="inputIntro" class="control-label">文章标题:</label>
                <input id="inputIntro" class="form-control" v-model="title"
                       required placeholder="请输入文章标题"></input>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-12">
                <label>文章内容:</label>
                <Editor ref="editor" v-model="contents" @onClick="onClick">
                </Editor>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2 col-sm-offset-2">
                <button @click="submit" class="btn btn-success btn-lg btn-block glyphicon glyphicon-ok"></button>
            </div>
            <div class="col-sm-2">
                <button type="reset" class="btn btn-danger btn-lg btn-block glyphicon glyphicon-repeat"></button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Editor from '../components/tinymce.vue'
import {addArticle} from '../../api/index'
    export default {
        data(){
            return{
                title:'',
                contents:'',
                cate_id:this.$route.query.cate
            }
        },
        components:{
          Editor
        },
        methods: {
            onClick(){
            },
            async submit(){
                var data={
                    cate_id: this.cate_id,
                    title: this.title,
                    contents: this.contents
                }
                var result = await addArticle(data)
                if(result.code == 0){
                    alert(result.msg)
                }

            }
        },
        beforeDestroy: function(){
            this.Editor.remove();
        }
    }
</script>

<style type="text/css">
    .tinymce{
        position: relative;
    }
    label{
        display: block !important;
    }
</style>