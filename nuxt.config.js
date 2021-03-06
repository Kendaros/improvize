import messages from './i18n/messages'
import numberFormats from './i18n/numberFormats'
import config from './improvize.config'

export default {
  mode: 'universal',
  server: {
    // Uncomment to host server on local network
    // host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Improvize - Software solutions for music administration',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#31ab9b' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: config.languages,
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages,
          numberFormats
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    // }
  }
}
