<template>
  <div class="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FooterGuide from '../src/components/FooterGuide/FooterGuide.vue'
  export default{
    components:{
      FooterGuide,
    }
  }


</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../static/css/reset.css"
  html,body
    width 100%
    height 100%
    /*overflow hidden*/
    .app
      width 100%
      height 100%
      background-color #f4f4f4
      /*overflow hidden*/
      font-family PingFangSC-Light,helvetica,'Heiti SC';
</style>
