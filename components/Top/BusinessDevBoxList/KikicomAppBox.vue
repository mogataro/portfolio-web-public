<template lang="pug">
.fukully-box
  BoxTemplate(:href="'https://itunes.apple.com/jp/app/%E8%81%B4%E3%81%8D%E3%81%93%E3%82%80/id1439007285?mt=8'")
    p(slot="project")
      span Webサイトのガワネイティブアプリ化
    div(slot="overview")
      p Webサイトのガワネイティブアプリ化(Android、iOS)
    div(slot="assign")
      p ReactNativeとIonicで作成し、ReactNativeを採用
      p WebView作成
      p フッタータブボタン作成(各種画面遷移)
      p ビルド
      p 実機テスト
    div(slot="skill")
      p JavaScript、HTML、CSS、AndroidStudio、Xcode、ReactNative、Ionic
</template>

<script>
import BoxTemplate from '@/components/Top/BusinessDevBoxList/BoxTemplate'

export default {
  name: 'KikicomAppBox',
  components: {
    BoxTemplate
  }
}
</script>
