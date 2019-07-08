<template lang="pug">
.racing-latest-data-common-modal
  #chartdiv
</template>
<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import sapporo_2018 from '@/static/sapporo_2018.json'

export default {
  name: 'RacingLatestDataCommonModal',
  props: {
    getRaceResults: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      sapporo_2018
    }
  },
  mounted() {
    this.drawChart()
    console.log(this.getRaceResults)
  },
  methods: {
    drawChart() {
      const chart = am4core.create('chartdiv', am4charts.XYChart)
      chart.data = this.sapporo_2018
      // x軸
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
      // グリッド間隔
      dateAxis.renderer.minGridDistance = 60
      // y軸
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      // 時系列データ
      const series = chart.series.push(new am4charts.LineSeries())
      series.name = 'temperature'
      series.dataFields.valueY = 'temperature'
      series.dataFields.dateX = 'date'
      series.tooltipText = '{valueY}'
      series.tooltip.pointerOrientation = 'vertical'
      // カーソルに追従するライン
      chart.cursor = new am4charts.XYCursor()
      chart.cursor.snapToSeries = series
      chart.cursor.xAxis = dateAxis
      // スクロールバー
      // chart.scrollbarY = new am4core.Scrollbar()
      chart.scrollbarX = new am4core.Scrollbar()
    }
  }
}
</script>
<style lang="sass" scoped>
.racing-latest-data-common-modal
  position: absolute
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
  p
    font-size: 28px
    line-height: 40px
    height: 40px
    background: pink
    padding-left: 50px
#chartdiv
  width: 100%
  height: 400px
</style>
