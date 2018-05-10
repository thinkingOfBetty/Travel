<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        请输入城市游玩主题</div>
      <router-link to='/city'>
      <div class="header-right" >
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
      </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left
   width: .64rem
   float:left
   .back-icon
    text-align: center
    font-size: 0.4rem
  .header-input
   padding-left: .1rem
   flex: 1
   background: #fff
   margin-top: 0.22rem
   height: 0.44rem
   color: #ddd
   margin-left: .2rem
   line-height: .44rem
   border-radius: .1rem
  .header-right
   color:#fff
   text-align: center
   float: right
   min-width: 1.04re
   padding:0 .1rem
   .arrow-icon
    color:#fff
    font-size: .24rem
    margin-left:-.04rem

</style>
