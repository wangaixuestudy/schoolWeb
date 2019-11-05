import Vue from 'vue'
import login from './login.vue'
import 'bootstrap/dist/css/bootstrap.min.css'



new Vue({
    el: '#login',
    components: {login},
    template: '<login/>',
})