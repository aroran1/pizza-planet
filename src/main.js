import Vue from 'vue';
import router from "./router";
import { store } from "./store/index.js";
import App from './App.vue';
import Accounting from 'accounting-js';

Vue.config.productionTip = false

Vue.filter('currency', function(val){
  return Accounting.formatMoney(val, options);
});

// Available fields in options object, matching `settings.currency`:
var options = {
	symbol : "£",
	decimal : ".",
	thousand: ",",
	precision : 2,
	format: "%s%v"
};

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
