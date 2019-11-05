import Vue from 'vue'
import Router from 'vue-router'
import Body from "../pages/Body.vue";
import listPage from "../pages/listPage.vue";
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:Body
        },
        {
            path:'/listPage/:id',
            component:listPage
        },
        {
            path:'/index',
            redirect:'/body'
        }
    ],
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition
        }else {
            return {x:0,y:0}
        }
    }
})