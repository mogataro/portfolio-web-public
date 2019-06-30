<template lang="pug">
.fukully-box
  BoxTemplate
    p(slot="project")
      span 会計webサービスの機能追加
    div(slot="overview")
      p 見積書、請求書の印刷画面に社印を貼り付ける
    div(slot="assign")
      p 見積書、請求書の画面修正
      p 社印画像のアップドードフォーム作成
    div(slot="skill")
      p CodeIgniter(PHP)、CSS、HTML
</template>

<script>
import BoxTemplate from '@/components/Top/BusinessDevBoxList/BoxTemplate'

export default {
  name: 'AccountingBox',
  components: {
    BoxTemplate
  }
}
</script>
