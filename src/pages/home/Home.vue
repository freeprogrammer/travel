<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-navigator></home-navigator>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeNavigator from './components/HomeNavigator'
import HomeRecommend from './components/HomeRecommend'

export default {
  name: 'Home',
  components: {
      HomeHeader,
      //异步调用 HomeHeader:()=>import('./components/HomeHeader'),
      //加载越多加载JS文件越多要谨慎 除非APP.js项目很庞大的时候才用
      HomeSwiper,
      HomeNavigator,
      HomeRecommend
  },
}
</script>
