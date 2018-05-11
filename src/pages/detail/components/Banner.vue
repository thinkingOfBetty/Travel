<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img"
    src="//img1.qunarzz.com/sight/p0/1507/9e/7b5e0a44cb0310280b1aeb2a8dd94de8.water.jpg_600x330_bfb39f14.jpg">
    <div class="banner-info">
      <div class="banner-tittle">长隆国际大马戏剧院</div>
      <div class="banner-icon">
        <span class="iconfont">&#xe643;</span>
        39
      </div>
    </div>
  </div>
  <common-gallery v-show="showGallary" :imgs='imgs'
  @close="handleGalleryClose"></common-gallery>
</div>
</template>
<script>
import CommonGallery from 'common/gallary/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGalleryClose () {
      this.showGallary = false
    }
  },
  data () {
    return {
      showGallary: false,
      imgs: [{
        id: '001',
        src: 'http://img1.qunarzz.com/sight/p0/1507/9e/7b5e0a44cb0310280b1aeb2a8dd94de8.water.jpg_r_800x800_502b38ed.jpg'
      }, {
        id: '002',
        src: 'http://img1.qunarzz.com/sight/p0/1502/84/841dafa5dc3bb3d5.water.jpg_r_800x800_ec3f0870.jpg'
      }, {
        id: '003',
        src: 'http://img1.qunarzz.com/sight/p0/1502/59/5923e32c4be99ffc.water.jpg_r_800x800_7428eb3c.jpg'
      }]
    }
  }
}
</script>
 <style lang="stylus" scoped>
.banner
 position relative
 overflow hidden
 height 0
 padding-bottom 55%
 .banner-img
  width 100%
 .banner-info
  display:flex
  position absolute
  left 0
  right 0
  bottom 0
  height .6rem
  line-height .6rem
  color #fff
  background linear-gradient( top, rgba(0,0,0,0) ,rgba(0,0,0,.6))
  .banner-tittle
   flex 1
   padding 0 .2rem
   font-size .35rem
  .banner-icon
   font-size .22rem
   padding-right .2rem
</style>
