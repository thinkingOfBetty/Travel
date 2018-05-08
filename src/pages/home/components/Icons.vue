<template>
  <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="page of pages" :key='page.index'>
            <div class="icon" v-for="item of page" :key='item.id'>
                <div class="icon-img">
                    <img class="icon-img-content" :src='item.imgUrl'>
                </div>
                <div class="icon-desc">{{item.desc}}</div>
            </div>
        </swiper-slide>
      </swiper>

  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons >>> .swiper-container
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
  .icons
   margin-top:.1rem
   .icon
    position: relative;
    float: left;
    overflow: hidden;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img
        overflow: hidden;
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        padding: 0.1rem;
        box-sizing: border-box;

        .icon-img-content
            display: block;
            margin: 0.06rem auto;
            height: 90%;
            text-align: center;

    .icon-desc
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        height: 0.44rem;
        line-height: 0.44rem;
        color: $darkTextColor;
        ellipsis()

</style>
