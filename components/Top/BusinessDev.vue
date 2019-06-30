<template lang="pug">
.business-dev
  .business-dev__list
    BusinessDevBox(
      v-for="(panelItem, index) in panelList"
      :key="index"
    )
      component(:is="panelItem.componentName")
</template>
<script>
import BusinessDevBox from '@/components/Top/BusinessDevBox'
import FukullyBox from '@/components/Top/BusinessDevBoxList/FukullyBox'

export default {
  name: 'BusinessDev',
  components: {
    BusinessDevBox,
    FukullyBox
  },
  data() {
    return {
      panelList: [
        { componentName: 'FukullyBox' },
        { componentName: 'FukullyBox' }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped></style>
