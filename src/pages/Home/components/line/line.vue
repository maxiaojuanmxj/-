<template>
  <div class="line">
    <a href="" class="logo"></a>
    <div class="m-topSearchIpt">
      <i class="iconfont icon-sousuo"></i>
      <span class="placeholder">搜索商品, 共22110款好物</span>
    </div>
    <div class="login">登录</div>
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .line
    position fixed
    left 0
    top  0
    height 88px
    width 100%
    padding 16px 30px
    display flex
    align-content center
    background-color white
    /*justify-content center*/
    /*background #8D4600*/
    box-sizing border-box
    z-index 20
    .logo
      display inline-block
      width 148px
      height 40px
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
      background-size cover
      background-position center
      background-repeat no-repeat
      margin 11px 20px 0 0
    .m-topSearchIpt
      width 442px
      height 56px
      background #ededed
      box-sizing border-box
      padding 10px 30px
      border-radius 10px
      .iconfont
        display inline-block
        vertical-align middle
        width 28px
        height 28px
        font-size 30px
    .login
      width 74px
      height 40px
      border-radius 10px
      line-height 40px
      text-align center
      color #b4282d
      border 1px solid #b4282d
      margin-left 20px
      font-size 30px
      margin-top 10px
</style>
