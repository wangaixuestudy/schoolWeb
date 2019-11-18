import Vue from 'vue'
import admin from './admin.vue'
import router from './router/index'
import './common/bootstrap-3.3.7/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import './common/bootstrap-3.3.7/js/bootstrap.min.js'
import './common/css/index.css'
import './common/css/reset.css'
window.tinymce.baseURL = '/static/tinymce'

router.beforeEach((to,from,next)=>{
    window.addEventListener('load',function () {
        next({
            path:'/listPage?cate=0'
        })
    })
    next()
})
new Vue({
    el: '#admin',
    router,
    components: {admin},
    template: '<admin/>',
})