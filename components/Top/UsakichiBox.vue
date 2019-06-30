<template lang="pug">
.usakichi-box
  p.usakichi-box__img(:style="iconPosition")
    img(src="@/assets/img/gif/usakichi.gif")
  p.usakichi-box__text Nuxt+Laravel(API)で作成中のレースゲームです。
</template>

<script>
export default {
  name: 'UsakichiBox',
  data() {
    return {
      marginLeft: 40,
      defaultPositionTop: 8,
      positionTop: 8,
      jumpDirection: true,
      jumpSet: true,
      jumpUp: null,
      changeDirection: false,
      width: 90,
      height: 190,
      isIconMove: null
    }
  },
  computed: {
    iconPosition() {
      return {
        'margin-left': this.marginLeft + 'px',
        position: 'absolute',
        top: this.positionTop + 'px'
      }
    }
  },
  mounted() {
    setInterval(this.iconJump, 2000)
  },
  methods: {
    iconJump() {
      this.jumpSet = true
      if (this.jumpUp) clearInterval(this.jumpUp)
      this.jumpUp = setInterval(this.iconJumpAction, 30)
    },
    iconJumpAction(id) {
      if (!this.jumpSet) {
        clearInterval(this.jumpUp)
        return
      }
      // jumpした最大値のpositionのTop
      const maxUp = -20
      if (this.jumpDirection && this.positionTop >= maxUp) {
        this.positionTop -= 4
      } else if (
        !this.jumpDirection &&
        this.positionTop <= this.defaultPositionTop
      ) {
        this.positionTop += 4
      }
      if (this.positionTop <= maxUp) this.jumpDirection = false
      if (this.positionTop >= this.defaultPositionTop) {
        this.jumpDirection = true
        this.jumpSet = false
        clearInterval(this.jumpUp)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.usakichi-box
  position: relative
  &__img
    width: 182px
    height: 182px
  &__text
    position: absolute
    top: 210px
</style>
