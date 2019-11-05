<template>
<div id="homePage">
    <Search></Search>
    <div class="content_container w">
        <div class="left_container">
            <imgGuide :imgGuideData="imgGuide"></imgGuide>
            <studyWeb></studyWeb>
            <div class="left_three"></div>
        </div>
        <div class="right_container">
            <div class="right_one">
                <div class="myContent fl">
                    <div class="title">
                        学院动态
                        <a class="more" href="#">>>更多</a>
                    </div>
                    <ul class="list">
                        <li class="list_item" v-for="(item,index) in listData[0].list" :key="item.id">
                            <a class="list_item_title" >{{item.name}}</a>
                            <span class="list_item_date">2019-09-09</span>
                        </li>
                    </ul>
                </div>
                <inform :inform="listData[1]"></inform>
            </div>
            <div class="right_two">
                <middle-tab :style="marginRight" :title="['教学管理','学生实践']" v-on:showContent= "current = $event">
                    <ul class="list" v-show="current == 0">
                        <li class="list_item" v-for="(item,index) in listData[2].list" :key="item.id">
                            <a class="list_item_title" >{{item.name}}</a>
                            <span class="list_item_date">2019-09-09</span>
                        </li>
                    </ul>
                    <ul class="list" v-show="current == 1">
                        <li class="list_item" v-for="(item,index) in listData[3].list" :key="item.id">
                            <a class="list_item_title" >{{item.name}}</a>
                            <span class="list_item_date">2019-09-09</span>
                        </li>
                    </ul>
                </middle-tab>
                <middle-tab :title="['党建工作','团学工作']" v-on:showContent= "current1 = $event">
                    <ul class="list" v-show="current1 == 0">
                        <li class="list_item" v-for="(item,index) in listData[3].list" :key="item.id">
                            <a class="list_item_title" >{{item.name}}</a>
                            <span class="list_item_date">2019-09-09</span>
                        </li>
                    </ul>
                    <ul class="list" v-show="current1 == 1">
                        <li class="list_item" v-for="(item,index) in listData[4].list" :key="item.id">
                            <a class="list_item_title" >{{item.name}}</a>
                            <span class="list_item_date">2019-09-09</span>
                        </li>
                    </ul>
                </middle-tab>
            </div>
            <div class="right_three">
                <div class="title">
                    图片新闻
                    <a class="more">>>更多</a>
                </div>
                <div class="scrollArea">
                    <ul :style="scrollStyle" @mouseover="clearTimer" @mouseout="createTimer">
                        <li v-for="(item,index) in slideImgs" :key="item.id">
                            <a :title="item.title">
                                <img width="200px" height="130px" :src="item.img">
                            </a>
                        </li>
                        <li v-for="(item,index) in slideImgs" :key="item.id">
                            <a :title="item.title">
                                <img width="200px" height="130px" :src="item.img">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import Search from '../components/Search.vue'
    import imgGuide from '../components/homePage/imgGuide.vue'
    import studyWeb from '../components/homePage/studyWeb.vue'
    import middleTab from '../components/homePage/middleTab.vue'
    import inform from '../components/homePage/inform.vue'
    import {getHomePageData} from '../../api'
    export default {
        data(){
          return{
              imgGuide:"",
              distance: 0,
              timer: '',
              current: 0,
              current1: 0,
              marginRight:{
                marginRight:'12px'
              },
              listData:"",
              slideImgs:[
                  {
                      "title": "我校2016年“华悦杯”程序设计大赛圆满结束",
                      "img": require('../../common/img/imgNews/1.jpg')
                  },
                  {
                      "title": "我校举办2019年“易”口同声大赛",
                      "img": require('../../common/img/imgNews/2.jpg'),
                  },
                  {
                      "title": "三明学院信息工程学院“信之鸽”青年志愿服务队荣获第六届“三明青年五四奖章集体”",
                      "img": require('../../common/img/imgNews/3.jpg'),
                  },
                  {
                      "title": "喜讯：我院一项目获第三届福建省“物联网+”大学生创新创业大赛铜奖",
                      "img": require('../../common/img/imgNews/4.jpg'),
                  },
                  {
                      "title": "热烈祝贺我院林丽华老师获评“三明市优秀教师”称号",
                      "img": require('../../common/img/imgNews/5.jpg'),
                  },
                  {
                      "title": "庆“三八妇女节”学院举办女教师趣味活动",
                      "img": require('../../common/img/imgNews/6.jpg'),
                  }
              ]
          }
        },
        components:{
            Search,
            studyWeb,
            imgGuide,
            middleTab,
            inform
        },
        methods:{
            slide(){
                if(this.distance < -1308){
                    this.distance = 0
                }
                this.distance --
            },
            clearTimer(){
                clearInterval(this.timer)
            },
            createTimer(){
                this.timer = setInterval(this.slide,50)
            }
        },
        async mounted(){
            this.timer = setInterval(this.slide,50)
            const result = await getHomePageData()
            if(result.code == 1){
                this.imgGuide = result.data.imgGuide
                this.listData = result.data.listData
            }
        },
        computed:{
            scrollStyle(){
                return {
                    transform:`translate3d(${this.distance}px, 0, 0)`
                }
            }
        }
    }
</script>

<style scoped>
    .content_container{
        background: #FFFFFF;
        margin-top: 20px;
        font-size: 14px;
    }
    .content_container:after{
        content: '';
        display: block;
        clear: both;
    }
    .left_container{
        width: 278px;
        height: 850px;
        float: left;
    }
    /*左边栏二维码模块*/
    .left_three{
        height: 248px;
        margin-top: 18px;
        border: 1px solid #E0E0E0;
        background: url("../../common/img/qrcode.png");
    }
    /*右边模块*/
    .right_container{
        width: 812px;
        height: 850px;
        float: right;
    }
    /*右边第一模块*/
    .right_one{
        height: 290px;
        margin-top: 8px;
    }
    /*右边第二模块*/
    .right_two{
        height: 314px;
        margin-top: 12px;
    }
    .right_two .title{
        padding-top: 0px;
        background: none;
    }
    /*右边第三模块*/
    .right_three{
        height: 200px;
        margin-top: 12px;
        border: 1px solid #E0E0E0;
    }
    .scrollArea{
        width: 805px;
        height: 170px;
        padding-top: 18px;
        overflow: hidden;
    }
    .scrollArea ul{
        width: 3000px;
    }
    .scrollArea ul li{
        float: left;
        margin-right: 12px;
        padding: 2px 2px;
        border: 1px solid #999;
    }
</style>