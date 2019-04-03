<template>
  <div class="Thingscontent">
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
    <div class="things_tab">
      <ul class="things_BS">
        <li v-for="(item,index) in ThingHerder" :key="index" :class="{active:thisIndex===index}"
        @click="headerClick(index)">
        {{item.tabName}}
        </li>
      </ul>
    </div>
    <!--发现-->
    <router-view/>
  </div>
</template>

<script>
//  import Header from './Header/Header.vue'
  import BScroll from 'better-scroll'
  import {reqThingsHeader} from '../../api/index'
  export default{
//    components:{
//      Header
//    },
    data(){
      return{
        ThingHerder:[],
        thisIndex:0
      }
    },
    async mounted(){
      const ThingHerder=await reqThingsHeader()
      this.ThingHerder=ThingHerder.data
    },
    methods:{
      headerClick(index){
        this.thisIndex=index
      },
      goto(path){
        this.$router.replace(path)
      }
    },
    watch:{
      ThingHerder(){
        this.$nextTick(()=>{
          new BScroll('.things_tab',{
            scrollX:true,
            click:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/css/reset.css"
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
  /*ellipsis*/
  .things_tab
    position fixed
    left 0
    width 100%
    height 76px
    border-top 1px solid #ccc
    top 88px
    overflow hidden
    ul
      width 1180px
      height 76px
      li
        float left
        height 70px
        line-height 70px
        padding 0 15px
        margin-right 15px
        font-size 28px
        &.active
          border-bottom 5px solid #b4282d
          color #b4282d

</style>
