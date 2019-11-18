import Vue from 'vue'
import Router from 'vue-router'
import homePage from "../pages/homePage/homePage.vue";
import listPage from "../pages/listPage/listPage.vue";
import login from "../pages/login/login.vue"
import register from "../pages/register/register.vue"
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/homePage',
            component:homePage,
            name:'homePage',
            meta:{
                showHeader:true,
                showFooter: true,
                requireAuth:true
            }
        },
        {
            path:'/listPage',
            component:listPage,
            meta:{
                showHeader:true,
                showFooter: true
            }
        },
        {
            path:'/login',
            component:login,
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/',
            redirect:'/login'
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
