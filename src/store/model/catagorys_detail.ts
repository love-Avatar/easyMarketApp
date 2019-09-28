import { getGoodList } from '@/service'

export default {
    namespaced: true,

    state: {
        defaullt_msg: {},
    },

    getters: {

    },

    mutations: {
        getGoodList(state: any, nav_list: any) {
            state.defaullt_msg = nav_list
            console.log(state.defaullt_msg, 'state.defaullt_msg ')
        }
    },

    actions: {
        async getGoodList({ commit, state }: { commit: any, state: any }, opt: any) {
            console.log(opt, '==============opt')
            const result = await getGoodList(opt)
            commit('getGoodList', result.data)
            console.log(result, '......')
            // return result.data
        },
    }
}