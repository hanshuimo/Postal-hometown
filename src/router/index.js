import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../pages/index.vue'
import login from '../pages/login.vue'
import preview from '../pages/preview.vue'
import preview2 from '../pages/preview2.vue'
import preview3 from '../pages/preview3.vue'
import spreview from '../pages/spreview.vue'
import spreview2 from '../pages/spreview2.vue'
import spreview3 from '../pages/spreview3.vue'
import feature from '../pages/feature.vue'
import feature2 from '../pages/feature2.vue'
import feature3 from '../pages/feature3.vue'
import build from '../pages/build.vue'
import build2 from '../pages/build2.vue'
import build3 from '../pages/build3.vue'

import clothes from '../pages/clothes.vue'
import clothes2 from '../pages/clothes2.vue'
import clothes3 from '../pages/clothes3.vue'
import unique from '../pages/unique.vue'
import unique2 from '../pages/unique2.vue'
import unique3 from '../pages/unique3.vue'

import personal from '../pages/personal.vue'
import game from '../pages/game.vue'
import game2 from '../pages/game2.vue'
import game3 from '../pages/game3.vue'
import gamepk from '../pages/gamepk.vue'
import gamepk2 from '../pages/gamepk2.vue'
import gamepk3 from '../pages/gamepk3.vue'
import pk from '../pages/pk.vue'
import question from '../pages/questions.vue'
import toushi from '../pages/toushi.vue'
import toushi2 from '../pages/toushi2.vue'
import toushi3 from '../pages/toushi3.vue'
import clothesshow from '../pages/clothesshow.vue'
import xingzhi from '../pages/xingzhi.vue'


Vue.use(VueRouter)
const router = new VueRouter({
    base: '/media/',
    routes: [
        { path:'/',  redirect: '/login' },
        { path:'/login', component:login},
        { path:'/index', component:index},
        { path:'/preview', component:preview},
        { path:'/preview2', component:preview2},
        { path:'/preview3', component:preview3},
        { path:'/spreview',component:spreview},
        { path:'/spreview2',component:spreview2},
        { path:'/spreview3',component:spreview3},
        { path:'/feature', component:feature},
        { path:'/feature2', component:feature2},
        { path:'/feature3', component:feature3},
        { path:'/build',component:build},
        { path:'/build2',component:build2},
        { path:'/build3',component:build3},
        { path:'/clothes', component:clothes},
        { path:'/clothes2', component:clothes2},
        { path:'/clothes3', component:clothes3},
        { path:'/unique',component:unique},
        { path:'/unique2',component:unique2},
        { path:'/unique3',component:unique3},
        { path:'/personal',component:personal},
        { path:'/game',component:game},
        { path:'/game2',component:game2},
        { path:'/game3',component:game3},
        { path:'/gamepk',component:gamepk},
        { path:'/gamepk2',component:gamepk2},
        { path:'/gamepk3',component:gamepk3},
        { path:'/pk',component:pk},
        { path:'/question',component:question},
        { path:'/toushi',component:toushi},
        { path:'/toushi2',component:toushi2},
        { path:'/toushi3',component:toushi3},
        { path:'/clothesshow',component:clothesshow},
        { path:'/xingzhi',component:xingzhi},
        
    ]
})
export default router;