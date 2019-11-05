<template>
    <div class="myContent fl">
        <div class="title">
            <div class="title_item" :class="{active: current == 0}" @mouseover="show(0)">{{title[0]}}</div>
            <div class="title_item" :class="{active: current == 1}" @mouseover="show(1)">{{title[1]}}</div>
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