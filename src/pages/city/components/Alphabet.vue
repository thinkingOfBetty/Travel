<template>
  <ul class="list" ref="wrap">
      <li class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @click="handleLetterClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd">{{item}}</li>

  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      status: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.letter = e.target.innerHTML
      this.$emit('change', this.letter)
    },
    handleTouchStart () {
      this.status = true
    },
    handleTouchMove (e) {
      if (this.status === true) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.status = false
    }
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
