/**
 * Created by wangkai on 2019/4/16
 */
const path = require('path');
module.exports = {
  title: 'Smile UI',
  description: 'Enjoy what you are doing',
  base: '/smile-ui/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/wangkaiwd' },
    ],
    sidebar: [
      {
        title: '通用组件',
        collapsable: false,
        children: [
          '/common/icon',
          '/common/layout',
          '/common/grid',
          '/common/button',
          '/common/input'
        ]
      },
      {
        title: '视图组件',
        collapsable: false,
        children: [
          '/views/message',
          '/views/tabs'
        ]
      }
    ]
  },
  chainWebpack: (config) => {
    // vuePress中的别名
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
