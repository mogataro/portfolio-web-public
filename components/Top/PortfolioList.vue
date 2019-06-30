<template lang="pug">
.portfolio-list
  .portfolio-list__item(
    v-for="(tab, index) in getTabs"
    :key="tab.label"
  )
    Profile(v-if="tab.isActive && index === 0")
    Skill(v-if="tab.isActive && index === 1")
    PersonalDev(v-if="tab.isActive && index === 2")
    BusinessDev(v-if="tab.isActive && index === 3")
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import Profile from '@/components/Top/Profile'
import Skill from '@/components/Top/Skill'
import PersonalDev from '@/components/Top/PersonalDev'
import BusinessDev from '@/components/Top/BusinessDev'

export default {
  name: 'PortfolioList',
  components: {
    Profile,
    Skill,
    PersonalDev,
    BusinessDev
  },
  computed: {
    ...mapGetters('tabs', ['getTabs'])
  },
  methods: {
    ...mapActions('tabs', ['selectTabs']),
    onClick(index) {
      this.selectTabs(index)
      this.$emit('onClick', index)
    }
  }
}
</script>
<style lang="sass" scoped>
.portfolio-list
  margin-top: -2px
  width: 100%
  min-width: 500px
  min-height: 40px
  border-top: 2px solid $baseTabBorder
  border-left: 2px solid $baseTabBorder
  border-right: 2px solid $baseTabBorder
  border-bottom: 2px solid $baseTabBorder
  border-radius: 0 10px 10px 10px
  background: $baseTabActive
  padding: 5px 10px
  text-align: left
  line-height: 1
</style>
