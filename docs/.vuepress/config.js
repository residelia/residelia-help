const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ayuda',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: 'https://s3.eu-west-1.amazonaws.com/residelia.resources/logos/residelia_128x128.jpg',
    nav: [
      {
        text: 'Guía de Usuario',
        link: '/'
      },
      {
        text: 'Guía de Proveedores',
        link: '/providers/Info'
      },
      {
        text: 'FAQs',
        link: '/Faqs/'
      }
    ],
      // {
      //   text: 'Languages',  De esta manera podríamos hacer un un combo de opciones dentro del navbar
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }

    sidebar: {
      '/providers/': [
         {
          title: 'Introducción',
          path: '/providers/Info',
          collapsable: false
         }

      ],
      '/Faqs/': [
          {
            title: 'Plataforma',
            collapsable: false,
            children:[
              '/Faqs/Platform/Assets',
              '/Faqs/Platform/Users'
            ]
          },
          {
            title: 'Valoración',
            collapsable: false,
            children:[
              '/Faqs/Valuation/ValuationAlgorithm'
            ]
          },



      ],

      '/': [
        {
          title: 'Introducción',
          path: '/',
          collapsable: false,
         },
        {
          title: 'Carteras',
          path: '/Portfolios/',
          collapsable: false,
          children:[
            '/Portfolios/CreatePortfolio',
            '/Portfolios/Enrichment',
            '/Portfolios/Valuation'

          ]
        },
        {
          title: 'Activos',
          path: '/Assets/',
          collapsable: false,
          children:[
            '/Assets/CreateAsset',
            '/Assets/Map',
            '/Assets/Groups'
          ]
        },
        {
          title: 'Vista del Activo',
          path: '/AssetView/',
          collapsable: false,
          children:[
            '/AssetView/Info',
            '/AssetView/Valuation',
            '/AssetView/Management',
            '/AssetView/Task',
            '/AssetView/Docs',
            '/AssetView/History'
          ]
        },
        {
          title: 'Datos',
          collapsable: false,
          children:[
            '/Data/Listings',
            '/Data/Closings',
            '/Data/officialSources',
            '/Data/otherSources'
          ]
        }
      ]
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
