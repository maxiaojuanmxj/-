<template>
  <div class="m-freshmanModule">
    <div class="moduleTitle">
      <span class="txt">新人专享礼</span>
    </div>
    <div class="content">
      <a href="##" class="left">
        <p class="name">新人专享</p>
        <div class="Img">
          <img src="../../../../../static/images/nv03.jpg" alt="">
        </div>
      </a>
      <div class="right">
        <a href="" class="activity">
          <div class="module1">
            <div class="cnt">
              <p class="title">福利社</p>
              <p class="subtitle">今日特价</p>
            </div>
            <img src="../../../../../static/images/nv03.jpg" alt="">
          </div>
        </a>
        <a href="" class="activity2">
          <div class="module2">
            <p class="title">新人拼团</p>
            <p class="subtitle">一元起包邮</p>
            <img src="../../../../../static/images/nv03.jpg" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .m-freshmanModule
    width 100%
    height 558px
    margin 20px 0 0 0
    background-color white
    padding 0 0 30px
    box-sizing border-box
    .moduleTitle
      width 750px
      height 90px
      padding 0 30px
      box-sizing border-box
      line-height 90px
      text-align center
      font-size 32px
      overflow hidden
      position relative
      &::after
        content: '';
        position: absolute;
        top: .6rem;
        width 24px
        height 4px
        background-color #333333
        right 260px
      &::before
        content: '';
        position: absolute;
        top: .6rem;
        width 24px
        height 4px
        background-color #333333
        left 260px


    .content
      width 750px
      height 438px
      box-sizing border-box
      padding 0 0 0 30px
      overflow hidden
      .left
        display block
        width 343px
        height 434px
        background-color #f9e9cf
        border-radius 10px
        color #333
        margin-right 4px
        float left
        .name
          width 100%
          height 78px
          padding 30px 0 0 30px
          font-size 32px
          box-sizing border-box
        .Img
          width 258px
          height 257px
          margin .49333rem auto
          background-color #000000
          img
            width 258px
            height 257px

      .right
        float left
        width 343px
        height 434px
        .activity
          border-radius 4px
          margin-bottom 10px
          width 343px
          height 215px
          .module1
            background #fbe2d3
            width 343px
            height 215px
            box-sizing border-box
            margin 0 4px 4px 0
            padding 20px 0 0 30px
            position relative
            .title
              font-size 30px
            .subtitle
              margin-top 5px
              margin-left 8px
              color #7F7F7F
            img
              width 200px
              height 200px
              position absolute
              right 0
              bottom 0
        .activity2
          border-radius 4px
          width 343px
          height 215px
          .module2
            width 343px
            height 215px
            background-color #FFECC2
            padding 20px 0 0 30px
            box-sizing border-box
            margin 0 4px 4px 0
            position relative
            .title
              font-size 30px
            .subtitle
              margin-top 5px
              margin-left 8px
              color #7F7F7F
            img
              width 200px
              height 200px
              position absolute
              right 0
              bottom 0

</style>
