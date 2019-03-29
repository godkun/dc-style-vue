import Vue from 'vue';
import App from './App.vue';
import router from './router';

import DcUI from '../packages';

Vue.use(DcUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
