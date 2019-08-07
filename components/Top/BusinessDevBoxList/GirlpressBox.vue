<template lang="pug">
.fukully-box
  BoxTemplate(:href="'https://girl-press.com'")
    p(slot="project")
      span CSVファイルから記事の自動投稿
    div(slot="overview")
      p 30万レコード100カラムのCSVファイルから記事を毎日自動投稿
      p 掲載期限切れ記事の自動削除
      p 既存記事は更新
    div(slot="assign")
      p DBへのCRUD操作(バルクインサートアップデートロジックを作成して速度向上)
      p DBのtable追加、修正
      p WordPressのテンプレート、関数を修正
      p crontabで自動化
      p テスト環境(Xserver)へのデプロイ
    div(slot="skill")
      p Laravel5、WordPress、Linux、PHP7、CSS3、HTML5、Xserver
</template>

<script>
import BoxTemplate from '@/components/Top/BusinessDevBoxList/BoxTemplate'

export default {
  name: 'GirlpressBox',
  components: {
    BoxTemplate
  }
}
</script>
