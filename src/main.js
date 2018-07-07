import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Meta from 'vue-meta';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import router from './router';

Vue.use(Meta);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
