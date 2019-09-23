import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import "@ast/font/iconfont.css"
import '@scss/index.scss'
import "@ast/my_font/iconfont.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
