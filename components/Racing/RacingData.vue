<template lang="pug">
section.racing-data
  button(
    @click="startRacing()"
  ) 出走
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
  button
    border: 1px solid black
</style>
