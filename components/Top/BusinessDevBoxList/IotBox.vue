<template lang="pug">
.fukully-box
  BoxTemplate
    p(slot="project")
      span 農業IoT
    div(slot="overview")
      p 農場のセンサー情報をタブレットで確認、PCで機器の設定をするツール開発
      p Nuxt(フロント)、Laravel(Api)
    div(slot="assign")
      p 画面コーディング(iPad safari、Crome、FireFox、Safari、Edge)
      p 機能実装
      p バグ修正
      p webpack環境構築
    div(slot="skill")
      p Nuxt(JavaScript)、Html5、Pug、Sass、Vuex、CSS3、Photoshop、Laravel(PHP)
</template>

<script>
import BoxTemplate from '@/components/Top/BusinessDevBoxList/BoxTemplate'

export default {
  name: 'IotBox',
  components: {
    BoxTemplate
  }
}
</script>
