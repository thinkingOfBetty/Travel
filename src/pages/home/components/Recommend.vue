<template>
<div>
  <div class="title">本期推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key='item.id'>
      <img :src="item.imgUrl" class="item-img">
     <div class="item-msg">
       <div class="item-title">{{item.title}}</div>
       <p class="item-desc">{{item.desc}}</p>
       <button class="item-btn">详细信息</button>
     </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/5d/5d986aff376ff248a3.img.jpg_200x200_d1ff8bc0.jpg',
        title: '广州正佳海洋极地',
        desc: '赶紧去探索新世界'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/5d/5d986aff376ff248a3.img.jpg_200x200_d1ff8bc0.jpg',
        title: '广州正佳海洋极地世界',
        desc: '赶紧去探索新世界'
      }]
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl';
  .title
   margin-top:.2rem
   line-height: .7rem
   background: #eee
   font-size: .3rem
   text-indent:.4rem
  .item
   height:1.9rem
   display:flex
   .item-img
    padding:.1rem
    height:1.7rem;
   .item-msg
    flex:1
    padding :.1rem
    min-width :0
    .item-title
     font-size :.3rem
     line-height:.54rem
     ellipsis()
    .item-desc
     color:#ccc
     line-height:.4rem
     ellipsis()
    .item-btn
     background #ff9300
     padding:0 .21rem
     margin-top:.2rem
     color:#fff
     border-radius :.06rem

</style>
