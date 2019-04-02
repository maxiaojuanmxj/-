<template>
  <div class="category_box" v-if="categoryDate.categoryL1List">
    <div class="category_header">
      <div class="search_box">
        <div>
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="search">
          <span>搜索商品，共19999件好物</span>
        </div>
      </div>
    </div>
    <div class="cat_content">
      <div class="left_nav">
        <ul v-if="categoryDate.categoryL1List">
          <li :class="{active:curIndex===index}" @click="todo(index)"
              v-for="(item,index) in categoryDate.categoryL1List" :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="right_content" v-if="categoryDate.categoryL1List[curIndex]">
        <img :src="categoryDate.categoryL1List[curIndex].wapBannerUrl" alt="">
        <ul v-if="categoryDate.categoryL1List[curIndex]">
          <li v-for="(item,index) in categoryDate.categoryL1List[curIndex].subCateList" :key="index">
            <div>
              <img :src="item.wapBannerUrl" alt="">
              <div>{{item.name}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default{
  data () {
    return {
      curIndex: 0
    }
  },
  methods:{
    todo(index){
      this.curIndex=index
    }
  },
  computed:{
    ...mapState({
      categoryDate:state=>state.category.categoryDate
    })
  },
  watch:{
    categoryDate(){
      this.$nextTick(()=>{
        new BScroll('.left_nav',{
          scrollY:true,
          click:true
        })
      })
    }
  },
  async mounted () {
    await this.$store.dispatch("getMockCategory")
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .category_box
    width 100%
    padding-top 88px
    .category_header
      position fixed
      top 0
      left 0
      z-index 10
      width 100%
      height 88px
      display flex
      justify-content center
      align-content center
      background-color white
      border-bottom 1px solid #eee
      .search_box
        width 675px
        height 56px
        border-radius 8px
        background-color: #ededed
        display flex
        align-items center
        justify-content center
        margin-top 15px
        >div
          display flex
          align-items center
          >img
            width 28px
            height 28px
            margin-right 10px
          >span
            font-size 28px


    .cat_content
      width 100%
      font-size 28px
      overflow hidden
      background-color white
      .left_nav
        position fixed
        top 88px
        left 0
        width 162px
        max-height 1144px
        border-radius 1px solid #eee
        background-color white
        >ul
          width 100%
          >li
            width 100%
            height 50px
            margin-top 40px
            text-align center
            font-size 28px
            color #7e8c8d
            line-height 50px
            &:first-child
              margin-top 20px
            &.active
              color #b4282D
              border-left 6px solid #b4282D
      .right_content
        float right
        width 588px
        box-sizing border-box
        padding 15px 30px 100px
        font-size 28px
        >img
          width 528px
          height 192px
          background-color white
        >ul
          width 528px
          margin-top 20px
          display flex
          flex-wrap wrap
          height 1111px
          >li
            width 144px
            height 16px
            margin-right 32px
            >div
              >img
                width 144px
                height 144px
              >div
                width 144px
                height 72px
                text-align center
</style>

