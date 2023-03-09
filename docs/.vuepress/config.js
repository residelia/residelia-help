const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Sección Ayuda Residelia',
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
    logo: 'images/poster.png',
    nav: [
      {
        text: 'Activos',
        link: '/guide/Activos',
      },
      {
        text: 'Carteras',
        link: '/guide/Carteras',
      },
      {
        text: 'Datos',
        link: '/guide/Datos',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'admin',
        link: '/admin/#'
      }
    ],
    sidebar: [
      {
        title: 'Menú de Ayuda',
        path: '/',
        collapsable: false,
        children:[
          '/Activos/',
          '/Carteras/',
          '/Datos/'
        ]
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
