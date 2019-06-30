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
import AccountingBox from '@/components/Top/BusinessDevBoxList/AccountingBox'
import KikicomAppBox from '@/components/Top/BusinessDevBoxList/KikicomAppBox'
import KikicomBox from '@/components/Top/BusinessDevBoxList/KikicomBox'
import GirlpressBox from '@/components/Top/BusinessDevBoxList/GirlpressBox'
import IotBox from '@/components/Top/BusinessDevBoxList/IotBox'

export default {
  name: 'BusinessDev',
  components: {
    BusinessDevBox,
    FukullyBox,
    AccountingBox,
    KikicomAppBox,
    KikicomBox,
    GirlpressBox,
    IotBox
  },
  data() {
    return {
      panelList: [
        { componentName: 'IotBox' },
        { componentName: 'GirlpressBox' },
        { componentName: 'KikicomBox' },
        { componentName: 'KikicomAppBox' },
        { componentName: 'AccountingBox' },
        { componentName: 'FukullyBox' }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped></style>
