<template>
  <div class="search">
      <input type="text" placeholder="请输入您想选择的城市" class="search-input"
       v-model="keyword"
      >
      <div class="search-content" v-show="keyword">
        <ul>
          <li v-for="item of list" :key="item.id"
           class="search-item border-bottom"
           @click="handleCityClick(item.name)">{{item.name}}</li>
          <li class="search-item border-bottom" v-show="hasNoData">没有找到符合条件的城市</li>
        </ul>
      </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let item in this.cities) {
          this.cities[item].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
      return this.list
    }
  }
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
  .search-content
   position :absolute
   top: 1.58rem
   bottom:0
   left: 0
   right 0
   background :#eee
   z-index :10
   .search-item
    height 0.5rem
    line-height :.5rem
    padding-left 0.2rem
    color:#666
    font-size:.28rem
    background :#fff

</style>
