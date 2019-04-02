<template>
  <div class="m-popularItemModule">
    <div class="moduleTitle">
      <p>人气推荐</p>
      <a href="##">更多></a>
    </div>
    <a href="" class="spItem">
      <div>
        <img src="../../../../../static/images/nv03.jpg" alt="">
      </div>
      <div>
        <div class="tagWraper">
          <span class=" tag-status-new gradientPrice">每满299减60</span>
          <span class=" tag-status-new coupon">每满299减50券</span>
        </div>
        <div class="name">泰国制造 天然乳胶枕 护颈按摩</div>
        <div class="desc">0合成胶 SGS全程监控</div>
        <div class="price">
          <span >¥</span>
          <span>199</span>
        </div>
      </div>
    </a>
    <a class="m-indexItem">
      <ul class="list">
        <li class="item">
          <a class="good" href="javascript:;">
            <div class="hd">
              <div class="wraper">
                <div class="m-lazyload  m-lazyload-loaded">
                  <img class="swiper-lazy" src="">
                </div>
              </div>
              <div class="desc">
                <span> </span>
                <span>除螨吸尘 深层清洁</span>
              </div>
            </div>
            <div class="name">
              <span>网易智造N520除螨吸尘器</span>
              <span class="dynamicPrice">
                  <span>&nbsp;</span>
                  <span class="priceInner">
                    <span>
                      <span>¥</span>
                      <span>449</span>
                    </span>
                  </span>
                </span>
            </div>
          </a>
        </li>
      </ul>
    </a>
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .m-popularItemModule
    width 750px
    height 784px
    margin 0 0 20px
    box-sizing border-box
    padding 0 0 30px
    background-color #f4f4f4
    .moduleTitle
      width 100%
      height 100px
      padding 0 30px
      box-sizing border-box
      background-color white
      line-height 100px
      overflow hidden
      p
        float left
        font-size 30px
      a
        float right
        font-size 30px
    .spItem
      color #333
      width 100%
      height 299px
      background-color #fef0df
      padding  0 30px 20px
      display flex
      align-items center
      border-radius 10px
      box-sizing border-box
      img
        width 280px
        height 279px
      .tagWraper
        widows: 350px
        height 33px
        margin 0 0 9px
        .tag-status-new
          margin-bottom .06667rem
          padding 0 .10667rem
          line-height .37333rem
          color #B4282D
          background rgba(255,255,255,.9)
          border 1px solid #B4282D
          border-radius .02667rem
          margin-left .13333rem
          vertical-align top


      .name
        font-family PingFangSC-Regular
        font-size .37333rem
        width 4.66667rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .desc
        font-size .32rem
        color #7F7F7F
        width 4.66667rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .price
        font-size .37333rem
        color #b4282d

</style>
