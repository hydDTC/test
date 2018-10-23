import Vue from 'vue'
import store from "./store";
import App from './App.vue'
import router from './router'
import component from './component';
component(Vue) // 全局注册的component
require("./vendor.js")  // 全局的css

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

