<template>
  <div>
      <div class="header">
        城市选择
        <router-link to="/">
        <span class="iconfont back">&#xeb99;</span>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl"
  .header
      position: relative
      overflow: hidden
      height: 3rem
      text-align: center
      background: $bgcolor
      color: #FFF
      font-size: 1.4rem
      line-height: 2.8rem
      .back
        position: absolute
        left: 1%
        top: 2%
        color: #FFF
</style>
