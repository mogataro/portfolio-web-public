<template lang="pug">
div.the-header
  div.the-header-side
    TheSide
  p.the-header-text {{getTitle($route.path)}}
</template>

<script>
import TheSide from '@/components/Main/TheSide'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheHeader',
  components: {
    TheSide
  },
  computed: {
    ...mapGetters('pages', ['getTitle'])
  }
}
</script>

<style lang="sass" scoped>
.the-header
  width: 100vw
  background: black
  height: 60px
  display: flex
  align-items: center
  &-text
    font-size: 30px
    line-height: 1
    height: 30px
    color: white
    margin-left: 16px
  &-side
    margin-left: 16px
</style>
