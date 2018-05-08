<template>
<div>
  <div class="title">周末推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key='item.id'>
     <div class="item-img-wrapper">
         <img :src="item.imgUrl" class="item-img">
     </div>

     <div class="item-msg">
       <div class="item-title">{{item.title}}</div>
       <p class="item-desc">{{item.desc}}</p>
     </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/50/07fa9343791682.jpg_r_640x214_c8c3d798.jpg',
        title: '广州正佳海洋极地',
        desc: '赶紧去探索新世界'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/50/07fa9343791682.jpg_r_640x214_c8c3d798.jpg',
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
   .item-img-wrapper
    overflow:hidden
    height :0
    padding-bottom:33.4%
    .item-img
     width:100%
   .item-msg
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
</style>
