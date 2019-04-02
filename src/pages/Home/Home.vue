<template>
  <div class="m-indexHd">
    <!--header上部-->
    <HeaderNav />
    <!--下部-->
    <head_nav />
    <!--轮播图-->
    <swiper />
    <!--网易自营-->
    <indexServicePolicy />
    <!--列表-->
    <container />
    <!--新人专享礼-->
    <freshmanModule />
    <xinline />
    <!--品牌制造商-->
    <indexManufacturersSupplying />
    <!--类日热销榜-->
    <categoryHotSellModule />
    <!--人气推荐-->
    <xinline />
    <popularItemModule />
  </div>
</template>

<script>
  import HeaderNav from '../../components/HeaderNav/HeaderNav.vue'
  import head_nav from './components/head_nav/head_nav.vue'
  import swiper from './components/swiper/swiper.vue'
  import indexServicePolicy from './components/m-indexServicePolicy/m-indexServicePolicy.vue'
  import container from './components/swiper-container2/swiper-container2.vue'
  import freshmanModule from './components/m-freshmanModule/m-freshmanModule.vue'
  import indexManufacturersSupplying from './components/m-indexManufacturersSupplying/m-indexManufacturersSupplying.vue'
  import xinline from './components/xinline/xinline.vue'
  import categoryHotSellModule from './components/m-categoryHotSellModule/m-categoryHotSellModule.vue'
  import popularItemModule from './components/m-popularItemModule/m-popularItemModule.vue'
  export default{
    name: 'Home',
    components:{
      HeaderNav,
      head_nav,
      swiper,
      indexServicePolicy,
      container,
      freshmanModule,
      indexManufacturersSupplying,
      categoryHotSellModule,
      xinline,
      popularItemModule
    },
    async mounted () {
      await this.$store.dispatch("getHomeData")
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .m-indexHd
    width 100%
    height 148px
    background #ffffff
</style>
