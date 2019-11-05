<template>
<div class="head">
    <header>
            <transition-group name="fade" tag="ul">
                <li v-show="headImg == index" v-for="(item,index) in headImgs" :key="index">
                    <img :src="`/api/${item.img}`" width="100%" height="354px">
                </li>
            </transition-group>
    </header>
    <div id="head_nav">
        <ul class="nav_wrap fl">
            <li class="nav_item fl" v-for="(item,index) in headNav"
                @mouseover="visible(index)"
                @mouseout="hidden">
                <a :title="item.title">{{item.title}}</a>
                <ul class="list_nav" v-show="isVisible && index == current && item.list">
                    <li v-for="(value) in item.list"><a href="#">{{value}}</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    import {getHeadData} from '../../api'
    export default {
        data(){
            return{
                isVisible : false,
                current: 0,
                headImg: 0,
                timer: 0,
                headNav:[],
                headImgs:[]
            }
        },
        methods:{
            visible(index) {
                this.current = index
                this.isVisible = true
            },
            hidden(){
                this.current = 0
                this.isVisible = false
            },
            showHeadImg() {
                if (this.headImg < this.headImgs.length - 1) {
                    this.headImg += 1
                } else {
                    this.headImg = 0
                }
            }
        },
        async mounted() {
            this.timer = setInterval(this.showHeadImg,5000)
            const result = await getHeadData()
            if(result.code == 1){
                this.headImgs = result.data.headImgs
                this.headNav = result.data.headNav
            }
        },
    }
</script>

<style scoped>
    .head{
        width: 100%;
    }
    header {
        width: 100%;
        height: 354px;
        position: relative;
    }
    header li {
        position: absolute;
    }
    #head_nav {
        width: 1100px;
        height: 39px;
        line-height: 39px;
        background: url("../../common/img/nav_bg.gif") repeat-x 0px -9px;
        position: absolute;
        top: 290px;
        left: 50%;
        margin-left: -550px;
    }
    .nav_wrap{
        padding-left: 40px;
    }
    .nav_wrap a{
        font-size: 16px;
        color: white;
        text-decoration: none;
    }
    .nav_wrap .nav_item {
        padding-right: 35px;
    }
    .nav_item:nth-last-child(1){
        padding-right: 0;
    }
    .nav_wrap .nav_item .list_nav{
        position: absolute;
        border: 1px solid #ccc;
        border-top: none;
        margin-left: -10px;
        z-index: 1000;
    }
    .nav_item .list_nav li{
        height: 32px;
        line-height: 32px;
        padding-left: 10px;
        padding-right: 10px;
        background: linear-gradient(#4ec2e9,#116da7);
        border-top: aliceblue 1px solid;
    }
    .nav_item .list_nav li:hover{
        background:#87ceeb;
    }
</style>