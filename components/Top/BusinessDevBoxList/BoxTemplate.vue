<template lang="pug">
.box-template
  .box-template__title
    slot(name="project")
    p.box-template__title-link(v-if="!!href")
      a(:href="href") Webページへ
  .box-template__body
    p.box-template__body-title 概要・要件
    .box-template__body-body
      slot(name="overview")
  .box-template__body
    p.box-template__body-title 担当内容
    .box-template__body-body
      slot(name="assign")
  .box-template__body
    p.box-template__body-title スキル・ツール
    .box-template__body-body
      slot(name="skill")
</template>

<script>
export default {
  name: 'BoxTemplate',
  props: {
    href: {
      type: String,
      default: ''
    }
  },
  data() {
    return []
  }
}
</script>

<style lang="sass" scoped>
.box-template
  padding: 5px 10px
  &__title
    display: flex
    justify-content: space-between
    height: 30px
    font-size: 20px
    line-height: 30px
    border-bottom: 2px solid darkgreen
    &-link
      background: white
      border: 2px solid darkgreen
      border-bottom: none
      border-radius: 4px 4px 0 0
      cursor: pointer
      background: green
      &:hover
        background: rgba(green, 0.7)
        a,
        a:visited
          color: rgba(white, 0.8)
      a,
      a:visited
        color: white
        padding: 0 10px
        position: relative
        z-index: 3
  &__body
    padding: 10px 0px
    border-bottom: 2px solid darkgreen
    &-title
      display: inline-block
      padding-bottom: 5px
    &-body
      padding: 0 10px
</style>
