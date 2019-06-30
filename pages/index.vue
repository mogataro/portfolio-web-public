<template lang="pug">
section.index
  .index__container
    //- p
    //-   BaseText(:size="40") ゆっくりしてってね
    //- div.img
    //-   img(src="@/assets/img/svg/usako.svg")
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
  // .img
  //   border: 3px solid black
  //   border-radius: 20px
  //   margin: auto
  //   width: 300px
  //   height: 300px
</style>
