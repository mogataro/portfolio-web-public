<template lang="pug">
div.profile
  .profile__icon
    .profile__icon__left
      .profile__icon__left-row
        .profile__icon__left-row-item
          p 愛称：
        .profile__icon__left-row-detail
          p {{myName}}
      .profile__icon__left-row
        .profile__icon__left-row-item
          p 年齢：
        .profile__icon__left-row-detail
          p {{myDate.old}}
      .profile__icon__left-row__img
        img.profile__icon__left-row__img-item(src="@/assets/img/png/mogataro.png" width="100%" height="100%")
    .profile__icon__right
      .profile__icon__right-row
        .profile__icon__right-row-item
          p 居住：
        .profile__icon__right-row-detail
          p 東京都
      .profile__icon__right-row
        .profile__icon__right-row-item
          p 趣味：
        .profile__icon__right-row-detail
          p 個人開発(PG)、アニメ、筋トレ、サイクリング<span class="an">(※1)</span>、ゲーム<span class="an">(※2)</span>
          p.an (※1)学生の頃は北海道から鹿児島まで自転車で日本縦断したり、富士チャレンジ300の男女混合チームエンデューロで優勝したりしました。
            br
            | チームエンデューロとは、コースをチームメンバで交代しながら走り、制限時間内の周回数をチーム同士で競いあう耐久レースです。
            br
            | 2018年には「美ら島オキナワCentury Run 2018」で160kmを完走しました。
          p.an (※2)エンジニアに転職してからはあまりやっていませんが、学生の頃はPS4の「Demon's Souls」で一番最初にソウルランキング１位になるほどやり込んでいました。
            br
            | また、前職のソーシャルゲームのカスタマーサポートでは、問合せ対応しているゲームをランキング上位に入る程やり込んでいました。
            br
            | 誰よりも仕様を理解すること、ユーザー目線に立って返信することを心がけていました。
  .profile__icon__bottom
    .profile__icon__bottom-item
      p 経験：
    .profile__icon__bottom-detail
      p Webエンジニア歴{{myDate.enHistory}}です。
        br
        | フロントエンドもサーバーサイドも触れるエンジニアを目指しています。
        br
        | SES会社にWebエンジニアとして転職してから、主にLaravelでの開発(サーバー、フロント)を副業込みで約10ヶ月行っていました。
        br
        | 入社して7ヶ月目から、常駐先でNuxt.js(フロント)での開発に携わっています。
        br
        | 2019年7月14日からは個人でReact.jsの勉強を始めました。
      
      p 転職前は、ソーシャルゲームのカスタマーサポートを3年間しておりました。
        br
        | お客様からいただくメールへの対応に加え、ワークフローやご意見レポートなどの資料作成、僕含めて5人チームの時は新人4人の育成もしていました。
        br
        | 新人育成では新人の作成した返信文の文章構成の修正、日本語や正しい仕様であるかなどの確認をしていました。
        br
        | その中で心がけていたことは、個性を生かしてニュアンスはあまり変えないようにしていたことです。
        br
        | AIでの自動対応が進む中、オペレータに必要なのはお客様の心情部分の汲み取り方など、人間らしさであると考えたためです。
        br
        | 実績としては、2016年の月初会にて、顧客満足度(アンケート評価)と対応件数において表彰、2017年6月と8月にクライアントからべストCS賞をいただきました。
  .profile__icon__bottom
    .profile__icon__bottom-item
      p 自己
    .profile__icon__bottom-detail
      p 僕は負けず嫌いです。
        br
        | ただ、世間は広くどんな分野でも上には上がいる現実です。
        br
        | カスタマーサポートでも表彰されはしましたが、すごい人は沢山いてとても敵わなかったです。
        br
        | カスタマーサポートで表彰されたのも、返信文は相談して作っていた訳ですから、個人の力ではありませんでした。
        br
        | なお、仕事において何かしら基準を設ければ比較や評価はできるとはいえ、チーム内での勝ち負けというのは本来はないと思っています。
        br
        | 競いあうことや評価は、モチベーションをあげるための手段だと思ってます。
        br
        | 大事なのは、お客様に何をしてあげられるのか、満足していただくために個人では何を努力するのかだと思います。
        br
        | どうしてもお客様に満足していただける対応をできないと感じたら、できる人に相談して力を借りてそこから学べばいいと考えます。
        br
        | 認め合える人がいて、励ましたり愚痴を聞いたり、何よりも一緒に楽しめる人がいる環境が切磋琢磨でき、個人もチームも成長すると考えています。
        br
        | そのため、僕は相手の考えを理解するように努め、仲間の立場に立って相手を思いやることを意識しています。
        br
        | それは、ユーザー目線にたって考えることにも繋がると思います。
        br
        | 僕はそういった環境で働けたら嬉しいです。
</template>
<script>
import format from 'date-fns/format'

export default {
  name: 'Profile',
  computed: {
    myDate() {
      //- エンジニアになった日
      const careerChangeYear = '2018'
      const careerChangeMonth = '07'
      const careerChangeDay = '02'

      //- 誕生日
      const myBirth = process.env.Birth_Day
      //- 今日
      const today = new Date()
      const year = String(today.getFullYear())
      const month =
        today.getMonth() + 1 < 10
          ? `0${String(today.getMonth() + 1)}`
          : String(today.getMonth() + 1)
      const day =
        today.getDate() < 10
          ? `0${String(today.getDate())}`
          : String(today.getDate())

      let Y = year - careerChangeYear
      let M = month - careerChangeMonth
      const D = day - careerChangeDay

      if (D >= 15) M = M + 1
      if (M < 0) {
        Y = Y - 1
        M = M + 12
      }

      Y = Y < 1 ? '' : Y + '年'
      M = M < 1 ? '' : M + 'ヶ月'

      const result = {
        //- 年齢
        old: Math.floor((`${year}${month}${day}` - myBirth) / 10000) + '歳',
        //- エンジニア歴
        enHistory: Y + M
      }

      return result
    },
    myName() {
      return process.env.My_Name
    }
  }
}
</script>
<style lang="sass" scoped>
.profile
  color: $defFontColor
  &__icon
    display: flex
    &__left
      padding-top: 5px
      width: 150px
      &-row
        display: flex
        margin-bottom: 5px
        &-item
          width: 50px
        &-detail
          width: calc(100% - 50px)
        &__img
          height: 150px
          &-item
            border-radius: 10px
    &__right
      width: calc(100% - 150px)
      padding: 5px 0 5px 25px
      &-row
        display: flex
        &-item
          width: 50px
        &-detail
          width: calc(100% - 50px)
    &__bottom
      display: flex
      margin-top: 12px
      &-item
        width: 50px
      &-detail
        width: calc(100% - 50px)
        p:not(:first-child)
          margin-top: 15px
  p
    line-height: 24px
    &.hogehoge
      font-size: 13px
      line-height: 15px
  .an
    font-size: 13px
    font-weight: 500px
    line-height: 1
    margin-top: 13px
</style>
