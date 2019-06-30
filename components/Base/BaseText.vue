<template lang="pug">
span.base-text(
  :style="styles"
  :class="addClass"
)
  slot
</template>

<script>
export default {
  name: 'BaseText',
  props: {
    size: {
      type: [String, Number],
      required: false,
      default: 14
    },
    color: {
      type: String,
      required: false,
      default: '#454545'
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
  }
}
</script>

<style lang="sass" scoped>
.base-text
  &.border
    border: 1px solid #00000000
    padding: 0 4px
</style>
