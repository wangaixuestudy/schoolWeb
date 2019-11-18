<template>
    <div class="left_one">
        <div class="title">
            图文导航
            <a class="more" href="#">>>更多</a>
        </div>
        <ul>
            <li v-for="(item,index) in imgGuideData.list" :key="item.id"
                v-show="isShow(index)">
                <a @click="goTo(item.article_id)"><img :src="`/api/${item.img}`" width="278px" height="180px" alt=""></a>
                <a @click="goTo(item.article_id)" class="intro" :title="item.title">{{item.title}}</a>
            </li>
        </ul>
        <div class="imgNumber" v-if="imgGuideData.list">
            <a v-for="(item,index) in imgGuideData.list.length" @click="changeCurrent(index)"
               :class="{bgColor: index == current}">{{item}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                current: 0,
                timer: '',
            }
        },
        props:['imgGuideData'],
        methods:{
            isShow(index){
                return index == this.current
            },
            setCurrent() {
                if(this.current == 5){
                    this.current = 0
                }else {
                    this.current++
                }

            },
            changeCurrent(index){
                this.current = index
            },
            goTo(article_id){
                this.$router.push({path:'/listPage',query:{cate_id:this.imgGuideData.cate_id,article_id}})
            }
        },
        mounted(){
            this.timer = setInterval(this.setCurrent,4000)
        }
    }
</script>

<style scoped>
    /*左边栏图文导航模块*/
    .left_one{
        height: 214px;
        margin-top: 8px;
        overflow: hidden;
        position: relative;
    }
    .left_one .title a{
        font-size: 12px;
    }
    .left_one ul{
        position: relative;
        padding-top: 8px;
    }
    .left_one ul li{
        position: absolute;
    }
    .intro{
        position: absolute;
        left: 0;
        top: 156px;
        width: 100%;
        height: 20px;
        line-height: 20px;
        background: #eee;
        font-size: 12px;
        font-weight: bold;
        color: black;
        text-align: center;
    }
    .intro:hover{
        color: red;
    }
    .left_one .imgNumber{
        position: absolute;
        bottom: 20px;
        right: 5px;
        font-size: 9pt;
    }
    .left_one .imgNumber a{
        display: inline-block;
        height: 16px;
        width: 16px;
        line-height: 16px;
        text-align: center;
        margin-right: 5px;
        background-color: #6C6D6E;
        border: 1px solid #fff;
        box-sizing: border-box;
        opacity: 0.7;
        color: white;
    }
    .bgColor{
        background: red !important;
    }
</style>