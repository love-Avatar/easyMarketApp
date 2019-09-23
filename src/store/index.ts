
import Vue from 'vue';
import Vuex from 'vuex';
// import type from './mutation-type';
// 子模块
import login from './login';
import home from './home';

console.log(login, home)
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    /**
     * 各个模块的状态store管理
     */
    modules: {
        login: login,
        home: home
    }
});

export default store;


// // 本地商店storage命名规则 以__分隔
// this.$store.state.cache.routeUrl		// 拿取state中的值
// this.$store.getters['cache/routeUrl']	// 执行getters中的方法
// ...mapGetters({
//     routeUrl: "cache/routeUrl"
// })


// this.$store.commit('cache/routeUrl', url);	// 执行mutations中的方法
// ...mapMutations({							// 执行mutations中的方法
//     routeUrl: "cache/routeUrl"
