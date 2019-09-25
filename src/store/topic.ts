import { getTopicList } from '@/service'

export default {
    namespaced: true,

    state: {
        getlist:[]
    },
    getters: {

    },
    mutations: {
        getTopic(state: any, dispatch: any) {
            state.getlist = dispatch
            console.log(dispatch)
        }
    },
    actions: {
        async getTopicList({ commit, state }: { commit: any, state: any }) {
            const result = await getTopicList()
            commit('getTopic', result.data.data)
        }
    }
}