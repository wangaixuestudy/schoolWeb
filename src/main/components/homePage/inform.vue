<template>
    <div class="myContent fr">
        <div class="title">
            通知公告
            <a class="more" href="#">>>更多</a>
        </div>
        <div class="notice">
            <ul class="list" :style="scrollStyle" @mouseover="clearTimer" @mouseout="createTimer">
                <li class="list_item" v-for="(item,index) in inform.list" :key="item.id">
                    <a @click="goTo(item.article_id)"><p>{{item.title}}</p></a>
                    <span>{{item.date}}</span>
                </li>
                <li class="list_item" v-for="(item,index) in inform.list" :key="item.id">
                    <a @click="goTo(item.article_id)"><p>{{item.title}}</p></a>
                    <span>{{item.date}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                timer:'',
                distance:0,
            }
        },
        props:['inform'],
        methods:{
            changeDistance(){
                if(this.distance < -250){
                    this.distance = 0
                }else {
                    this.distance --
                }
            },
            clearTimer(){
                clearInterval(this.timer)
            },
            createTimer(){
                this.timer = setInterval(this.changeDistance,200)
            },
            goTo(article_id){
                this.$router.push({path:'/listPage',query:{cate_id:this.inform.cate_id,article_id}})
            }
        },
        computed:{
            scrollStyle:function () {
                return {
                    transform:`translate3d(0, ${this.distance}px, 0)`
                }
            }
        },
        mounted() {
            this.timer = setInterval(this.changeDistance,200)
        }
    }
</script>

<style type="text/css">
    .notice {
        height: 250px;
        overflow: hidden;
    }
    .notice p{
        display: inline-block;
        width: 10em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .notice li{
        background: url("../../common/img/point.gif") -8px 0 no-repeat;
        padding-left: 10px;
        line-height: 40px;
        position: relative;
    }
    .notice span{
        font-size: 12px;
        position: absolute;
        right: 0;
    }
</style>