<template lang="pug">
.base-overlay(
  :class="addClass"
)
</template>
<script>
export default {
  name: 'BaseOverlay',
  props: {
    addClass: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="sass" scoped>
.base-overlay
  background: #3A3B3ADD
  overflow: hidden
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 3
  &.side
    top: 60px
  &.loading
    background: black
</style>
