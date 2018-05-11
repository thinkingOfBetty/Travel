<template>
    <div class="list">
        <div class="item border-bottom" v-for="(item,index) of list" :key="index" >
            <div class="item-title-icon"></div>
            <div class="item-title">{{item.title}}</div>
            <div v-if="item.adult" class="item-adult">
              <detail-list :list="item.adult"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    'list': Array
  }
}
</script>
 <style lang="stylus" scoped>
 @import '~styles/varibles.styl'
.border-bottom
  &:before
   border-color:#ccc
.item
 position relative
 .item-title
  height .8rem
  line-height .8rem
  padding-left .5rem
  font-size .32rem
 .item-title-icon
  display: inline-block;
  position: absolute;
  width: .36rem;
  height: .36rem;
  top: .26rem;
  left: .1rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  margin-right: .1rem;
  background-size: .4rem 3rem;
 .item-adult
  padding 0 .2rem
</style>
