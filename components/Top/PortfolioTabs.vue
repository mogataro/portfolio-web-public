<template lang="pug">
div.portfolio-tabs
  .portfolio-tabs__list
    BaseTab.portfolio-tabs__list-item(
      v-for="(item, index) in getTabs"
      :key="item.label"
      :index="index"
      :text="item.label"
      :isActive="item.isActive"
      @onClick="onClick"
      @edit="$emit('edit')"
    )
</template>
<script>
import BaseTab from '@/components/Base/BaseTab'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'PortfolioTabs',
  components: {
    BaseTab
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
.portfolio-tabs
  &__list
    display: flex
    min-width: 517px
    &-item
      margin-right: 4px
      &:last-child
        margin-right: 0
</style>
