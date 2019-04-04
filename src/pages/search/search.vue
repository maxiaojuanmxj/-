<template>
  <div class="searchContent">
    <header class="top_search">
      <div class="input_label">
        <i class="iconfont icon-sousuo"></i>
        <input ref="search" v-model="value" type="text" placeholder="美妆护肤 女王专享7折起">
      </div>
      <p @click="$router.back()">取消</p>
    </header>
    <div class="bottom_title">热门搜索</div>
    <ul>
      <li v-for="(item,index) in search_data.hotKeywordVOList">
        <a href="##">{{item.keyword}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqsearch} from '../../api/index'
export default{
    data(){
      return{
        value:'',
        searchHotList:[]
      }
    },
  async mounted () {
    await this.$store.dispatch('getsearch')
    //获取请求数据
    const response=await reqsearch()
    console.log(response);
    this.searchHotList=response.data.hotKeywordVOList
    this.$refs.search.onkeydown=async (e)=>{
      if(e.keyCode===13){
        window.location.href=`http://m.you.163.com/search?keywordPrefix=${this.value}`
      }
    }


  },
  computed:{
    ...mapState({
      search_data:state=>state.search.search_data
    })
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.searchContent
  background-color white
  width 100%
  height 100%
  .top_search
    width 690px
    height 56px
    box-sizing border-box
    margin 20px 0 0 30px
    display flex
    justify-content space-between
    align-items center
    .input_label
      width 690px
      height 100%
      background-color #f4f4f4
      display flex
      /*justify-content center*/
      align-items center
      .iconfont
        font-size 35px
        margin 0 10px
      input
        font-size 30px
        background-color #f4f4f4
        outline 0 none
    p
      width 66px
      font-size 28px
      color #333
      margin-left 15px


  .bottom_title
    color #999
    font-size 28px
    margin 30px 0 0 30px
  ul
    padding 30px 0 0 30px
    font-size 28px
    display flex
    flex-wrap wrap
    li
      margin 0 32px 32px 0
      a
        margin-right 32px
        padding 8px 15px
        border 1px solid #999999
        height 46px
        line-height 46px
        text-align center
        font-size 28px

















</style>
