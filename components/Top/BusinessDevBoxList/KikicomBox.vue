<template lang="pug">
.fukully-box
  BoxTemplate(:href="'https://kikikom.com'")
    p(slot="project")
      span スクレイピングして記事の自動投稿
    div(slot="overview")
      p 毎日イベント情報をスクレイピングして自動投稿
      p 開催日を過ぎたイベント情報は記事から削除
      p 既存記事は更新
    div(slot="assign")
      p Laravelでイベント情報をスクレイピングで取得
      p DBへのCRUD操作
      p DBのtable追加、修正
      p WordPressのテンプレート、関数を修正
      p crontabで自動化
      p 作成したプログラムをクライアントが改修できるように説明資料作成
      p 本番(Xserver)へのデプロイ
      p 運用(バグ修正、スクレイピング先サイトの追加など)
    div(slot="skill")
      p Laravel5、WordPress、Linux、PHP7、CSS3、HTML5、Xserver
</template>

<script>
import BoxTemplate from '@/components/Top/BusinessDevBoxList/BoxTemplate'

export default {
  name: 'KikicomBox',
  components: {
    BoxTemplate
  }
}
</script>
