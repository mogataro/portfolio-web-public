<template lang="pug">
.portfolio-box
  p.portfolio-box__img
    img(src="@/assets/img/png/mogataro.png" width="100%")
  p.portfolio-box__text このWebサイトです。
    br
    | Nuxtで作成しました。
</template>

<script>
export default {
  name: 'PortfolioBox'
}
</script>

<style lang="sass" scoped>
.portfolio-box
  &__img
    width: 180px
    height: 180px
    margin: auto
    margin-top: 20px
    border-radius: 10px
    img
      border-radius: 10px
  &__text
    margin-top: 10px
    padding-left: 40px
</style>
