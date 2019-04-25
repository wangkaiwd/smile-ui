/**
 * Created by wangkai on 2019/4/16
 */
const path = require('path');
const resolve = dir => path.resolve(__dirname, `../../src/${dir}/`);
module.exports = {
  title: 'Smile UI',
  description: '晨光过后，便是微笑。Enjoy what you are doing！',
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
    config.resolve
      .alias
      .set('@', resolve(''))
      .set('utils', resolve('utils'))
      .set('http', resolve('http'))
      .set('components', resolve('components'))
      .set('assets', resolve('assets'))
      .set('styles', resolve('assets/styles'))
      .set('img', resolve('assets/img'))
      .end()
      // 扩展名省略
      .extensions
      .add('.scss');
  }
};
