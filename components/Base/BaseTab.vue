<template lang="pug">
.base-tab(
  :class="{active: isActive}"
  @click="onClicked"
)
  .base-tab__left
  p.base-tab__text(
    v-text="text"
  )
  .base-tab__right
</template>
<script>
export default {
  name: 'BaseTab',
  props: {
    index: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onClicked() {
      this.$emit('onClick', this.index)
    },
    edit() {
      this.$emit('edit')
    }
  }
}
</script>
<style lang="sass" scoped>
.base-tab
  display: flex
  justify-content: space-between
  background-color: $baseTabInactive
  border-top: 3px solid $baseTabBorder
  border-bottom: 2px solid $baseTabBorder
  border-radius: 4px 4px 0 0
  width: 120px
  height: 33px
  text-align: center
  vertical-align: bottom
  &:hover
    background: $baseTabHoverBg
    cursor: pointer
    color: $baseTabHoverFont
  &.active
    background: $baseTabActive
    border-top: 3px solid $baseTabActiveTop
    border-bottom: 2px solid $baseTabActive
    color: $baseTabActiveTop
    cursor: default
    pointer-events: none
    &:hover
      @extends .active
  &__text
    width: 100%
    line-height: 28px
  &__left,
  &__right
    min-width: 2px
    width: 2px
    height: 30px
    background: $baseTabBorder
</style>
