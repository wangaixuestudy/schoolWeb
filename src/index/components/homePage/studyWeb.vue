<template>
    <div class="left_two">
        <div class="title">
            <span :class="{bgColor: index == current}" v-for="(item,index) in webResource"
                  @mouseover="webShow(item.content,index)">
                {{item.name}}
            </span>
        </div>
        <ul>
            <li v-for="(item,index) in content">
                <a href="#" :title="item.title">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                current: 0,
                content: '',
                webResource:[
                    {
                        "name":"学习资源",
                        "content":[
                            {
                                "title":"中国大学生数学建模竞赛"
                            },
                            {
                                "title":"教师网课：经济数学"
                            }
                        ],
                    },
                    {
                        "name":"专题网站",
                        "content":[
                            {
                                "title":"三明学院实践教学综合管理平台"
                            },
                            {
                                "title":"三明学院程序设计OJ平台"
                            }
                        ],
                    },
                    {
                        "name": "常用网站",
                        "content":[
                            {
                                "title": "厦门大学信息科学与技术学院"
                            },
                            {
                                "title": "福州大学数学与计算机科学学院"
                            },
                            {
                                "title": "福建师范大学数学与信息学院"
                            },
                            {
                                "title": "北京大学信息科学技术学院"
                            },
                            {
                                "title": "三明学院"
                            }
                        ]
                    }],
            }
        },
        methods:{
            webShow(content,index){
                this.content = content
                this.current = index
            },
            initContent(){
                this.content = this.webResource[0].content
            }
        },
        mounted() {
            this.initContent()
        }
    }
</script>

<style scoped>
    /*左边栏中间模块*/
    .left_two{
        height: 342px;
        background: #dbecff;
        margin-top: 10px;
    }
    .left_two .title{
        padding-top: 0;
    }
    .left_two span{
        display: inline-block;
        width: 78px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-left: 0;
        float: left;
        border-radius: 5px;
        cursor: pointer;
    }
    .bgColor{
    background-color: #ff8911;
    }
    .left_two ul{
        margin-left: 18px;
        margin-top: 10px;
        font-size: 16px;
    }
    .left_two ul li{
        padding-bottom: 15px;
    }
</style>