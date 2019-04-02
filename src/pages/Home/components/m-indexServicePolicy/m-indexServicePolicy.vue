<template>
  <div class="m-indexServicePolicy">
    <ul class="g-grow">
      <li class="item" v-for="(item,index) in homeData.policyDescList" :key="index">
        <a href="##">
          <i class="iconfont" :class="item.icon"></i>
          <span class="text">{{item.desc}}</span>
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
  .m-indexServicePolicy
    width 100%
    height 72px
    background-color white
    /*color #B4282D*/
    .g-grow
      width 100%
      height 72px
      padding 0 30px
      box-sizing border-box
      display flex
      justify-content center
      align-items center
      .item
        width 228px
        height 36px
        a
          display inline-block
          vertical-align middle
          height 32px
          line-height 32px
          color #B4282D
          .iconfont
            display inline-block
            width 32px
            height 32px
            line-height 32px
            text-align center
            font-size 27px
          .text
            width 170px
            height 32px
            line-height 32px
            margin-left 8px
            font-size 24px

</style>
