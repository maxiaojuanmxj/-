<template>
  <div class="swiper-container2">
    <ul class="swiper-wrapper" v-if="homeData.kingKongModule">
      <li class="kingkong-item" v-for="(item,index) in homeData.kingKongModule.kingKongList" :key="index">
        <a href="##">
          <img :src="item.picUrl" alt="">
          <p>{{item.text}}</p>
        </a>
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
  .swiper-container2
    .swiper-wrapper
      display flex
      flex-wrap wrap
      margin-bottom 40px
      background-color white
      .kingkong-item
        width 110px
        height 156px
        margin 10px 20px 0
        a
          width 110px
          height 156px
          float left
          display flex
          flex-direction column
          justify-content center
          align-items center
          overflow hidden
          img
            width 110px
            height 110px
          p
            font-size 24px
            line-height 36px
            color #333

</style>
