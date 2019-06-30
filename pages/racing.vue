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
import RacingMusic from '@/components/Racing/RacingMusic'
import CommonDialog from '@/components/Common/CommonDialog'

import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'ColorCode',
  components: {
    BaseText,
    BaseButton,
    RacingTrack,
    RacingData,
    RacingMusic,
    CommonDialog
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
    },
    onCancelClicked() {}
  }
}
</script>
<style lang="sass" scoped>
.racing
</style>
