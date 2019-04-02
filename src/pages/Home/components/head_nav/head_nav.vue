<template>
  <div class="head_nav ">
    <div class="wrapper">
      <ul class="nav_wrap">
        <li class="active"><a href="">推荐</a></li>
        <li><a href="">居家生活</a></li>
        <li><a href="">居家生活</a></li>
        <li><a href="">居家生活</a></li>
        <li><a href="">居家生活</a></li>
        <li><a href="">居家生活</a></li>
        <li><a href="">居家生活</a></li>
        <li><a href="">居家生活</a></li>
        <li><a href="">居家生活</a></li>
        <li><a href="">居家生活</a></li>
        <li><a href="">居家生活</a></li>
      </ul>
    </div>
    <div class="toggle_channel">
      <span><i class="iconfont icon-xia"></i></span>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  export default{
    mounted () {
//      滑动
      const scroll = new BScroll('.wrapper', {
        scrollX: true,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .head_nav
    position fixed
    left 0
    top  88 px
    width 100%
    height 60px
    background white
    z-index 20
    .wrapper
      float left
      width 80%
      /*background yellow*/
      height 100%
      overflow hidden
      .nav_wrap
        height 60px
        width 1460px
        display flex
        align-items center
        li
          height 60px
          line-height 60px
          margin-left 10px
          &.active
            color #b4282d
            border-bottom 3px solid #b4282d
            a
              padding 0 20px
    .toggle_channel
      width 11%
      height 60px
      /*background-color aqua*/
      float right
      text-align center
      line-height 60px
      overflow hidden
      .iconfont
        font-size 50px
        background-color white
</style>
