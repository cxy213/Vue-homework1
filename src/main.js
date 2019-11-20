import Vue from 'vue';
import Elementui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';


Vue.prototype.$http = axios;
Vue.use(Elementui);
Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
