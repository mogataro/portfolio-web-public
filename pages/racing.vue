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
  RacingResult(
    v-if="getRaceState === 'result'"
  )
  RacingMusic(
    :isMusic="isMusic"
  )
  div(v-if="getResultIsLoading || getAchievementIsLoading")
    p aaaaa 
  BaseOverlay(v-if="getResultIsLoading || getAchievementIsLoading")
  BaseLoadingIcon(v-if="getResultIsLoading || getAchievementIsLoading")
  CommonDialog(
    :addClass="'base'"
    v-if="dirty"
    @onCancelClicked="dirty = false"
  )
    p(slot="header") ※備考
    p(slot="body") 現在、徒競走ゲームは開発中のため、
      br
      | 実際の内容とは異なります。
</template>
<script>
import BaseText from '@/components/Base/BaseText'
import BaseButton from '@/components/Base/BaseButton'
import RacingTrack from '@/components/Racing/RacingTrack'
import RacingData from '@/components/Racing/RacingData'
import RacingResult from '@/components/Racing/RacingResult'
import RacingMusic from '@/components/Racing/RacingMusic'
import CommonDialog from '@/components/Common/CommonDialog'

import BaseOverlay from '@/components/Base/BaseOverlay'
import BaseLoadingIcon from '@/components/Base/BaseLoadingIcon'

import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'ColorCode',
  components: {
    BaseText,
    BaseButton,
    RacingTrack,
    RacingData,
    RacingResult,
    RacingMusic,
    CommonDialog,
    BaseOverlay,
    BaseLoadingIcon
  },
  data() {
    return {
      isMusic: {
        csikospost: false,
        cheers: false,
        gun: false
      },
      dirty: true //- モーダルに使用
    }
  },
  computed: {
    ...mapGetters('race-state', ['getRaceState']),
    ...mapGetters('race-result', ['getResultIsLoading']),
    ...mapGetters('achievement', ['getAchievementIsLoading'])
  },
  methods: {
    startMusic() {
      this.isMusic.csikospost = true
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
    },
    onCancelClicked() {}
  }
}
</script>
<style lang="sass" scoped>
.racing
  min-height: 100vh
</style>
