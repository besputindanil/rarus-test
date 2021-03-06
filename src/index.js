import Vue from 'vue';
import App from './App.vue';
import store from 'store';
import router from './router';

import './plugins/v-tooltip';
import loader from 'vue-ui-preloader';

Vue.use(loader);

Vue.use(store);
Vue.use(router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
