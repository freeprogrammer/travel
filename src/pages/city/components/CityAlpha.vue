<template>
    <div class="wrapper">
    <ul>
      <li 
      class="item" 
      v-for="(item,key) of cities" 
      :key="key"
      @click="handleLetterClick"
      @touchStart="handleTouchStart"
      @touchMove="handleTouchMove"
      @touchEnd="handleTouchEnd"
      >{{key}}</li>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlpha',
  props:{
    cities: Object
  },
  methods:{
    handleLetterClick(e){
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart(){
      this.touchStatus = true
    },
    handleTouchMove (){
      if (this.touchStatus){

      }
    },
    handleTouchEnd(){
      this.touchStatus = true
    },
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl"

  .wrapper
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 10%
    right: 1rem
    width: 1rem
    z-index: 2
    .item
      font-size: 1.2rem
      text-align: center
      color: $bgcolor
</style>
