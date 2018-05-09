<template>
  <div class="search">
      <input type="text" placeholder="请输入您想选择的城市" class="search-input">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';
  .search
   height :0.72rem
   line-height :0.72rem
   background :$bgColor
   padding :0 .1rem
   .search-input
    width :100%
    text-align :center
    border-radius :.06rem
    color:#666
    padding : 0 .1rem
    box-sizing :border-box
</style>
