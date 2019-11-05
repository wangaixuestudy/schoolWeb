<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './pages/Body.vue'
import Footer from './components/Footer.vue'
export default {
    components: {
        Header,
        Body,
        Footer,
    }
}
</script>

<style type="text/css">

</style>