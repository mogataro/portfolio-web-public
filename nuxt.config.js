// require('./package')

module.exports.meta = require('./package.json')
require('dotenv').config()

const API_URL =
  process.env.NODE_ENV == 'production' || process.env.APP_ENV == 'production'
    ? process.env.API_URL
    : 'http://127.0.0.1:8000/api'
const Birth_Day = process.env.Birth_Day
const My_Name = process.env.My_Name
const AdsenceId = process.env.AdsenceId

module.exports = {
  mode: 'spa',
  router: {
    base: '/'
  },
  head: {
    title: 'mogataro',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'モガ太郎のポートフォリオ'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://mogataro.com' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['~/assets/css/ress.css', '~/assets/css/reset.css'],
  plugins: [
    '~plugins/scroll.js',
    '~/plugins/axios',
    { src: '~plugins/ga.js', ssr: false },
    { src: '@/plugins/format', ssr: false }
  ],
  loading: '~/components/Main/loading.vue',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
    // [
    //   '@nuxtjs/google-adsense',
    //   {
    //     id: AdsenceId,
    //     pageLevelAds: true
    //   }
    // ]
  ],
  styleResources: {
    sass: ['@/assets/sass/import.sass', '~/assets/sass/anime.sass']
  },
  axios: {
    proxy: true,
    browserBaseURL: API_URL,
    credentials: true,
    init: (axios, ctx) => {
      axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'
    }
  },
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isClient) {
        config.module.rules.push({
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          loader: 'file-loader'
        })
      }
    }
  },
  env: {
    Birth_Day,
    My_Name
  },
  generate: {
    dir: 'dist'
  },
  server: {
    host: '0.0.0.0'
  }
}
