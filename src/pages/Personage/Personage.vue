<template>
  <div class="header_personage">
    <Header />
    <div class="top_login">
      <div class="top_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
        <div class="phone_login active" @click="$router.push('/phonelogin')">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="email_login" @click="$router.push('/emaillogin')">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="email_register">手机号快捷注册&nbsp;&gt;</div>
      </div>
    </div>
</template>

<script>
  import Header from './Header/Header.vue'
export default{
  components:{
    Header,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header_personage
    width 100%
    padding 88px 0 0
    background-color #f4f5f2
    box-sizing border-box
    position relative
    &.is_personal
      background-color #f2f5f4
    .top_login
      width 679px
      height 752px
      color #000000
      margin 0 auto
      .top_img
        width 100%
        height 423px
        display flex
        justify-content center
        align-items center
        img
          width 268px
          height 90px


      .phone_login,.email_login
        width 679px
        height 98px
        color #b4282d
        margin 32px 0 0
        text-align center
        line-height 98px
        font-size 28px
        border 1px solid #b4282d
        &.active
          background-color #b4282d
          color white
        i
          font-size 30px

      .email_register
        text-align center
        font-size 28px
        color #000000
        margin-top 20px

</style>
