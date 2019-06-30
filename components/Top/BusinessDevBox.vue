<template lang="pug">
.business-dev-box
  .business-dev__box__container
    slot
</template>
<script>
import PanelHover from '@/components/Top/PanelHover'

export default {
  name: 'BusinessDevBox',
  components: {
    PanelHover
  },
  props: {
    panelName: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="sass" scoped>
.business-dev-box
  border: 4px solid gray
  border-radius: 10px
  margin-top: 20px
  position: relative
  &::before,
  &::after
    position: absolute
    top: -4px
    right: -4px
    bottom: -4px
    left: -4px
    z-index: 1
    content: ''
    transition: all .3s
  &::before
    border-top: 5px solid $animeBorder
    border-bottom: 5px solid $animeBorder
    border-radius: 10px
    transform: scale(0, 1)
  &::after
    border-right: 5px solid $animeBorder
    border-left: 5px solid $animeBorder
    border-radius: 10px
    transform: scale(1, 0)
  &:hover
    &::before,
    &::after
      transform: scale(1)
  &__container
    font-size: 20px
    line-height: 20px
    padding: 0 10px
</style>
