import Vue from 'vue';
import App from './App.vue';
import 'styles/reset';
import 'styles/base';
import './registerServiceWorker';

Vue.config.productionTip = false;

const vm = new Vue({
  render: h => h(App)
}).$mount('#app');

export default vm;
