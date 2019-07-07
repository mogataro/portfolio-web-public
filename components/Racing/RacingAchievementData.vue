<template lang="pug">
div.racing-achievement-data
  div(v-if="getAchievement.length > 0")
    p 出走ランナーデータ
    div.table
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
      div.tr(
        v-for="(runner, index) in getAchievement"
        :key="runner.id"
        @click="runnerGraph(runner, index)"
        :class="{'selected': isRacingAchievementCommonModal && index === activeIndex}"
      )
        div.td
          p {{getRunnerName(runner.id)}}
          p.img
            img(:src="requireSrc(runner.id)" width="40px" height="40px")
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
      RacingAchievementCommonModal(
        v-if="isRacingAchievementCommonModal"
        @close="isRacingAchievementCommonModal = false"
        :runnerData="runnerData"
      )
  div(v-else)
    p ランナーデータがありません。

  
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
    getAchievement: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isRacingAchievementCommonModal: false,
      activeIndex: null,
      runnerData: {}
    }
  },
  methods: {
    dateFormat(dateTime) {
      return format(dateTime, 'M/D HH:mm')
    },
    requireSrc(id) {
      const file = this.getRunnerSrc(id)
      return require(`@/assets/img/gif/${file}`)
    },
    runnerGraph(runner, index) {
      const isRacingAchievementCommonModal = this.isRacingAchievementCommonModal
      if (!isRacingAchievementCommonModal) {
        const runnerData = {
          name: this.getRunnerName(runner.id),
          src: this.getRunnerSrc(runner.id),
          rank1_count: runner.rank1_count,
          rank2_count: runner.rank2_count,
          rank3_count: runner.rank3_count,
          rank4_count: runner.rank4_count,
          rank5_count: runner.rank5_count
        }
        this.runnerData = runnerData
        this.activeIndex = index
      }
      this.isRacingAchievementCommonModal = !isRacingAchievementCommonModal
    }
  }
}
</script>

<style lang="sass" scoped>
.racing-achievement-data
  padding: 25px 0
  .table
    border-bottom: 1px solid black
    .tr
      display: flex
      justify-content: space-between
      width: 100%
      border-top: 1px solid black
      &:last-child
        // border-bottom: 1px solid black
      &.selected
        box-shadow: 0 0 0 4px green inset
        cursor: default
      &+ .tr:hover
        box-shadow: 0 0 0 4px red inset
        cursor: pointer
        &.selected
          box-shadow: 0 0 0 4px green inset
          cursor: default
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
