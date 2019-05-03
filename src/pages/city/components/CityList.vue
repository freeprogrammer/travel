<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                  <div class="button">北京</div>
              </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
              <div class="button-wrapper" v-for="item of hot">
                  <div class="button">{{item.name}}</div>
              </div>
          </div>
        </div>
        <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom" v-for="inneritem of item">{{inneritem.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'CityList',
    props:{
      hot: Array,
      cities: Object,
      letter: String
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch:{
      letter(){
        const letter = this.$refs[this.letter][0]
        this.scroll.scrollToElement(letter)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 3rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: 5rem
      background: #eee
      padding-left: 1rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem 2rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          padding: .5rem
          text-align: center
          border: .1rem solid #ccc
    .item-list
      line-height: 2rem
      padding-left: 1rem
</style>
 