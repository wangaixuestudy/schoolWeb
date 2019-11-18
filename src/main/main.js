import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './common/css/global.css'

Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
        if(sessionStorage.login){
            next()
        }else {
            next({
                path:'/login',
                query:{redirect: to.fullPath}
            })
        }
    }else {
        next()
    }
})
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
})