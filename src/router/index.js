import Vue from 'vue'
import Router from 'vue-router'
import Apple from '@/components/Apple'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeHeader
    }
  ]
})
