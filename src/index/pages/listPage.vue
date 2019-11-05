<template>
    <div class="content w">
        <h1>{{this.listData.title}}</h1>
        <article>
            <div v-html="listData.text" class="text">{{this.listData.text}}</div>
        </article>
    </div>
</template>

<script>
    import {getListPageData} from '../../api'
    export default {
        data(){
            return {
                listData:'',
            }
        },
        methods:{
            async fetchData(){
                let result = await getListPageData({host:this.$route.params.id})
                console.log(result)
                this.listData = result.data
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