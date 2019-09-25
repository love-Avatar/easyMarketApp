import { getTopicList } from '@/service'

export default {
    namespaced: true,

    state: {
        getlist: []
    },
    getters: {

    },
    mutations: {
        getTopic(state: any, dispatch: any) {
            state.getlist = dispatch
        }
    },
    actions: {
        async getTopicList({ commit }: { commit: any }) {
            const result = await getTopicList()
            commit('getTopic', result.data.data)
        }
    }
}