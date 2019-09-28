
import Vue from 'vue';
import Vuex from 'vuex';
// import type from './mutation-type';
// 子模块
import login from './model/login';
import home from './model/home';
import topic from "./model/topic";
import good from "./model/good";
import catalog from "./model/catalog"
import catagorys_detail from "./model/catagorys_detail"
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
        login,
        home,
        topic,
        good,
        catalog,
        catagorys_detail
    }
});

export default store;
