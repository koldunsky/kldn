// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import polyfills
function importAll(r) {
  r.keys().forEach(r);
}

importAll(
  require.context('./core/js/polyfills', true, /(\.js)$/)
);

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

window.addEventListener('load', () => {
  document.querySelector('html').classList.add('dom-loaded');
});

// window.addEventListener('scroll', (e) => {
//   const el = document.querySelector('body');
//   console.info(el.scrollTop);
// });
