import LoadingComponent from './loading.vue'
const load = require('./loading.vue')
console.log(LoadingComponent, load.default)
const Loading = {
  install(Vue: any) {
    Vue.component('Loading', LoadingComponent)
  }
}
export default Loading