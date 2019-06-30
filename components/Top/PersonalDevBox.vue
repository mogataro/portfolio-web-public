<template lang="pug">
    .personal-dev__box(
      @mouseover="mouseover(panelName)"
      @mouseleave="mouseleave(panelName)"
    )
      .personal-dev__box__header
        p {{isPanel[panelName].header}}
      .personal-dev__box__content
        slot
      PanelHover(
        v-show="isPanel[panelName].isHover"
        :webUrl="isPanel[panelName].webUrl"
        :gitUrl="isPanel[panelName].gitUrl"
        :gitUrlSecond="isPanel[panelName].gitUrlSecond"
      )
</template>
<script>
import PanelHover from '@/components/Top/PanelHover'

export default {
  name: 'PersonalDevBox',
  components: {
    PanelHover
  },
  props: {
    panelName: {
      type: String,
      default: ''
    },
    isPanel: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    mouseover(panel) {
      this.isPanel[panel].isHover = true
    },
    mouseleave(panel) {
      this.isPanel[panel].isHover = false
    }
  }
}
</script>
<style lang="sass" scoped>
.personal-dev
  &__list
    display: flex
    flex-wrap: wrap
    justify-content: space-around
  &__box
    min-width: 300px
    width: 300px
    height: 300px
    border: 1px solid black
    border-radius: 10px
    margin-top: 20px
    position: relative
    &:hover
      // border: none
    &__header
      font-size: 20px
      height: 34px
      line-height: 34px
      padding-left: 10px
      background: $boxHeaderBg
      border-radius: 10px 10px 0 0
    &__content
      font-size: 20px
      line-height: 20px
      padding: 0 10px
</style>
