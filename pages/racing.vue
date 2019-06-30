<template lang="pug">
section.racing
  RacingData(
    v-if="getRaceState === 'ready'"
  )
  RacingTrack(
    v-if="getRaceState === 'racing'"
    @startMusic="startMusic"
    @finishMusic="finishMusic"
  )
  //- RacingTrack(
  //-   @startMusic="startMusic"
  //-   @finishMusic="finishMusic"
  //- )
  RacingMusic(
    :isMusic="isMusic"
  )
</template>
<script>
import BaseText from '@/components/Base/BaseText'
import BaseButton from '@/components/Base/BaseButton'
import RacingTrack from '@/components/Racing/RacingTrack'
import RacingData from '@/components/Racing/RacingData'
import RacingMusic from '@/components/Racing/RacingMusic'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'ColorCode',
  components: {
    BaseText,
    BaseButton,
    RacingTrack,
    RacingData,
    RacingMusic
  },
  data() {
    return {
      isMusic: {
        csikospost: false,
        cheers: false,
        gun: false
      }
    }
  },
  computed: {
    ...mapGetters('race-state', ['getRaceState'])
  },
  mounted() {
    // console.log(this.getRaceState)
  },
  methods: {
    startMusic() {
      this.isMusic.csikospost = true
      // console.log(this.isMusic);
      setTimeout(() => {
        this.isMusic.gun = true
      }, 3200)
    },
    finishMusic() {
      setTimeout(() => {
        this.cheersStart()
      }, 2000)
    },
    async cheersStart() {
      await this.csikospostFin()
      this.isMusic.cheers = true
    },
    csikospostFin() {
      this.isMusic.csikospost = false
    }
  }
}
</script>
<style lang="sass" scoped>
.racing
</style>
