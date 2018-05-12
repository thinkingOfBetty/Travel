<template>
  <div class="container" @click="handleGalleryClick">
      <div class="wrapper">
          <swiper :options="swiperOption" >
            <swiper-slide v-for="(item,index) in imgs" :key="index">
                <img class="swiperImg galleryImg" :src="item">
            </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
      </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallery',
  props: {
    'imgs': Array
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>
<style scoped lang="stylus">
   .wrapper >>> .swiper-container
    overflow inherit
   .wrapper >>> .swiper-pagination
    position absolute
    bottom -2rem
    color #fff
   .container
    z-index 10
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    .wrapper
     position relative
     width 100%
     height 0
     padding-bottom 100%
     .galleryImg
      width 100%
</style>
