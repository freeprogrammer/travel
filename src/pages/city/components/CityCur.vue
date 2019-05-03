<template>
  <div class="list">
    <div class="cur">当前城市</div>
    <div class="curlist">
        <ul>
            <li>厦门</li>
        </ul>
        <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CityCur'
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl"
  .cur
      width: 100%;
      font-size: 1.4rem
      color: #333
      font-weight: bold
      margin: .8rem 0
      padding: .3rem 0 .3rem 1rem
      background: #ccc
  .list
    .curlist
      padding: 1rem 0 0 0
      .clear
        clear: both
      ul
        li
          width: 29%
          padding: .5rem 0
          border: 1px solid #666
          float: left
          color: #000
          margin: 0 0 1rem 1rem
          text-align: center
</style>
