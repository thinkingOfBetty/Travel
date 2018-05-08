<template>
<div>
  <div class="title">周末推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of list" :key='item.id'>
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
  props: {
    list: Array
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl';
  .title
   line-height: .7rem
   background: #eee
   font-size: .3rem
   text-indent:.4rem
  .item
   .item-img-wrapper
    overflow:hidden
    height :0
    padding-bottom:37.09%
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
