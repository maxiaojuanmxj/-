<template>
  <div>
    <div class="things_content_wrap">
      <div class="things_content">
        <div v-for="(section,index) in sections" :key="index">
          <ul class='UlTwo' v-for="(topic,index) in section.topics" :key="index" v-if="topic.type===2">
            <li>
              <div class="left_right_box">
                <div class="wrapper">
                  <div class="left_top">
                    <div class="line1">
                      <img :src="topic.avatar" alt="">
                      <span>{{topic.nickname}}</span>
                    </div>
                    <h3 class="line2 ellipsis">{{topic.title}}</h3>
                    <p class="line3">{{topic.subTitle}}</p>
                    <h6 class="line4">
                      <i class="iconfont icon-weibo"></i>
                      <span>{{topic.readCount}}K 人看过</span>
                    </h6>
                  </div>
                  <img :src="topic.picUrl" alt="" />
                </div>
              </div>
              <div class="split_box"></div>
            </li>
          </ul>
          <ul class="ULleft" v-for="(topic,index) in section.topics" :key="index" v-if="topic.type===0">
            <li>
              <div class="line_show_box">
                <div class="line1">
                  <img :src="topic.avatar" alt="">
                  <span>{{topic.nickname}}</span>
                </div>
                <p>{{topic.title}}</p>
                <img :src="topic.picUrl" alt="">
                <h6 class="line4">
                  <i class="iconfont icon-weibo"></i>
                  <span>{{topic.readCount}}K 人看过</span>
                </h6>
              </div>
              <div class="split_box"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {reqThingsManual} from '../../../api/index'
export default{
  data(){
    return{
      sections:[]
    }
  },
  async mounted(){
    const sections=await reqThingsManual()
    this.sections=sections.data
    console.log(this.sections)
  },
  watch:{
    sections(){
      this.$nextTick(()=>{
        new BScroll('.things_content_wrap')
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/reset.css"
  .things_content_wrap
    width 100%
    height 1000px
    box-sizing border-box
    padding 163px 0 100px 0
    margin-top 165px
    .things_content
      box-sizing border-box
      padding-top 10px
      width 100%
      /*height 3000px  不需要*/
      overflow hidden
      /*padding-top 30px*/
      background-color #fff
      .UlTwo
        .left_right_box
          width 100%
          box-sizing border-box
          padding 20px 0 10px 0
          background-color #fff
          .wrapper
            width 100%
            display flex
            .left_top
              width 445px
              height 278px
              padding-top 20px
              box-sizing border-box
              .line1
                width 100%
                margin 0 0 20px 30px
                font-size 28px
                img
                  display inline-block
                  width 40px
                  height 40px
                  border-radius 50%
                  margin 0 20px 0 0
                  vertical-align middle
                span
                  vertical-align middle
              .line2
                color #333
                font-size 36px
                line-height 50px
                margin 0 0 15px 30px
              .line3
                color #7f7f7f
                font-size 28px
                margin 0 0 30px 30px
            img
              width 278px
              height 278px
            .split_box
              width 20px
              height 20px
              background-color #f4f4f4


      .ULleft
        .line_show_box
          width 100%
          box-sizing border-box
          background-color white
          padding-top 20px
          .line1
            color #000
            margin 0 30px 20px
            font-size 28px
            img
              width 40px
              height 40px
              margin 0 20px 0 0
              border-radius 50%
              vertical-align middle
            span
              vertical-align middle
          p
            font-size 36px
            margin 0 30px 15px
          >img
            width 700px
            height 388px
            margin 0 30px 15px
</style>
