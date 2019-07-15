<template lang="pug">
.blog-box
  p.blog-box__img
    img(src="@/assets/img/gif/motoori.gif" width="100%")
  p.blog-box__img-quote
    span 上記イラスト(引用元:キリヌケ成層圏,作者名:加藤タカシ)
  p.blog-box__text 技術ブログで学んだことを
    br
    | アウトプットしています。
</template>

<script>
export default {
  name: 'BlogBox'
}
</script>

<style lang="sass" scoped>
.blog-box
  &__img
    width: 180px
    height: 180px
    margin: auto
    margin-top: 8px
    border-radius: 10px
    img
      border-radius: 10px
    &-quote
      font-size: 8px
      text-align: center
  &__text
    margin-top: 8px
</style>
