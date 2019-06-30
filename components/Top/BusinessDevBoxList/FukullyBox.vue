<template lang="pug">
.fukully-box
  BoxTemplate
    p(slot="project")
      span 福利厚生ポイントサービスの作成
    div(slot="overview")
      p ユーザは案件一覧から案件を選んで挑戦でき、達成するとポイントを獲得
      p ユーザはポイントを使用して景品一覧の中から景品を選んで交換できる
      p ユーザは自身のユーザ情報、ユーザポイント履歴、商品の交換履歴、案件達成履歴、発送状態を確認できる
      p 管理者はユーザ、景品、景品の発送、案件、案件の達成状況を管理できる
    div(slot="assign")
      p 全画面、全機能の作成
      p ・ユーザ画面(マイページ、景品一覧、商品詳細、案件一覧、案件詳細、ログイン)
      p ・管理者画面(ユーザ管理、案件管理、案件達成状況管理、景品管理、景品発送管理)
    div(slot="skill")
      p AmazonApi、楽天Api、Laravel5(PHP7)、CSS3、HTML5、Bootstrap4、JavaScript、MySql、heroku、vagrant
</template>

<script>
import BoxTemplate from '@/components/Top/BusinessDevBoxList/BoxTemplate'

export default {
  name: 'FukullyBox',
  components: {
    BoxTemplate
  }
}
</script>
