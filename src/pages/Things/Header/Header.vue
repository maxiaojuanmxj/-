<template>
  <div class="header_box">
    <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
    <div class="faxian" :class="{on:$route.path==='/things/section'}" @click="goto('/things/section')">
      <span>发现</span>
    </div>
    <div class="faxian" :class="{on:$route.path==='/things/find'}" @click="goto('/things/find')">
      <span>甄玩家</span>
    </div>
    <i class="iconfont icon-icon"></i>
    <i class="iconfont icon-gouwuche"></i>
  </div>
</template>

<script>
export default{
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header_box
    width 750px
    height 88px
    color #000000
    padding 0 8px
    background-color #fafafa
    box-sizing border-box
    position fixed
    left 0
    top 0
    display flex
    align-items center
    justify-content space-around
    div
      font-size 30px
      &.on
        font-weight 700
        color #b4282d
    i
      font-size 40px
</style>
