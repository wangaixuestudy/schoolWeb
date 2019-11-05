<template>
    <div class="search_bar w">
        <p class="fl">信息工程学院欢迎您!</p>
        <form class="fr" action="">
            <input class="keyword" type="text" :value="keyword" @focus="noValue" @focusout="getValue">
            <input class="search" type="submit" value="搜索">
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                keyword: '请输入关键字'
            }
        },
        methods:{
            noValue(){
                this.keyword = ''
            },
            getValue(){
                this.keyword = '请输入关键字'
            }
        },
        // directives:function (el) {
        //
        // }
    }
</script>

<style scoped>
    .search_bar{
        height: 35px;
        background: white;
        position: absolute;
        top: 330px;
        left: calc((100% - 1100px )/2);
        z-index: 4;
    }
    .search_bar p{
        padding-left: 15px;
        padding-top: 8px;
        font-size: 17px;
    }
    .search_bar form{
        padding-right: 50px;
        padding-top: 8px;
    }
    .search_bar .keyword{
        width: 150px;
        height: 20px;
        box-sizing: border-box;
    }
    .search_bar .search{
        width: 58px;
        height: 22px;
    }
</style>