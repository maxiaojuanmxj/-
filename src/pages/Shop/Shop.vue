<template>
  <div class="shopCar">
    <div class="car_title">
      <span>购物车</span>
      <div class="tips">领劵</div>
    </div>
    <div class="car_content">
      <div class="service">
        <span>30天无忧退货</span>
        <span>48小时无忧退款</span>
        <span>满88元免包邮费</span>
      </div>
      <div class="did_not_login">
        <img  src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="ShopCar">
        <p>去添加点什么吧</p>
        <div class="login" @click="$router.push('/personage')">去登录</div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopCar
    position relative
    .car_title
      width 750px
      height 88px
      background-color white
      position fixed
      left 0
      top 0
      z-index 10
      line-height 88px
      text-align center
      span
        font-size 35px
      .tips
        float right
        margin-right 60px
        color #b4282d
        margin-top 5px
        font-size 30px
    .car_content
      width 100%
      padding 30px
      box-sizing border-box
      .service
        display flex
        justify-content space-between
        align-items center
        margin-top 80px
        font-size 25px
      .did_not_login
        text-align center
        img
          display block
          margin 375px auto 0
          width 248px
          height 248px
        p
          font-size 30px
          color #999
        .login
          width 480px
          height 92px
          background-color #b4282d
          margin 50px 0 288px
          padding 1px 6px
          box-sizing border-box
          color white
          text-align center
          line-height 92px
          display inline-block
          font-size 30px

</style>
