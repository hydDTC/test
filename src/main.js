import Vue from 'vue'
import store from "./store";
import App from './App.vue'
import router from './router'
import component from './component';
import directive from './directive';
import echarts from 'echarts'
component(Vue) // 全局注册的component
directive(Vue) // 全局注册的directive
require("./vendor.js")  // 全局的css


Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

