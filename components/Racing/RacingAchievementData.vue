<template lang="pug">
div.racing-achievement-data
  p ランナーデータ
  div
    div.th
      div.td
        p 名前
      div.td
        p レース
        p 総回数
      div.td
        p 1着
        p 回数
      div.td
        p 2着
        p 回数
      div.td
        p 3着
        p 回数
      div.td
        p 4着
        p 回数
      div.td
        p 5着
        p 回数
      div.td
        p 勝率
    div.tr(v-for="runner in getAchievement")
      div.td
        p {{getRunnerName(runner.id)}}
        p.img
          img(:src="requireSrc(runner.id)" width="40px")
      div.td
        p {{runner.race_count}}
      div.td
        p {{runner.rank1_count}}
      div.td
        p {{runner.rank2_count}}
      div.td
        p {{runner.rank3_count}}
      div.td
        p {{runner.rank4_count}}
      div.td
        p {{runner.rank5_count}}
      div.td
        p {{runner.win_rate}}%

  //- 名前、iconのセルをクリックすると、そのランナー戦績をモーダル表示する
  RacingAchievementCommonModal(v-if="false")
</template>

<script>
import BaseText from '@/components/Base/BaseText'
import RacingAchievementCommonModal from '@/components/Racing/RacingAchievementCommonModal'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import format from 'date-fns/format'

export default {
  name: 'RacingAchievementData',
  components: {
    BaseText,
    RacingAchievementCommonModal
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('runners', ['getRunners', 'getRunnerName', 'getRunnerSrc']),
    ...mapGetters('race-result', ['getRaceResults']),
    ...mapGetters('race-state', ['getRaceState']),
    ...mapGetters('achievement', ['getAchievement'])
  },
  created() {
    this.fetchRunnersData()
    this.fetchAchievement()
  },
  mounted() {
    this.fetchRaceResults()
  },
  methods: {
    ...mapActions('race-result', ['fetchRaceResults', 'postRaceResults']),
    ...mapActions('race-state', ['transitionRaceState']),
    ...mapActions('runners', ['fetchRunnersData']),
    ...mapActions('achievement', ['fetchAchievement', 'postAchievement']),
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
.racing-achievement-data
  padding-bottom: 25px
  padding-top: 25px
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
      height: 40px
      line-height: 20px
</style>
