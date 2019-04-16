import Vue from 'vue';
import App from './App.vue';
import 'styles/reset';
import 'styles/base';
import './registerServiceWorker';
import message from './plugins';

Vue.config.productionTip = false;
Vue.use(message, { text: '测试文字' });
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
);
requireComponent.keys().map(filename => {
  // 获取组件配置
  const componentConfig = requireComponent(filename);
  // 解决目录名，并改成驼峰命名形式
  const part1 = filename.indexOf('/') + 1;
  const part2 = filename.lastIndexOf('/');
  const name = filename.slice(part1, part2);
  const componentName = name[0].toUpperCase() + name.slice(1);
  Vue.component(componentName, componentConfig.default || componentConfig);
});

const vm = new Vue({
  render: h => h(App)
}).$mount('#app');

export default vm;
