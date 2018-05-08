<template>
  <div class="header">
    <router-link to='/'>
    <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header
 position :relative
 background :$bgColor
 height :$headerHeight
 line-height :$headerHeight
 text-align :center
 font-size:0.32rem
 color :#fff
 .back-icon
  position :absolute
  top:0
  left:0
  width :0.6rem
  color:#fff
  font-size :0.32rem

</style>
