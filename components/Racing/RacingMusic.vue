<template lang="pug">
.racing-music
  audio#csikospost(v-if="isMusic.csikospost" preload="auto" autoplay)
    source(src="@/assets/music/csikospost.mp3" type="audio/mp3")
  audio#cheers(v-if="isMusic.cheers" preload="auto" autoplay)
    source(src="@/assets/music/cheers.mp3" type="audio/mp3")
  audio#gun(v-if="isMusic.gun" preload="auto" autoplay)
    source(src="@/assets/music/gun.mp3" type="audio/mp3")
</template>

<script>
export default {
  name: 'RacingMusic',
  props: {
    isMusic: {
      type: Object,
      default() {
        return {
          csikospost: false,
          cheers: false,
          gun: false
        }
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.racing-music
</style>
