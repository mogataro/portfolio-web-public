<template lang="pug">
section.index
  .index__container
    PortfolioTitle
    PortfolioTabs
    PortfolioList
</template>
<script>
import BaseText from '@/components/Base/BaseText'
import PortfolioTabs from '@/components/Top/PortfolioTabs'
import PortfolioList from '@/components/Top/PortfolioList'
import PortfolioTitle from '@/components/Top/PortfolioTitle'

export default {
  name: 'Index',
  components: {
    BaseText,
    PortfolioTabs,
    PortfolioList,
    PortfolioTitle
  }
}
</script>
<style lang="sass" scoped>
.index
  &__container
    text-align: center
    padding: 25px 0
    min-width: 750px
    max-width: 1223px
    margin: auto
</style>
