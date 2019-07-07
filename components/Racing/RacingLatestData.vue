<template lang="pug">
div.racing-latest-data
  div(v-if="getRaceResults.length > 0")
    p 直近{{getRaceResults.length}}試合の結果
    div.tb
      div.th
        p.td 日付
        p.td 1着
        p.td 2着
        p.td 3着
        p.td 4着
        p.td 5着
      div.tr(v-for="raceResult in getRaceResults")
        div.td {{dateFormat(raceResult.created_at)}}
        div.td
          p {{getRunnerName(raceResult.rank1)}}
          p.img
            img(:src="requireSrc(raceResult.rank1)" width="80%")
        div.td
          p {{getRunnerName(raceResult.rank2)}}
          p.img
            img(:src="requireSrc(raceResult.rank2)" width="80%")
        div.td
          p {{getRunnerName(raceResult.rank3)}}
          p.img
            img(:src="requireSrc(raceResult.rank3)" width="80%")
        div.td
          p {{getRunnerName(raceResult.rank4)}}
          p.img
            img(:src="requireSrc(raceResult.rank4)" width="80%")
        div.td
          p {{getRunnerName(raceResult.rank5)}}
          p.img
            img(:src="requireSrc(raceResult.rank5)" width="80%")
  div(v-else)
    p 試合結果がありません。

</template>

<script>
import BaseText from '@/components/Base/BaseText'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import format from 'date-fns/format'

export default {
  name: 'RacingLatestData',
  components: {
    BaseText
  },
  props: {
    getRunnerName: {
      type: Array,
      default() {
        return []
      }
    },
    getRunnerSrc: {
      type: Array,
      default() {
        return []
      }
    },
    getRaceResults: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    dateFormat(dateTime) {
      return format(dateTime, 'M/D HH:mm')
    },
    requireSrc(id) {
      const file = this.getRunnerSrc(id)
      return require(`@/assets/img/gif/${file}`)
    }
  }
}
</script>

<style lang="sass" scoped>
.racing-latest-data
  padding: 25px 0
  .tb
    max-width: 500px
    min-width: 312px
    .tr
      display: flex
      justify-content: space-between
      width: 100%
      border-top: 1px solid black
      &:last-child
        border-bottom: 1px solid black
      .td
        width: 20%
        min-width: 52px
        text-align: center
        border-left: 1px solid black
        &:last-child
          border-right: 1px solid black
        .img
          width: 100%
    .th
      @extend .tr
      .td
        height: 25px
        line-height: 25px
</style>
