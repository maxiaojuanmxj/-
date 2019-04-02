<template>
  <div class="header_box">
    <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
    <h2>网易严选</h2>
    <i class="iconfont icon-icon"></i>
    <i class="iconfont icon-gouwuche"></i>
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header_box
    width 750px
    height 88px
    color #000000
    font-size 42px
    padding 0 8px
    background-color #fafafa
    box-sizing border-box
    position fixed
    left 0
    top 0
    display flex
    align-items center
    h2
      margin auto
      font-weight 700
    i
      font-size 50px
      margin-right  20px
</style>
