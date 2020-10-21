import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
