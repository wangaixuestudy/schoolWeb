import Vue from 'vue'
import Router from 'vue-router'
import listPage from '../pages/listpage.vue'
import fromPage from '../pages/formpage.vue'
import addArticle from "../pages/addArticle.vue";
Vue.use(Router)

export default new Router({
    model:history,
    routes:[
        {
            path:'/listPage',
            component:listPage
        },
        {
            path:'/fromPage',
            component:fromPage
        },
        {
            path:'/addArticle',
            component:addArticle,
            name: 'addArticle'
        },
        {
            path:'/',
            redirect:'/listPage?cate=0',
            name:'listPage'
        }
    ]
})