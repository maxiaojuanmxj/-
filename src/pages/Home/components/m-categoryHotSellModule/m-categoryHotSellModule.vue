<template>
  <div class="m-categoryHotSellModule">
    <div class="moduleTitle">
      <span>类日热销榜</span>
    </div>
    <div class="content">
      <div class="line1">
        <a href="##">
          <div class="name">
            <h4>热销榜</h4>
          </div>
        </a>
        <a href="##">
          <div class="name">
            <h4>热销榜</h4>
          </div>
        </a>
      </div>
      <div class="line2">
        <a href="##" class="item">
          <div class="name">居家生活榜</div>
          <div class="imgWrap">
            <img src="" alt="">
          </div>
        </a>
        <a href="##" class="item">
          <div class="name">居家生活榜</div>
          <div class="imgWrap">
            <img src="" alt="">
          </div>
        </a>
        <a href="##" class="item">
          <div class="name">居家生活榜</div>
          <div class="imgWrap">
            <img src="" alt="">
          </div>
        </a>
        <a href="##" class="item">
          <div class="name">居家生活榜</div>
          <div class="imgWrap">
            <img src="" alt="">
          </div>
        </a>
        <a href="##" class="item">
          <div class="name">居家生活榜</div>
          <div class="imgWrap">
            <img src="" alt="">
          </div>
        </a>
        <a href="##" class="item">
          <div class="name">居家生活榜</div>
          <div class="imgWrap">
            <img src="" alt="">
          </div>
        </a>
        <a href="##" class="item">
          <div class="name">居家生活榜</div>
          <div class="imgWrap">
            <img src="" alt="">
          </div>
        </a>
        <a href="##" class="item">
          <div class="name">居家生活榜</div>
          <div class="imgWrap">
            <img src="" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
//  import {mapState} from 'vuex'
//  export default{
//    computed:{
//      ...mapState({
//        homeData:state=>state.home.homeData
//      })
//    },
//  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .m-categoryHotSellModule
    width 750px
    height 710px
    margin-bottom 20px
    .moduleTitle
      width 100%
      height 100px
      padding 0 30px
      box-sizing border-box
      line-height 100px
      background-color white
      span
        font-size 30px
    .content
      width 100%
      height 610px
      box-sizing border-box
      padding 0 20px 20px 30px
      overflow hidden
      background-color white
      .line1
        width 100%
        height 200px
        /*background-color #f9f3e4*/
        margin 0 10px 10px 0
        overflow hidden
        a
          width 340px
          height 200px
          background-color #f9f3e4
          margin 0 10px 10px 0
          float left
          .name
            width 340px
            height 41px
            margin 66px 0 0
            padding 0 0 0 24px
            box-sizing border-box
            position relative
            h4
              font-size 30px
              &::before
                content ''
                position absolute
                left 24px
                bottom -.21333rem
                width .64rem
                height .05333rem
                background #333

      .line2
        width 700px
        .item
          display block
          width 165px
          height 180px
          background-color #f5f5f5
          margin 0 10px 10px 0
          float left
          .name
            width 165px
            height 36px
            color #333333
            margin 10px 0 0
            text-align center
          .imgWrap
            width 120px
            height 120px
            background-color aqua
            margin 0 auto
            img
              width 120px
              height 120px


</style>
