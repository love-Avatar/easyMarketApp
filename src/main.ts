import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import VueLazyLoad from 'vue-lazyload'
import "@ast/font/iconfont.css"
import '@scss/index.scss'
import "@ast/my_font/iconfont.css"

Vue.use(VueLazyLoad, {
  error: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg',
  loading: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg',
  preLoad: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
