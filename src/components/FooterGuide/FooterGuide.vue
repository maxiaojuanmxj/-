<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" @click="goto('/home')" :class="{on:$route.path==='/home'}" class="guide_item ">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" @click="goto('/classify')" :class="{on:$route.path==='/classify'}" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-icon"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" @click="goto('/things')" :class="{on:$route.path==='/things'}" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" @click="goto('/shop')" :class="{on:$route.path==='/shop'}" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" @click="goto('/personage')" :class="{on:$route.path==='/personage'}" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-tubiaozhizuomoban"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default{
    methods: {
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 10px
      color #999999
      &.on
        color #F50638
      span
        font-size 24px
        margin-top 4px
        margin-bottom 4px
        .iconfont
          font-size 44px
</style>
