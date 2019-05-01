<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-navigator></home-navigator>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeNavigator from './components/HomeNavigator'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNavigator
  }
}
</script>
