<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img"
    :src="this.bannerImg">
    <div class="banner-info">
      <div class="banner-tittle">{{this.sightName}}</div>
      <div class="banner-icon">
        <span class="iconfont">&#xe643;</span>
        {{this.gallaryImgs.length}}
      </div>
    </div>
  </div>
  <fade-animation>
    <common-gallery v-show="showGallary" :imgs='gallaryImgs'
    @close="handleGalleryClose"></common-gallery>
  </fade-animation>
</div>
</template>
<script>
import CommonGallery from 'common/gallary/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGalleryClose () {
      this.showGallary = false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
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
