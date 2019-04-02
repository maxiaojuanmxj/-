<template>
  <div class="m-indexManufacturersSupplying">
    <div class="moduleTitle">
      <p>品牌制造商直供</p>
      <a href="##">更多></a>
    </div>
    <ul class="list" v-if="homeData.sceneLightShoppingGuideModule">
      <li v-for="(item,index) in homeData.sceneLightShoppingGuideModule">
        <div class="cnt" v-if="item.styleItem.extra">
          <h4 class="title">{{item.styleItem.extra.materialName}}</h4>
          <span class="price">9.9元起</span>
          <span><i class="newIcon">上新</i></span>
        </div>
        <div v-if="item.styleItem">
          <img :src="item.styleItem.backgroundUrl" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState({
        homeData:state=>state.home.homeData
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .m-indexManufacturersSupplying
    width 750px
    height 682px
    border-bottom 10px
    background-color #F4F4f4
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
    .list
      width 100%
      height 534px
      background-color white
      padding 0 26px 26px 30px
      margin 0 0 20px
      box-sizing border-box
      overflow hidden
      li
        width 343px
        height 260px
        margin 0 4px 4px 0
        background-color #ccc
        float left
        position relative
        .cnt
          position absolute
          left 0
          top 0
          padding-top 5px
          width 100%
          z-index 2
          text-align center
          .title
            line-height 33px
            width 100%
            height 33px
            color #333
            font-size 27px
            margin 0 0 3px
          .price
            color #7f7f7f
            font-size 24px
          .newIcon
            display inline-block
            width 64px
            height 32px
            color #fff;
            line-height 32px
            text-align center
            background #CBB693
            border-radius 8px
            margin-left 2px

</style>
