<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../../../../static/images/ban01.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../../../../static/images/ban02.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../../../../static/images/ban03.jpg" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-scrollbar"></div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  export default{
    mounted () {
//轮播图
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    margin-top 148px
    width 100%
    height 400px
    img
      width 100%
      height 400px
</style>
