<template>
  <div>
      <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市或拼音" />
      </div>
      <div class="search-content" v-show="keyword" ref="wrapper">
        <ul>
          <li class="search-item border-bottom" v-for="item of list" @click="handleCityClick(item.name)">{{item.name}}</li>
          <li class="search-item border-bottom" v-show="!this.list.length">没有找到内容</li>
        </ul>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props:{
    cities: Object
  },
  data(){
    return{
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods:{
    handleCityClick(city){
      this.$store.commit('changeCity',city)
      this.$router.push("/")
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch:{
    keyword(){
      if (this.timer){
        clearTimeout(this.timer)
      }
      if (!this.keyword){
        this.list = []
        return
      }
      this.timer = setTimeout(()=>{
        const result = []
        for (let i in this.cities){
          this.cities[i].forEach((value)=>{
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1){
              result.push(value)
            }
          })
        }
        this.list = result
      },100)
    },
    
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl"
  import BScroll from 'better-scroll'
  .search
    height: 2.8rem
    padding: 0 1rem
    background: $bgcolor
  .search-input
    box-sizing: border-box
    width: 99%
    height: 3rem
    padding: 0 .1rem
    line-height: .62rem
    text-align: center
    border-radius: .62rem
    color: #666
  .search-content
    z-index: 20
    overflow: hidden
    position: absolute
    top: 8rem
    left: 0
    right: 0
    bottom: 0
    background: #FFF
    .search-item
      line-height: 2rem
      padding-left: 1rem
      color: #666
    .border-bottom
      border-bottom: 0.1rem solid #ccc
</style> 
