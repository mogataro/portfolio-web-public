<template lang="pug">
.fukully-box
  BoxTemplate
    p(slot="project")
      span 業務用Webシステムの開発
    div(slot="overview")
      p ダイレクトメールなどの発送業務の代行を行うための管理ツールの開発
      p Nuxt(フロント)、Laravel(Api)
    div(slot="assign")
      p 画面コーディング(Crome、FireFox、Safari、Edge、IE11)
      p UI設計、機能実装、環境構築
    div(slot="skill")
      p Nuxt(JavaScript)、TypeScript、Vuetify、Material Icons、Html5、Pug、Sass、Vuex、CSS3
</template>

<script>
import BoxTemplate from '@/components/Top/BusinessDevBoxList/BoxTemplate'

export default {
  name: 'DmBox',
  components: {
    BoxTemplate
  }
}
</script>
