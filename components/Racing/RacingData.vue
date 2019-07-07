<template lang="pug">
section.racing-data
  button(
    @click="startRacing()"
  ) 出走する
  button(
    @click="toggleData()"
  ) 
    p(v-if="dataType.achievement") 過去のレースデータを見る
    p(v-if="dataType.latest") ランナー情報を見る
  RacingLatestData(v-if="dataType.latest" :getRunnerName="getRunnerName" :getRunnerSrc="getRunnerSrc" :getRaceResults="getRaceResults")
  RacingAchievementData(v-if="dataType.achievement" :getRunnerName="getRunnerName" :getRunnerSrc="getRunnerSrc" :getAchievement="getAchievement")
</template>

<script>
import BaseOverlay from '@/components/Base/BaseOverlay'
import BaseLoadingIcon from '@/components/Base/BaseLoadingIcon'
import RacingLatestData from '@/components/Racing/RacingLatestData'
import RacingAchievementData from '@/components/Racing/RacingAchievementData'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'RacingData',
  components: {
    BaseOverlay,
    BaseLoadingIcon,
    RacingLatestData,
    RacingAchievementData
  },
  data() {
    return {
      dataType: {
        achievement: true,
        latest: false
      }
    }
  },
  computed: {
    ...mapGetters('race-result', ['getRaceResults']),
    ...mapGetters('achievement', ['getAchievement']),
    ...mapGetters('runners', ['getRunnerName', 'getRunnerSrc'])
  },
  methods: {
    ...mapActions('race-state', ['transitionRaceState']),
    startRacing() {
      this.transitionRaceState('racing')
    },
    toggleData() {
      const dataType = this.dataType
      this.dataType = {
        achievement: !dataType.achievement,
        latest: !dataType.latest
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.racing-data
  padding-top: 20px
  // min-height: 100vh
  position: relative
  button
    border: 1px solid black
    width: 200px
    height: 40px
    background: blue
    color: white
    border-radius: 10px
    box-shadow: 3px 3px 0 gray
    & + button
      margin-left: 10px
</style>
