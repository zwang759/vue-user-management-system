import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import store from './vuex/store';

// Install BootstrapVue
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
