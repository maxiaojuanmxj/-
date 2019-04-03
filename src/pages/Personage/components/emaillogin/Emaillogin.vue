<template>
  <div class="header_personage">
    <Header />
    <div class="top_login">
      <div class="top_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <label class="input_phone">
        <input type="text" placeholder="请输入邮箱" v-model="email"/>
      </label>
      <label class="input_code">
        <input type="text" placeholder="请输入密码" v-model="pwd"/>
        <div class="get_phone_code">获取验证码</div>
      </label>

      <div class="login_help">
        <span>遇到问题? </span>
        <span>使用密码验证登录</span>
      </div>
      <div class="phone_login active" @click="$router.push('/home')">
        <span @click="toLogin">登录</span>
      </div>
      <div class="email_login" @click="$router.push('/personage')">
        <span>其他账号登录</span>
      </div>
      <div class="email_register">快速注册&nbsp;&gt;</div>
    </div>
  </div>
</template>

<script>
  import Header from '../../Header/Header.vue'
  export default{
    components:{
      Header,
    },
    data(){
      return{
        isUser:false,
        email:'',
        pwd:'',
      }
    },

//    watch:{
//      user:{
//        handl(user){
//          if(/^1[0-9]{10}$/.test(user.phone)){
//            this.phone_tips=''
//          }else{
//           this.phone_tips='请输入正确的手机号码'
//          }
//          if(phone_tips._test(user.pwd)){
//            this.code_tips=''
//          }else{
//            this.code_tips = "请输入正确的验证码"
//          }
//        }
//      }
//    },
    methods:{
      toLogin(){
        if(! /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email) && !/^[a-zA-Z0-9_]{6,20}$/.test(this.pwd) ){
//          return alert('请输入正确的手机号')
//        }else if(){
          return alert('请输入正确的邮箱和密码')
        }else{
          return alert('登录成功')
        }
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header_personage
    width 100%
    height 100%
    padding 88px 0 0
    background-color white
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
        height 133px
        display flex
        justify-content center
        align-items center
        margin-bottom 250px
        img
          width 192px
          height 64px
      .input_phone
        position relative
        margin-top 30px
      .login_tips
        position absolute
        left 50%
        top -100%
        width 50%
        transform translateX(-50%)
        color red
        font-size 28px
    .input_phone,
    .input_code
      display block
      width 675px
      height 90px
      margin 30px auto
      input
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 30px
        line-height 45px
    .input_code
      position relative
      .get_phone_code
        position absolute
        right 0
        bottom 0
        width 173px
        height 56px
        line-height 56px
        text-align center
        font-size 28px
        border 1px solid #333
        border-radius  10px
    .login_help
      display flex
      justify-content space-between
      font-size 28px
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
    .email_register
      text-align center
      font-size 28px
      color #000000
      margin-top 20px

</style>
