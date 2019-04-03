<template>
  <div>
    <section class="goods-content-wrap">
      <div class="goods-content">
        <div v-for="(good,index) in goods" :key="index">
          <ul
            class="goodsUl"
            v-for="(goodDetails,index) in good.topics"
            :key="index"
            v-if="goodDetails.style === 2"
          >
            <li>
              <div class="goodsLeftLi">
                <div class="title">
                  <img :src="goodDetails.avatar" alt="">
                  <h3>{{goodDetails.nickname}}</h3>
                </div>
                <p class="text">
                  {{goodDetails.title}}
                </p>
                <span class="special">
                 {{goodDetails.subTitle}}
               </span>
                <div class="seen">
                  <i class="iconfont icon-yanjing"></i>
                  <span>{{goodDetails.readCount}}</span>
                </div>
              </div>
              <div class="goodsRightImg">
                <img :src="goodDetails.picUrl" alt="">
              </div>
            </li>
          </ul>
          <ul
            class="goodsUlX"
            v-for="(goodDetails,index) in good.topics"
            :key="index"
            v-if="goodDetails.style === 1"
          >
            <li>
              <div class="titleX">
                <img :src="goodDetails.avatar" alt="">
                <h3>{{goodDetails.nickname}}</h3>
              </div>
              <p class="textX">
                {{goodDetails.title}}
              </p>
              <div class="Img">
                <img :src="goodDetails.picUrl" alt="">
              </div>
              <div class="seenX">
                <i class="iconfont icon-yanjing"></i>
                <span>{{goodDetails.readCount}}</span>
              </div>
            </li>
          </ul>
          <ul
            class="goodsHomeFurnishing">
            <!--v-for="(goodDetails,index) in good.topics"-->
            <!--:key="index"-->
            <!--v-if="goodDetails.style === 1"-->
            <!--&gt;-->
            <li>
              <div class="titleHome">
                <h3>记得回访</h3>
                <p class="textHome">
                  奖金发放环保
                </p>
              </div>
              <ul class="imgList">
                <li>
                  <img src="https://yanxuan.nosdn.127.net/482a4b9f174252ed853b500e40411895.png?imageView&quality=65&thumbnail=272y272" alt="">
                </li>
              </ul>
              <div class="seenHome">
                <i class="iconfont icon-yanjing"></i>
                <span>解放军解放街附近</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {reqGoods} from '../../../api'
  export default {
    data(){
      return{
        goods:[],
      }
    },
    async mounted(){
      const goods = await reqGoods()
      this.goods = goods.data
      console.log(goods.data)
    },
    watch:{
      goods(){
        this.$nextTick(()=>{
          new BScroll('.goods-content-wrap')
        })
      }
    }
  }


</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
<div class="faxian" @click="isFond=true;$router.replace('/things/section')">
  <span :class="{on:isFond}">发现</span>
</div>
<div class="faxian" @click="isFond=true;$router.replace('/things/find')">
  <span :class="{on:!isFond}">甄玩家</span>
</div>
