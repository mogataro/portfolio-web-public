<template lang="pug">
button.base-button(
  :style="styles"
  :class="addClass"
  @click="onClick"
)
  slot
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    size: {
      type: [String, Number],
      required: false,
      default: 14
    },
    color: {
      type: String,
      required: false,
      default: ''
    },
    weight: {
      type: [String, Number],
      required: false,
      default: 600
    },
    hg: {
      type: [String, Number],
      required: false,
      default: ''
    },
    wz: {
      type: [String, Number],
      required: false,
      default: ''
    },
    ta: {
      type: String,
      required: false,
      default: 'left'
    },
    addClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    styles() {
      return {
        fontSize: this.size ? this.size + 'px' : '',
        color: this.color,
        fontWeight: this.weight,
        width: this.wz ? this.wz + 'px' : '',
        height: this.hg ? this.hg + 'px' : '',
        textAlign: this.ta
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" scoped>
.base-button
  outline: none
  border: 1px solid black
  border-radius: 2px
  line-height: 1
  padding: 2px
  &:active
    border-color: red
    box-shadow: 0 0 0 1px red
</style>
