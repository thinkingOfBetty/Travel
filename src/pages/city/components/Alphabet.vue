<template>
  <ul class="list" >
      <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>

  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.list
 display flex
 justify-content center
 flex-direction :column
 position:absolute
 right 0
 top:0
 bottom:0
 width .4rem
 .item
  color $bgColor
  line-height .4rem
  text-align center
</style>
