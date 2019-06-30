<template lang="pug">
section.racing-data
  button(
    @click="startRacing()"
  ) 出走(クリック)
  RacingLatestData
  RacingAchievementData

  BaseOverlay(v-if="getResultIsLoading || getAchievementIsLoading")
  BaseLoadingIcon(v-if="getResultIsLoading || getAchievementIsLoading")
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
  computed: {
    // ...mapGetters('runners', ['getRunners', 'getRunnerName']),
    ...mapGetters('race-result', ['getResultIsLoading']),
    ...mapGetters('achievement', ['getAchievementIsLoading'])
  },
  mounted() {
    // this.fetchRaceResults()
    // this.fetchRunnersData()
  },
  methods: {
    // ...mapActions('race-result', ['fetchRaceResults', 'postRaceResults']),
    ...mapActions('race-state', ['transitionRaceState']),
    // ...mapActions('runners', ['fetchRunnersData']),
    startRacing() {
      this.transitionRaceState('racing')
    }
  }
}
</script>

<style lang="sass" scoped>
.racing-data
  padding-top: 20px
  button
    border: 1px solid black
    width: 200px
    height: 40px
    background: blue
    color: white
    border-radius: 10px
    box-shadow: 3px 3px 0 gray
</style>
