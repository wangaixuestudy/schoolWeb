import Vue from 'vue'
import register from './register.vue'
import 'bootstrap/dist/css/bootstrap.min.css'



new Vue({
    el: '#register',
    components: {register},
    template: '<register/>',
})