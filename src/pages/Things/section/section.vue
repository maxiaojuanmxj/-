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
                      <img src="https://yanxuan.nosdn.127.net/98c2a37d4e393f98370ada51202d8ed7.png" alt="">
                      <span>网易员工精选</span>
                    </div>
                    <h3 class="line2 ellipsis">跟着网易员工什么羊毛，又准又狠</h3>
                    <p class="line3">15款爆品限时特价，低至6.5折</p>
                    <h6 class="line4">
                      <i class="iconfont icon-weibo"></i>
                      <span>10.8K 人看过</span>
                    </h6>
                  </div>
                  <img src="https://yanxuan.nosdn.127.net/c963b95252d629ad0634a92b4d92457e.jpg" alt="" />
                </div>
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
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/reset.css"
  .things_content_wrap
    width 100%
    min-height 1332px
    box-sizing border-box
    padding 163px 0 100px 0
    .things_content
      width 100%
      max-height 1070px
      overflow hidden
      box-sizing border-box
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
              .line4
                color #999
                font-size 25px
                margin 0 30px
            img
              width 278px
              height 278px
            .split_box
              width 20px
              height 20px
              background-color #f4f4f4

        .split_box
          width 100%
          height 20px
          margin-top 20px
          background-color #f4f4f4

</style>
