<template lang="pug">
.personal-dev
  .personal-dev__list
    PersonalDevBox(
      v-for="(panelItem, index) in panelList"
      :key="index"
      :panelName="panelItem.panelName" :isPanel="isPanel"
    )
      component(:is="panelItem.componentName")
</template>
<script>
import PersonalDevBox from '@/components/Top/PersonalDevBox'
import UsakoBox from '@/components/Top/PersonalDevBoxList/UsakoBox'
import UsakichiBox from '@/components/Top/PersonalDevBoxList/UsakichiBox'
import LineBotBox from '@/components/Top/PersonalDevBoxList/LineBotBox'
import PortfolioBox from '@/components/Top/PersonalDevBoxList/PortfolioBox'
import BlogBox from '@/components/Top/PersonalDevBoxList/BlogBox'

export default {
  name: 'PersonalDev',
  components: {
    UsakoBox,
    UsakichiBox,
    PersonalDevBox,
    LineBotBox,
    PortfolioBox,
    BlogBox
  },
  data() {
    return {
      panelList: [
        {
          panelName: 'portfolio',
          componentName: 'PortfolioBox'
        },
        {
          panelName: 'colorCode',
          componentName: 'UsakoBox'
        },
        {
          panelName: 'racing',
          componentName: 'UsakichiBox'
        },
        {
          panelName: 'lineBot',
          componentName: 'LineBotBox'
        },
        {
          panelName: 'blog',
          componentName: 'BlogBox'
        }
      ],
      isPanel: {
        portfolio: {
          header: 'ポートフォリオ',
          isHover: false,
          webUrl: 'https://mogataro.com',
          gitUrl: 'https://github.com/mogataro/portfolio-web-public'
        },
        colorCode: {
          header: 'カラーコード変換',
          isHover: false,
          webUrl: 'https://mogataro.com/colorcode',
          gitUrl: 'https://github.com/mogataro/portfolio-web-public'
        },
        racing: {
          header: '徒競走ゲーム',
          isHover: false,
          webUrl: 'https://mogataro.com/racing',
          gitUrl: 'https://github.com/mogataro/portfolio-web-public',
          gitUrlSecond: 'https://github.com/mogataro/portfolio-server'
        },
        lineBot: {
          header: 'LineBot (Node.jsで作成)',
          isHover: false,
          webUrl:
            'https://mogashiro.com/2019/05/23/linebot%e3%81%a7%e3%83%9b%e3%83%83%e3%83%88%e3%83%9a%e3%83%83%e3%83%91%e3%83%bcapi%e3%82%92%e5%8f%a9%e3%81%84%e3%81%a6%e5%ba%97%e5%90%8d%e6%a4%9c%e7%b4%a2%ef%bc%8b%e3%83%88%e3%83%bc%e3%82%af%e3%82%b0/',
          gitUrl: 'https://github.com/mogataro/samplelinebot'
        },
        blog: {
          header: 'motoori (技術ブログ)',
          isHover: false,
          webUrl: 'https://mogashiro.com'
        }
      }
    }
  },
  methods: {
    mouseover(panel) {
      this.isPanel[panel].isHover = true
    },
    mouseleave(panel) {
      this.isPanel[panel].isHover = false
    }
  }
}
</script>
<style lang="sass" scoped>
.personal-dev
  &__list
    display: flex
    flex-wrap: wrap
    justify-content: space-around
</style>
