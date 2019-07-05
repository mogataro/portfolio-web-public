<template lang="pug">
.loading-page(v-if="loading")
  BaseOverlay(:addClass="'loading'")
  BaseLoadingIcon
  p loading...
</template>

<script>
import BaseOverlay from '@/components/Base/BaseOverlay'
import BaseLoadingIcon from '@/components/Base/BaseLoadingIcon'

export default {
  name: 'Loading',
  components: {
    BaseOverlay,
    BaseLoadingIcon
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="sass" scoped>
.loading-page
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(255, 255, 255, 0.8)
  text-align: center
  padding-top: 200px
  font-size: 30px
  z-index: 90
  p
    position: fixed
    bottom: 20px
    right: 20px
    color: white
    z-index: 91
</style>
