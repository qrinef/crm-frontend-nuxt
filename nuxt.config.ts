import { Configuration } from '@nuxt/types'
import 'dotenv/config'

const config: Configuration = {
  mode: 'spa',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~assets/css/app.css'
  ],

  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios-accessor'
  ],

  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-dayjs-module'
  ],

  axios: {
    baseURL: process.env.API_URL || 'https://crm-backend-nest.qrinef.ru'
  },

  auth: {
    plugins: ['@/plugins/auth.js'],
    localStorage: false,
    resetOnError: true,
    redirect: {
      logout: '/login'
    },
    strategies: {
      local: {
        scheme: 'refresh',
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          refresh: { url: '/auth/refresh', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: false
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  typescript: {
    typeCheck: {
      eslint: true
    }
  },

  build: {
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    }
  }
}

export default config
