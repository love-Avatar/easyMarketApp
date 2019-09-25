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
            // console.log(dispatch)    
        }
    },
    actions: {
        async getList({ commit, state }: { commit: any, state: any }) {
            const result = await getGoodList()
            commit('getGood', result.data.data)
        }
    }
}