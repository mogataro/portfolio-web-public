<template lang="pug">
.skill
  .skill__list
    .skill__box
      .skill__box__header
        p デザイン・コーディング
      .skill__box__content
        .skill__box__content-item
          p HTML5
          p 業務/個人
        .skill__box__content-item
          p Pug
          p 業務/個人
        .skill__box__content-item
          p CSS3
          p 業務/個人
        .skill__box__content-item
          p Sass
          p 業務/個人
        .skill__box__content-item
          p Bootstrap4
          p 業務
    .skill__box
      .skill__box__header
        p フロントエンド
      .skill__box__content
        .skill__box__content-item
          p JavaScript
          p 業務/個人
        .skill__box__content-item
          p Nuxt(SPA)
          p 業務/個人
    .skill__box
      .skill__box__header
        p バックエンド
      .skill__box__content
        .skill__box__content-item
          p php7
          p 業務/個人
        .skill__box__content-item
          p Laravel5
          p 業務/個人
        .skill__box__content-item
          p Node.js
          p 個人
    .skill__box
      .skill__box__header
        p DB
      .skill__box__content
        .skill__box__content-item
          p MySQL
          p 業務/個人
    .skill__box
      .skill__box__header
        p サーバー
      .skill__box__content
        .skill__box__content-item
          p heroku
          p 個人
        .skill__box__content-item
          p xserver
          p 業務/個人
    .skill__box
      .skill__box__header
        p その他
      .skill__box__content
        .skill__box__content-item
          p 基本情報技術者
          p 合格
        .skill__box__content-item
          p wordpress
          p 業務/個人
        .skill__box__content-item
          p ReactNative
          p 業務
        .skill__box__content-item
          p vagrant
          p 業務
        .skill__box__content-item
          p Git
          p 業務/個人
        .skill__box__content-item
          p Slack
          p 業務/個人
          
</template>
<script>
export default {
  name: 'Skill',
  methods: {}
}
</script>
<style lang="sass" scoped>
.skill
  &__list
    display: flex
    flex-wrap: wrap
    justify-content: space-around
  &__box
    min-width: 300px
    width: 300px
    height: 300px
    border: 1px solid black
    border-radius: 10px
    margin-top: 20px
    &__header
      font-size: 20px
      height: 34px
      line-height: 34px
      padding-left: 10px
      background: $boxHeaderBg
      border-radius: 10px 10px 0 0
    &__content
      font-size: 25px
      line-height: 40px
      padding: 0 10px
      &-item
        display: flex
        justify-content: space-between
    &:last-child
      margin-bottom: 20px
</style>
