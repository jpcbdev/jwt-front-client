/* tslint:disable */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import 'bulma/css/bulma.min.css'
import VueCookies from 'vue-cookies';
import store from './store';

// import 'vue2-toast/lib/toast.css';
// const Toast = require('vue2-toast');
// Vue.use(Toast, {
//   type: 'center',
//   duration: 3000,
//   wordWrap: true,
//   width: '150px'
// });

Vue.use(VueCookies);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
