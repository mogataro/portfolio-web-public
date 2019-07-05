<template lang="pug">
transition(name="slide-menu")
  div.slide-menu
    p.slide-menu__title メニュー
    ul(
      class="slide-menu-item__sublist"
    )
      li(
        class="slide-menu-item__sublist-item"
        v-for="(item, index) in getMenu"
        :key="index"
        :class="{active: item.active}"
        @click="pageMove(index)"
      )
        nuxt-link(:to="item.path")
          p {{item.text}}
    p.slide-menu__title 外部リンク
    ul(
      class="slide-menu-item__sublist"
    )
      li(
        class="slide-menu-item__sublist-item"
        v-for="(item, index) in link"
        :key="index"
        @click="pageMove(index)"
      )
        a(:href="item.src") {{item.text}}

</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'SlideMenu',
  data() {
    return {
      link: [
        {
          text: 'My Blog',
          src: 'https://mogashiro.com'
        },
        {
          text: 'My GitHub',
          src: 'https://github.com/mogataro'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('pages', ['getMenu'])
  },
  methods: {
    ...mapActions('pages', ['pageMoving']),
    ...mapMutations('pages', ['updateMenu']),
    pageMove(index) {
      this.pageMoving(index)
      this.$emit('closeMenu')
    }
  }
}
</script>
<style lang="sass" scoped>
.slide-menu
  background: white
  height: 100%
  margin-top: 60px
  position: fixed
  left: 0
  top: 0
  z-index: 5
  border-right: 2px solid black
  &__title
    background: cadetblue
    width: 250px
    color: #fff
    font-size: 30px
    padding: 10px 0 10px 40px
    line-height: 1

.slide-menu-item
  &__sublist-item
    &:hover
      border-left: 5px solid gray
      border-right: 5px solid gray
      a
        padding-left: 35px
    &.active
      border-left: 5px solid red
      border-right: 5px solid red
      &:hover
        border-color: gray
      a
        padding-left: 35px
    a
      color: $defFontColor
      background: white
      display: inline-block
      font-size: 20px
      padding-left: 40px
      text-decoration: none
      width: 100%
      &:hover
        color: gray
</style>
