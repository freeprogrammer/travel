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
      HomeSwiper,
      HomeNavigator,
      HomeRecommend
  },
}
</script>
