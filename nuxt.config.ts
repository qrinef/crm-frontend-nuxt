import { Configuration } from '@nuxt/types'
import 'dotenv/config'

const config: Configuration = {
  mode: 'spa',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff'
      },
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600'
      },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicon/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~assets/css/app.css'
  ],

  plugins: [
    '@/plugins/ui-element',
    '@/plugins/ui-layout',
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
    plugins: ['@/plugins/auth.ts'],
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
