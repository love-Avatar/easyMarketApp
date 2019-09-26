import Scroll from './scroll.vue'
import BScroll from './BScroll.vue'
export default {
    install(Vue: any) {
        // Vue.component('Scroll', Scroll)
        Vue.component('Scroll', BScroll)
    }
}