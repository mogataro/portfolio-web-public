<template lang="pug">
transition(name="panel-hover")
  .panel-hover
    .panel-hover__link(v-if="!!gitUrlSecond")
      a.panel-hover__link-item-second(
        v-if="webUrl"
        @click="pageMove"
        :href="useWebUrl()"
      )
        p Web
      a.panel-hover__link-item-second(
        v-if="!!gitUrl"
        :href="gitUrl"
      )
        p(v-if="!!gitUrlSecond") GitHub
          br
          | (Front)
        p(v-else) GitHub
      a.panel-hover__link-item-second(
        v-if="!!gitUrlSecond"
        :href="gitUrlSecond"
      )
        p GitHub
          br
          | (API)
    .panel-hover__link(v-else)
      a.panel-hover__link-item(
        v-if="webUrl"
        @click="pageMove"
        :href="useWebUrl()"
      )
        p Web
      a.panel-hover__link-item(
        v-if="!!gitUrl"
        :href="gitUrl"
      )
        p GitHub
</template>
<script>
export default {
  name: 'PanelHover',
  props: {
    webUrl: {
      type: String,
      default: ''
    },
    gitUrl: {
      type: String,
      default: ''
    },
    gitUrlSecond: {
      type: String,
      default: ''
    }
  },
  methods: {
    useWebUrl() {
      let webUrl = this.webUrl
      const regex = new RegExp(/^http/)
      if (!regex.test(webUrl)) {
        return null
      }
      return webUrl
    },
    pageMove() {
      let webUrl = this.webUrl
      const regex = new RegExp(/^http/)
      if (!regex.test(webUrl)) this.$router.push(webUrl)
    }
  }
}
</script>
<style lang="sass" scoped>
.panel-hover
  width: 298px
  height: 298px
  border-radius: 10px
  background: rgba(black, 0.7)
  position: absolute
  top: 1px
  left: 1px
  border: 1px solid black
  box-shadow: 0 0 0 2px black
  &__link
    display: flex
    justify-content: space-around
    width: 300px
    height: 30px
    position: absolute
    top: 0
    bottom: 0
    margin: auto
    &-item
      width: 100px
      height: 30px
      line-height: 30px
      text-align: center
      border: 1px solid white
      color: white
      border-radius: 4px
      cursor: pointer
      &:hover
        color: $baseTabHoverFont
        border: 1px solid $baseTabHoverFont
        background: rgba(black, 0.7)
    &-item-second
      @extend .panel-hover__link-item
      width: 80px
      height: 50px
      display: flex
      justify-content: center
      align-items: center
      line-height: 20px
</style>
