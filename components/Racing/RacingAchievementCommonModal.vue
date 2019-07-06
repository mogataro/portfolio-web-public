<template lang="pug">
.racing-achievement-common-modal
  BaseOverlay
  .racing-achievement-common-modal-main
    .header
      p.name なまえ：{{runnerData.name}}
      p.close(@click="close") とじる
    #chartdiv
</template>
<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import BaseOverlay from '@/components/Base/BaseOverlay'

export default {
  name: 'RacingAchievementCommonModal',
  components: {
    BaseOverlay
  },
  props: {
    runnerData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      chartData: [
        {
          rank: '1着',
          number: this.runnerData.rank1_count
        },
        {
          rank: '2着',
          number: this.runnerData.rank2_count
        },
        {
          rank: '3着',
          number: this.runnerData.rank3_count
        },
        {
          rank: '4着',
          number: this.runnerData.rank4_count
        },
        {
          rank: '5着',
          number: this.runnerData.rank5_count
        }
      ]
    }
  },
  mounted() {
    this.drawChart()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    drawChart() {
      const chart = am4core.create('chartdiv', am4charts.PieChart)
      // グラフデータ定義 Add data
      chart.data = this.chartData
      // シリーズ定義 Add and configure Series, reating a series, Regular Pie chart
      const pieSeries = chart.series.push(new am4charts.PieSeries()) //シリーズ生成
      pieSeries.dataFields.value = 'number' //Setting up series 値
      pieSeries.dataFields.category = 'rank' //Setting up series カテゴリ

      //凡例表示 add legend
      chart.legend = new am4charts.Legend()
      chart.legend.position = 'bottom'
      chart.legend.marginTop = 50
      chart.legend.marginBottom = 20

      // データラベルの表示内容変更 ************** //
      //スライスラベル コンテンツ spec05-1 Changing slice label content View_Total_Sales_formatted
      pieSeries.labels.template.text =
        '{category}：{value.value}回' + "({value.percent.formatNumber('#.')}%)"

      //スライスツールチップ コンテンツ spec05-2 Changing tooltip content
      pieSeries.slices.template.tooltipText =
        '{category}：{value.value}回' + "( {value.percent.formatNumber('#.')}%)"

      //凡例の値 spec05-3 Changing legend value
      chart.legend.valueLabels.template.text =
        '{value.value}回' + "({value.percent.formatNumber('#.')}%)"
    }
  }
}
</script>
<style lang="sass" scoped>
.racing-achievement-common-modal
  .racing-achievement-common-modal-main
    position: fixed
    min-width: 522px
    width: 90%
    height: 440px
    top: 0
    bottom: 0
    left: 0
    right: 0
    margin: auto
    background: white
    border: 3px orange solid
    border-radius: 4px
    z-index: 4
    .header
      display: flex
      justify-content: space-between
      height: 40px
      background: pink
      padding: 0 50px
      .name
        font-size: 28px
        line-height: 40px
      .close
        font-size: 28px
        line-height: 40px
        border-radius: 8px
        background: red
        cursor: pointer
        box-shadow: 0 2px 0 gray
    #chartdiv
      width: 100%
      height: 400px
</style>
