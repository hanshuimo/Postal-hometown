import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router/index.js'
import animated from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(animated)

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      number:"",
      customerType:"2",
      control:0,
      baseurl:'http://39.108.177.113:8080',
    }
  },
  render: h => h(App),
  router:Routes,
}).$mount('#app')
