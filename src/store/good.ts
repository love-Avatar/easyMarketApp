import { getGoodList } from '@/service'

export default {
    namespaced: true,

    state: {
        getgoodlist: []
    },
    getters: {

    },
    mutations: {
        getGood(state: any, dispatch: any) {
            state.getgoodlist = dispatch
        }
    },
    actions: {
        async getList({ commit}: { commit: any },paload:any) {
            const result = await getGoodList({categoryId:paload})
            commit('getGood', result.data.data)
        }
    }
}