<template>
  <div id="app">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotcities" :letter="letter"></city-list>
    <city-alpha :cities="cities" @change="handleLetterChange"></city-alpha>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlpha from './components/CityAlpha'

export default {
  name: 'City',
  components: {
      CityHeader,
      CityList,
      CitySearch,
      CityAlpha
  },
  data(){
    return{
      cities:{},
      hotcities:[],
      letter:''
    }
  },
  methods:{
    getCityInfo(){
      axios.get("/api/city.json").then(this.handleCityInfoSucc)
    },
    handleCityInfoSucc(res){
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotcities = data.hotCities
      }
    },
    handleLetterChange(letter){
      this.letter = letter
    }
  },
  mounted(){
    this.getCityInfo()
  }
}
</script>
