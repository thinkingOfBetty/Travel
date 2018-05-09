<template>
  <div class="list" ref="wrapper">
      <div>
          <div class="area">
        <div class="title border-topbottom">
            当前城市
        </div>
        <div class="button-list">
            <div class="button-wrapper">
                <button class="button">北京</button>
            </div>

            </div>
        </div>
    <div class="area">
        <div class="title border-topbottom">
            热门城市
        </div>
        <div class="button-list">
            <div class="button-wrapper">
                <button class="button">北京</button>
            </div>
            <div class="button-wrapper">
                <button class="button">北京</button>
            </div>
            <div class="button-wrapper">
                <button class="button">北京</button>
            </div>
            <div class="button-wrapper">
                <button class="button">北京</button>
            </div>
            <div class="button-wrapper">
                <button class="button">北京</button>
            </div>
        </div>
    </div>
    <div class="area">
        <div class="title border-topbottom">
          A
        </div>
          <div class="item-list">
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
          </div>
          <div class="title border-topbottom">
          A
        </div>
          <div class="item-list">
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
          </div>
          <div class="title border-topbottom">
          A
        </div>
          <div class="item-list">
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
          </div>
          <div class="title border-topbottom">
          A
        </div>
          <div class="item-list">
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
              <div class="item border-bottom">啊拉尔</div>
          </div>
    </div>
</div>

  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.Scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
   border-color :#ccc
  &:after
   border-cloor:#ccc
.border-bottom
  &:before
   border-color:#ccc
.list
 overflow :hidden
 position:absolute
 top:1.54rem
 left: 0
 right :0
 bottom:0
 .title
  height :.44rem
  line-height: .44rem
  padding-left:.2rem
  background :#eee
  font-size:.26rem
 .button-list
  overflow :hidden
  padding:.1rem .6rem .1rem .1rem
  .button-wrapper
   box-sizing :border-box
   width:33.3%
   padding: .1rem .1rem
   float :left
   .button
    width:100%
    background:#fff
    border-radius:.06rem
    border:.02rem solid #ccc
 .item-list
  .item
   line-height .72rem
   padding-left:.2rem
</style>
