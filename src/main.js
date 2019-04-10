import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import pullToRefresh from './directives/pullToRefresh.js'
Vue.config.productionTip = false

//directive
Vue.directive('pullToRefresh',pullToRefresh);
// Vue.prototype.$ajax =axios;
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
