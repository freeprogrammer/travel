import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      //异步加载用component: ()=>import('@/pages/home/Home')
      //加载越多加载JS文件越多要谨慎 除非APP.js项目很庞大的时候才用
    },{
      path: '/city',
      name: 'City',
      component: City
      //异步加载用component: ()=>import('@/pages/city/City')
    }
  ]
})
