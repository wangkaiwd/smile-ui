/**
 * Created by wangkai on 2019/4/16
 */
module.exports = {
  title: 'smile ui',
  description: 'Enjoy what you are doing',
  base: '/smile-ui/',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
