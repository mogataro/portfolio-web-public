<template lang="pug">
section.color-code
  div.usako-field
    Canvas.canvas(:color="cColorCode")
    Usako(
      :mainColor="mainColor"
      :cColor="cColorCode"
      :rColor="rColorCode"
    )
    div.color-code__sample
      div.color-code__sample__item(:style="{ background: cColorCode}")
        div.color-code__sample__item_wrap
          div.title
            BaseText 補色
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") 16進数
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{cColorCode}}
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") R
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{cRgba.r}}
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") G
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{cRgba.g}}
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") B
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{cRgba.b}}
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") A
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{cRgba.a}}
      div.color-code__sample__item(:style="{ background: mainColor}")
        div.color-code__sample__item_wrap
          div.title_input
            BaseButton(
              @click="delVal"
            ) クリア
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") 16進数
            BaseTextbox(
              :name="'colorCode'"
              :value="colorCode"
              :addClass="'colorInput'"
              @input="onInput($event, 'colorCode')"
            )
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") R
            BaseTextbox(
              :name="'colorR'"
              :value="rgba.r"
              :addClass="'colorInput'"
              @input="onInput($event, 'colorR')"
            )
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") G
            BaseTextbox(
              :name="'colorG'"
              :value="rgba.g"
              :addClass="'colorInput'"
              @input="onInput($event, 'colorG')"
            )
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") B
            BaseTextbox(
              :name="'colorB'"
              :value="rgba.b"
              :addClass="'colorInput'"
              @input="onInput($event, 'colorB')"
            )
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") A
            BaseTextbox(
              :name="'colorA'"
              :value="rgba.a"
              :addClass="'colorInput'"
              @input="onInput($event, 'colorA')"
            )
      div.color-code__sample__item(:style="{ background: rColorCode}")
        div.color-code__sample__item_wrap
          div.title
            BaseText 反転色
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") 16進数
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{rColorCode}}
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") R
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{rRgba.r}}
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") G
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{rRgba.g}}
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") B
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{rRgba.b}}
          div.row
            BaseText(:size="12" :wz="70" :ta="'center'") A
            BaseText(:size="12" :weight="400" :wz="80" :addClass="'border'") {{rRgba.a}}
</template>
<script>
import BaseText from '@/components/Base/BaseText'
import BaseTextbox from '@/components/Base/BaseTextbox'
import BaseButton from '@/components/Base/BaseButton'
import Canvas from '@/components/ColorCode/Canvas'
import Usako from '@/components/ColorCode/Usako'

export default {
  name: 'ColorCode',
  components: {
    BaseText,
    BaseTextbox,
    BaseButton,
    Canvas,
    Usako
  },
  data() {
    return {
      rgba: {
        r: '238',
        g: '221',
        b: '239',
        a: ''
      },
      colorCode: '#EEDDFE',
      cRgba: {
        r: '222',
        g: '239',
        b: '221',
        a: ''
      },
      cColorCode: '#DEEFDD',
      rRgba: {
        r: '17',
        g: '34',
        b: '16',
        a: ''
      },
      rColorCode: '#112210',
      holeActive: false
    }
  },
  computed: {
    mainColor() {
      let mainColor = ''
      const color = this.colorCode
      if (color.slice(0, 1) === '#') {
        switch (color.length) {
          case 9:
          case 7:
          case 4:
            mainColor = color
            break
        }
      } else {
        switch (color.length) {
          case 8:
          case 6:
          case 3:
            mainColor = `#${color}`
            break
        }
      }
      return mainColor
    }
  },
  methods: {
    delVal() {
      this.colorCode = ''
      this.cColorCode = ''
      this.rColorCode = ''
      this.rgba = {
        r: '',
        g: '',
        b: '',
        a: ''
      }
      this.cRgba = {
        r: '',
        g: '',
        b: '',
        a: ''
      }
      this.rRgba = {
        r: '',
        g: '',
        b: '',
        a: ''
      }
    },
    onInput(input, item) {
      switch (item) {
        case 'colorCode':
          this.colorCode = input.value
          this.convertFromCodeToRGBA()
          break
        case 'colorR':
          this.rgba.r = input.value
          this.convertFromMainRGBAToCode()
          break
        case 'colorG':
          this.rgba.g = input.value
          this.convertFromMainRGBAToCode()
          break
        case 'colorB':
          this.rgba.b = input.value
          this.convertFromMainRGBAToCode()
          break
        case 'colorA':
          this.rgba.a = input.value
          this.convertFromMainRGBAToCode()
          break
      }
      this.complementaryReverseColor()
    },
    complementaryReverseColor() {
      const mainR = Number(this.rgba.r)
      const mainG = Number(this.rgba.g)
      const mainB = Number(this.rgba.b)
      const mainA =
        this.rgba.a !== null && this.rgba.a !== '' ? Number(this.rgba.a) : null

      //補色を求める
      const baseValue =
        Math.max(mainR, mainG, mainB) + Math.min(mainR, mainG, mainB)
      const complementaryR = baseValue - mainR
      const complementaryG = baseValue - mainG
      const complementaryB = baseValue - mainB
      const complementaryA = mainA

      this.cColorCode = this.convertFromRGBAToCode(
        complementaryR,
        complementaryG,
        complementaryB,
        complementaryA
      )
      this.cRgba.r = complementaryR
      this.cRgba.g = complementaryG
      this.cRgba.b = complementaryB
      this.cRgba.a = complementaryA

      //反転色を求める
      const reverceR = 255 - mainR
      const reverceG = 255 - mainG
      const reverceB = 255 - mainB
      const reverceA = mainA

      this.rColorCode = this.convertFromRGBAToCode(
        reverceR,
        reverceG,
        reverceB,
        reverceA
      )
      this.rRgba.r = reverceR
      this.rRgba.g = reverceG
      this.rRgba.b = reverceB
      this.rRgba.a = reverceA
    },
    convertFromCodeToRGBA() {
      // カラーコードをrgbaに変換
      let rgba = this.rgba
      let r
      let g
      let b
      let a
      let color =
        this.colorCode.slice(0, 1) === '#'
          ? this.colorCode.slice(1)
          : this.colorCode
      color = this.isValid('Hex', color) ? color : '000000'
      switch (color.length) {
        case 8:
          r = this.twoDigHexaToDec(color.slice(0, 2))
          rgba.r = r[1] * 16 + r[0]
          g = this.twoDigHexaToDec(color.slice(2, 4))
          rgba.g = g[1] * 16 + g[0]
          b = this.twoDigHexaToDec(color.slice(4, 6))
          rgba.b = b[1] * 16 + b[0]
          a = this.twoDigHexaToDec(color.slice(6, 8))
          rgba.a = a[1] * 16 + a[0]
          break
        case 6:
          r = this.twoDigHexaToDec(color.slice(0, 2))
          rgba.r = r[1] * 16 + r[0]
          g = this.twoDigHexaToDec(color.slice(2, 4))
          rgba.g = g[1] * 16 + g[0]
          b = this.twoDigHexaToDec(color.slice(4, 6))
          rgba.b = b[1] * 16 + b[0]
          rgba.a = ''
          break
        case 3:
          r = this.oneDigHexaToDec(color.slice(0, 1))
          rgba.r = r * 17
          g = this.oneDigHexaToDec(color.slice(1, 2))
          rgba.g = g * 17
          b = this.oneDigHexaToDec(color.slice(2, 3))
          rgba.b = b * 17
          rgba.a = ''
          break
      }
    },
    convertFromMainRGBAToCode() {
      this.colorCode = this.convertFromRGBAToCode(
        this.rgba.r,
        this.rgba.g,
        this.rgba.b,
        this.rgba.a
      )
    },
    convertFromRGBAToCode(R, G, B, A) {
      let color = ''
      let r = this.isValid('Dec', R) ? R : 0
      r = this.DecToHexa(r)
      let g = this.isValid('Dec', G) ? G : 0
      g = this.DecToHexa(g)
      let b = this.isValid('Dec', B) ? B : 0
      b = this.DecToHexa(b)
      let a = A !== null ? (this.isValid('Dec', A) ? A : null) : null
      a = a === null ? null : this.DecToHexa(a)
      color = `#${r}${g}${b}`
      if (A !== null && a !== null) {
        color = `${color}${a}`
      }
      return color
    },
    isValid(type, target) {
      // 正規表現でバリデーション
      const regex = {
        Dec: /^[0-9]+$/,
        Hex: /^[0-9a-fA-F]+$/
      }
      return regex[type].test(target)
    },
    DecToHexa(val) {
      val = val > 255 ? 255 : val
      // 10進数を16進数に変換
      let secondDig = Math.floor(val / 16)
      let firstDig = val % 16
      return `${this.numberDecToStrHexa(secondDig)}${this.numberDecToStrHexa(
        firstDig
      )}`
    },
    oneDigHexaToDec(val) {
      //1桁の16進数を10進数に変換
      val = this.stringHexaToNumDec(val)
      return val
    },
    twoDigHexaToDec(val) {
      //2桁の16進数を10進数に変換して配列に格納
      const secondDig = this.stringHexaToNumDec(val.slice(1, 2))
      const firstDig = this.stringHexaToNumDec(val.slice(0, 1))
      return [firstDig, secondDig]
    },
    stringHexaToNumDec(val) {
      //バリデーションおよびa-fを数値化
      switch (val) {
        case 'a':
        case 'A':
          val = 10
          break
        case 'b':
        case 'B':
          val = 11
          break
        case 'c':
        case 'C':
          val = 12
          break
        case 'd':
        case 'D':
          val = 13
          break
        case 'e':
        case 'E':
          val = 14
          break
        case 'f':
        case 'F':
          val = 15
          break
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          val = Number(val)
          break
        default:
          val = 0
          break
      }
      return val
    },
    numberDecToStrHexa(val) {
      switch (val) {
        case 10:
          val = 'A'
          break
        case 11:
          val = 'B'
          break
        case 12:
          val = 'C'
          break
        case 13:
          val = 'D'
          break
        case 14:
          val = 'E'
          break
        case 15:
          val = 'F'
          break
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          val = String(val)
          break
        default:
          val = ''
          break
      }
      return val
    }
  }
}
</script>
<style lang="sass" scoped>
.color-code
  padding-top: 20px
  .usako-field
    position: relative
  &__sample
    width: 100%
    display: flex
    position: absolute
    z-index: 0
    top: 0
    &__item
      height: 200px
      width: 200px
      border-radius: 6px
      border: 1px solid black
      margin: auto
      display: flex
      justify-content: center
      align-items: center
      &_wrap
        width: 160px
        height: 150px
        border: 1px solid black
        border-radius: 6px
        padding: 0 3px
        background: white
        .row
          display: flex
          margin-top: 3px
        .title
          text-align: center
          &_input
            height: 24px
            text-align: center
</style>
