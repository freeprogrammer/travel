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
import axios from 'axios'

export default {
  name: 'App',
  components: {
      HomeHeader,
      HomeSwiper,
      HomeNavigator,
      HomeRecommend
  },
  methods: {
      getHomeInfo() {
          axios.get("/api/index.json").then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
          console.log(res)
      }
  },
  mounted(){
      this.getHomeInfo()
  }
}
</script>
