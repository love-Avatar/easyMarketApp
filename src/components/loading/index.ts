import LoadingComponent from './loading.vue'

const Loading = {
  install (Vue: any) {
    Vue.component('Loading', LoadingComponent)
  }
}
export default Loading