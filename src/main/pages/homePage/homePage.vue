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
                        <li class="list_item" v-for="(item,index) in CollegeNews.list" :key="item.id">
                            <a class="list_item_title" @click="goTo(CollegeNews,item.article_id)"><p>{{item.title}}</p></a>
                            <span class="list_item_date">{{item.date}}</span>
                        </li>
                    </ul>
                </div>
                <inform :inform="informNotice"></inform>
            </div>
            <div class="right_two">
                <middle-tab :style="marginRight" :title="['教学管理','学生实践']" v-on:showContent= "current = $event">
                    <ul class="list" v-show="current == 0">
                        <li class="list_item" v-for="(item,index) in teachingManage.list" :key="item.id">
                            <a class="list_item_title" @click="goTo(teachingManage,item.article_id)"><p>{{item.title}}</p></a>
                            <span class="list_item_date">{{item.date}}</span>
                        </li>
                    </ul>
                    <ul class="list" v-show="current == 1">
                        <li class="list_item" v-for="(item,index) in studentPractice.list" :key="item.id">
                            <a class="list_item_title" @click="goTo(studentPractice,item.article_id)"><p>{{item.title}}</p></a>
                            <span class="list_item_date">{{item.date}}</span>
                        </li>
                    </ul>
                </middle-tab>
                <middle-tab :title="['党建工作','团学工作']" v-on:showContent= "current1 = $event">
                    <ul class="list" v-show="current1 == 0">
                        <li class="list_item" v-for="(item,index) in partyWork.list" :key="item.id">
                            <a class="list_item_title" @click="goTo(partyWork,item.article_id)"><p>{{item.title}}</p></a>
                            <span class="list_item_date">{{item.date}}</span>
                        </li>
                    </ul>
                    <ul class="list" v-show="current1 == 1">
                        <li class="list_item" v-for="(item,index) in groupWork.list" :key="item.id">
                            <a class="list_item_title" @click="goTo(groupWork,item.article_id)"><p>{{item.title}}</p></a>
                            <span class="list_item_date">{{item.date}}</span>
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
                        <li v-for="(item,index) in slideImgs.list" :key="item.id">
                            <a :title="item.title">
                                <img width="200px" height="130px" :src="`/api/${item.img}`">
                            </a>
                        </li>
                        <li v-for="(item,index) in slideImgs.list" :key="item.id">
                            <a :title="item.title">
                                <img width="200px" height="130px" :src="`/api/${item.img}`">
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
    import Search from '../../components/Search.vue'
    import imgGuide from '../../components/homePage/imgGuide.vue'
    import studyWeb from '../../components/homePage/studyWeb.vue'
    import middleTab from '../../components/homePage/middleTab.vue'
    import inform from '../../components/homePage/inform.vue'
    import {getAllCategoryData} from '../../../api'
    export default {
        data(){
          return{
              distance: 0,
              timer: '',
              current: 0,
              current1: 0,
              marginRight:{
                marginRight:'12px'
              },
              imgGuide:Object,
              slideImgs:Object,
              CollegeNews:Object,
              informNotice:Object,
              teachingManage:Object,
              studentPractice:Object,
              partyWork:Object,
              groupWork:Object
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
            },
            SelectDataByTitle(title,data){
                for (let i=0; i<data.length; i++) {
                    if(data[i].title == title){
                        return data[i]
                    }
                }
            },
            goTo(cateData,article_id){
                this.$router.push({path:'/listPage',query:{cate_id:cateData.cate_id,article_id}})
            }
        },
        async mounted(){
            this.timer = setInterval(this.slide,50)
            const result = await getAllCategoryData()
            if(result.code == 0){
                var data = result.data
                this.CollegeNews = this.SelectDataByTitle("学院动态",data)
                this.teachingManage = this.SelectDataByTitle("教学管理",data)
                this.studentPractice = this.SelectDataByTitle("学生实践",data)
                this.partyWork = this.SelectDataByTitle("党建工作",data)
                this.groupWork = this.SelectDataByTitle("团学工作",data)
                this.imgGuide = this.SelectDataByTitle("图文导航",data)
                this.informNotice = this.SelectDataByTitle("通知公告",data)
                this.slideImgs = this.SelectDataByTitle("新闻图片",data)
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
    .content_container p{
        display: inline-block;
        width: 15em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        background: url('../../common/img/qrcode.png');
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