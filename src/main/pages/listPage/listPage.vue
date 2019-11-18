<template>
    <div class="content w">
        <h1>{{listData.title}}</h1>
        <article>
            <div v-html="listData.contents" class="text"></div>
        </article>
    </div>
</template>

<script>
    import {getArticleData} from '../../../api'
    export default {
        data(){
            return {
                listData:'',
            }
        },
        methods:{
            async fetchData(){
                let cate_id = this.$route.query.cate_id
                let article_id = this.$route.query.article_id
                let result = await getArticleData(cate_id,article_id)
                if(result.code == 0){
                    this.listData = result.data
                }
            }
        },
        watch:{
            '$route': 'fetchData'
        },
        created() {
            this.fetchData()
        }
    }
</script>

<style scoped>
.content {
    height: 500px;
}
h1{
    text-align: center;
    font-weight: bold;
}
.text {
    line-height: 1.7em;
    text-indent: 28px;
}

</style>