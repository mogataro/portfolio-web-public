<template lang="pug">
section.racing-data
  button(
    @click="startRacing()"
  ) 出走(クリック)
  RacingLatestData
  RacingAchievementData
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
  methods: {
    ...mapActions('race-state', ['transitionRaceState']),
    startRacing() {
      this.transitionRaceState('racing')
    }
  }
}
</script>

<style lang="sass" scoped>
.racing-data
  padding-top: 20px
  min-height: 100vh
  position: relative
  button
    border: 1px solid black
    width: 200px
    height: 40px
    background: blue
    color: white
    border-radius: 10px
    box-shadow: 3px 3px 0 gray
</style>
