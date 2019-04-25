import Vue from 'vue';
import App from './App.vue';
import 'styles/reset';
import 'styles/base';
import './registerServiceWorker';
import autoRegisterComponent from 'utils/autoRegisterComponent';
import message from './components/smileMessage';
import 'utils/svg';

Vue.config.productionTip = false;
Vue.use(message);
autoRegisterComponent(Vue);
const vm = new Vue({
  render: h => h(App)
}).$mount('#app');

export default vm;
