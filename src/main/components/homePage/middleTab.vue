<template>
    <div class="myContent fl">
        <div class="title">
            <div v-for="(item,index) in title" :key="index" class="title_item"
                 :class="{active: current == index}" @mouseover="show(index)">{{item}}</div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                current: 0,
            }
        },
        props:{
            title: Array
        },
        methods:{
            show(num){
                if(this.current != num){
                    this.current = num;
                }
                this.$emit('showContent', num)
            }
        }
    }
</script>

<style scoped>
    .title{
        padding-top: 0px;
        background: none;
    }
</style>