<template>
 <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key='item.id'>
        <img class="swiperImg" :src='item.imgUrl'>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true // 使得再往前或者再往后拖的时候不会出现空白
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/a8/31be8a58c2556302.jpg_750x200_0dda540c.jpg'
      }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
 .wrapper >>> .swiper-pagination-bullet-active
  background : #fff
 .wrapper
  overflow :hidden
  width :100%
  height :0
  padding-bottom :25%
  background :#eee
  .swiperImg
   width:100%
</style>
