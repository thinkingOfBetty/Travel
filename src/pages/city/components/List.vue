<template>
  <div class="list" ref="wrapper" >
      <div>
          <div class="area">
        <div class="title border-topbottom">
            当前城市
        </div>
        <div class="button-list">
            <div class="button-wrapper">
                <button class="button">{{this.city}}</button>
            </div>

            </div>
        </div>
    <div class="area">
        <div class="title border-topbottom">
            热门城市
        </div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item of hot" :key="item.id">
                <button class="button"  @click="handleCityClick(item.name)">{{item.name}}</button>
            </div>
        </div>
    </div>
    <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">
          {{key}}
        </div>
          <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
              <div class="item border-bottom" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
          </div>
    </div>
</div>

  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  }

}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
   border-color :#ccc
  &:after
   border-cloor:#ccc
.border-bottom
  &:before
   border-color:#ccc
.list
 overflow :hidden
 position:absolute
 top:1.54rem
 left: 0
 right :0
 bottom:0
 .title
  height :.44rem
  line-height: .44rem
  padding-left:.2rem
  background :#eee
  font-size:.26rem
 .button-list
  overflow :hidden
  padding:.1rem .6rem .1rem .1rem
  .button-wrapper
   box-sizing :border-box
   width:33.3%
   padding: .1rem .1rem
   float :left
   .button
    width:100%
    background:#fff
    border-radius:.06rem
    border:.02rem solid #ccc
 .item-list
  .item
   line-height .72rem
   padding-left:.2rem
</style>
