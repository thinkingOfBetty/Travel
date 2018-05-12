<template>
    <div class="detailHeader">
      <router-link to='/'>
       <div class="header-abs" v-show="showAbs">
            <span class="iconfont detail-back-icon">&#xe624;</span>
        </div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs">
            <div class="header" :style="opacityStyle">
                <router-link to='/'>
                    <div class="iconfont back-icon">&#xe624;</div>
                </router-link>
                 景点选择
        </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DeatailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showAbs = false
      }
      if (top < 60) {
        this.showAbs = true
      }
      const opacity = top / 140 > 1 ? 1 : top / 140
      this.opacityStyle.opacity = opacity
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
 <style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 .detailHeader
  overflow: hidden
  color: #fff
  .header-abs
   position: absolute;
   top: 0.1rem;
   left: 0.1rem;
   height: 0.72rem;
   line-height: 0.72rem;
   width: 0.72rem;
   text-align: center;
   color:#fff
  .header
   position :fixed
   top 0
   left 0
   right 0
   background :$bgColor
   height :$headerHeight
   line-height :$headerHeight
   text-align :center
   font-size:0.32rem
   color :#fff
   .back-icon
    position :absolute
    top:0
    left:0
    width :0.6rem
    color:#fff
    font-size :0.32rem
  .test
   height 50rem

</style>
