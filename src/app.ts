// import bootstrap from './bootstrap';
import Vue from 'vue';

import router from './router';
import App from './App.vue';

import './assets/style/main.scss';

// bootstrap();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
