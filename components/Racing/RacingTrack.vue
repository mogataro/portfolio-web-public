<template lang="pug">
.racing-track(ref="racing-track")
  .racing(v-if="!isPodium")
    .racing-track-course(
      v-for="runner in getRunners"
      :key="runner.id"
    )
      div(
        :style="{marginLeft: `${runner.moveDistance}px`}"
        :class="`runner${runner.id}`"
      )
        img.runner-img(
          :src="requireSrc(runner.src)"
          :width="imgLength"
          :height="imgLength"
        )
        p.runner-name(
          :style="{width: `${imgLength}px`}"
        )
          BaseText {{runner.name}}

  .podium(v-if="isPodium")
    .img
      img(src="@/assets/img/png/podium.png" height="100%")
    .second(v-if="!!rank2")
      BaseText {{rank2.name}}
      img(
        :src="requireSrc(rank2.src)"
        :width="imgLength"
        :height="imgLength"
      )
    .first(v-if="!!rank1")
      BaseText {{rank1.name}}
      img(
        :src="requireSrc(rank1.src)"
        :width="imgLength"
        :height="imgLength"
      )
    .third(v-if="!!rank3")
      BaseText {{rank3.name}}
      img(
        :src="requireSrc(rank3.src)"
        :width="imgLength"
        :height="imgLength"
      )
</template>

<script>
import BaseText from '@/components/Base/BaseText'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'RacingTrack',
  components: {
    BaseText
  },
  data() {
    return {
      imgLength: 60,
      isRacing: null,
      changeDistance: null,
      isMusic: {
        csikospost: false,
        cheers: false,
        gun: false
      },
      ranking: [],
      isPodium: false
    }
  },
  computed: {
    ...mapGetters('runners', ['getRunners']),
    ...mapGetters('race-result', ['getRaceResults']),
    rank1() {
      const rank = this.getRunners.filter(runner => {
        return runner.id === this.ranking[0]
      })[0]
      return rank
    },
    rank2() {
      const rank = this.getRunners.filter(runner => {
        return runner.id === this.ranking[1]
      })[0]
      return rank
    },
    rank3() {
      const rank = this.getRunners.filter(runner => {
        return runner.id === this.ranking[2]
      })[0]
      return rank
    },
    rank4() {
      const rank = this.getRunners.filter(runner => {
        return runner.id === this.ranking[3]
      })[0]
      return rank
    },
    rank5() {
      const rank = this.getRunners.filter(runner => {
        return runner.id === this.ranking[4]
      })[0]
      return rank
    },
    distance() {
      if (!!this.changeDistance) return this.changeDistance
      return document.getElementsByClassName('racing-track')[0].clientWidth
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  mounted() {
    this.startRacing()
    this.fetchRunnersData()
    this.fetchRaceResults()
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapActions('runners', ['fetchRunnersData', 'runnerMove']),
    ...mapActions('race-result', ['fetchRaceResults', 'postRaceResults']),
    ...mapActions('achievement', ['fetchAchievement', 'postAchievement']),
    requireSrc(file) {
      // let src = file.replace('@/assets/img/gif/', '')
      return require(`@/assets/img/gif/${file}`)
    },
    handleResize() {
      this.changeDistance = document.getElementsByClassName(
        'racing-track'
      )[0].clientWidth
    },
    startRacing() {
      this.$emit('startMusic')
      setTimeout(() => {
        this.isRacing = setInterval(this.racing, 100)
      }, 3200)
    },
    racing() {
      let distance = this.distance - this.imgLength
      let isRacing = this.isRacing

      const finish = this.getRunners.find(runner => {
        return runner.moveDistance !== distance
      })

      if (finish === undefined) {
        this.$emit('finishMusic')
        clearInterval(this.isRacing)
        this.resultSave()
        setTimeout(() => {
          this.isPodium = true
        }, 2000)
      } else {
        this.runnerMove([distance, this.ranking])
      }
    },
    resultSave() {
      try {
        const raceResult = {
          rank1: this.rank1.id,
          rank2: this.rank2.id,
          rank3: this.rank3.id,
          rank4: this.rank4.id,
          rank5: this.rank5.id
        }
        this.postRaceResults(raceResult)

        const achievement = [
          { runner_id: this.rank1.id, rank: 1 },
          { runner_id: this.rank2.id, rank: 2 },
          { runner_id: this.rank3.id, rank: 3 },
          { runner_id: this.rank4.id, rank: 4 },
          { runner_id: this.rank5.id, rank: 5 }
        ]
        this.postAchievement(achievement)
      } catch (e) {
        // if (e.response.status === 400) {
        console.log('結果登録エラー')
        // }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.racing-track
  width: 100%
  height: 100%
  margin: auto
  &-course
   height: 100px
   border-top: 1px solid black
   &:last-child
     border-bottom: 1px solid black

button
  width: 40px
.runner-img
  display: block
.runner-name
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
  text-align: center

.podium
  height: 387px
  min-width: 300px
  background: #d1f1f1
  position: relative
  .img
    height: 387px
    width: 300px
    margin: auto
.second
  width: 60px
  position: absolute
  right: 210px
  left: 0
  margin: auto
  bottom: 100px
  text-align: center
.first
  width: 60px
  position: absolute
  right: 0
  left: 0
  margin: auto
  bottom: 137px
  text-align: center
.third
  width: 60px
  position: absolute
  right: 0
  left: 210px
  margin: auto
  bottom: 90px
  text-align: center
</style>
