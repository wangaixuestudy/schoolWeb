<template>
    <div id="app">
        <Header v-if="$route.meta.showHeader"></Header>
        <router-view></router-view>
        <Footer v-show="$route.meta.showHeader"></Footer>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import {getUserInfo} from '../api'
export default {
    components: {
        Header,
        Footer,
    },
    data(){
        return{
            userInfo:Object
        }
    },
    methods:{

    },
    mounted() {

    }
}
</script>

<style scoped>

</style>