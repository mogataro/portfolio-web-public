<template lang="pug">
#wrap
  TheHeader
  .main
    .container
      nuxt
    //- .adsense
    //-   adsbygoogle
</template>
<script>
import TheHeader from '@/components/Main/TheHeader'

export default {
  name: 'Default',
  components: {
    TheHeader
  }
}
</script>
<style lang="sass" scoped>
#wrap
  overflow: hidden
  .main
    background: $defBgColor
    width: 100%
    height: calc(100% - 60px)
    overflow: auto
    .container
      padding: 0 25px
      margin: auto
      min-width: 700px
      -webkit-overflow-scrolling: touch
      -webkit-transform: translateZ(0px)
      -webkit-transform: translate3d(0,0,0)
      -webkit-perspective: 1000
</style>
