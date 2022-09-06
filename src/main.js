import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.sass'
import ElementUI from 'element-ui'
import * as ECharts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'

import '@/utils/requireComponent'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = ECharts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
