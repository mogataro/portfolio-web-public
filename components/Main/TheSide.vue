<template lang="pug">
div.side
  div(
    class="side__button"
    @click="toggleMenu('toggle')"
  )
    MenuIcon(
      :isActive="!isActive"
    )
  SlideMenu(
    class="side__slide-menu"
    v-show="isActive"
    @closeMenu="toggleMenu('close')"
  )
  BaseOverlay(
    v-if="isActive"
    :addClass="'side'"
  )
</template>
<script>
import SlideMenu from '@/components/Main/SlideMenu'
import MenuIcon from '@/components/Main/MenuIcon'
import BaseOverlay from '@/components/Base/BaseOverlay'

export default {
  name: 'TheSide',
  components: {
    SlideMenu,
    MenuIcon,
    BaseOverlay
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu(action) {
      switch (action) {
        case 'toggle':
          this.isActive = !this.isActive
          break
        case 'close':
          this.isActive = false
          break
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.side
  &__button
    height: 40px
    width: 40px
    cursor: pointer
</style>
