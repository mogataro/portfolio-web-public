<template lang="pug">
.portfolio-title
  img.portfolio-title__img(src="@/assets/img/png/checkbg.png" width="100%" height="100%")
  .text
    p.main モガ太郎のポートフォリオ
    p.sub I am a Web Engineer

</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'PortfolioTitle',
  components: {},
  computed: {
    ...mapGetters('tabs', ['getTabs'])
  },
  methods: {
    ...mapActions('tabs', ['selectTabs']),
    onClick(index) {
      this.selectTabs(index)
      this.$emit('onClick', index)
    }
  }
}
</script>
<style lang="sass" scoped>
.portfolio-title
  margin-bottom: 20px
  position: relative
  &__img
    height: 140px
    width: 100%
    min-width: 500px
    border-radius: 30px
  .text
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    margin: auto
    color: gray
    .main
      font-size: 50px
      line-height: 70px
    .sub
      font-size: 30px
      line-height: 60px
</style>
