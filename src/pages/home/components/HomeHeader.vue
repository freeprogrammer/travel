<template>
  <div>
      <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xeb99;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xeb9c;</span>
            输入城市/景点/游戏主题
        </div>
        <router-link to="city">
            <div class="header-right">
                城市<span class="iconfont">&#xe62d;</span>
            </div>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl"
  .header
      display: flex
      height: 4rem
      line-height: 2rem
      background: $bgcolor
      color: #FFF
    .header-left
        width: 1rem
        height: 1rem
        margin: 1rem 0 0 0.5rem
        float: left
    .header-input
        flex: 1
        height: 2.5rem
        line-height: 2.5rem
        margin-top: .8rem
        margin-left: 0.5rem
        background: #fff
        border-radius: 0.5rem
        color: #ccc
        padding: 0 0 0 0.5rem
    .header-right
      width: 4rem
      float: right
      text-align: center
      margin: 1rem 0 0 0
      color: #FFF
</style>
