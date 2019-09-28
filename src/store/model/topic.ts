import { getTopicList, getTopicDetail, getTopicRelated, getTopicComent } from '@/service'

export default {
    namespaced: true,

    state: {
        getlist: [],
        getDetailList: "",
        getDetailTitle: "",
        getDetailsubList: [],
        getTopicComentData: []
    },
    getters: {

    },
    mutations: {
        getTopic(state: any, dispatch: any) {
            state.getlist = dispatch
        },
        getDetail(state: any, dispatch: any) {
            state.getDetailList = dispatch.content
            state.getDetailTitle = dispatch.title
        },
        getDetailSubList(state: any, dispatch: any) {
            state.getDetailsubList = dispatch
        },
        getTopicComent(state: any, dispatch: any) {
            state.getTopicComentData = dispatch
        }
    },
    actions: {
        async getTopicList({ commit }: { commit: any }) {
            const result = await getTopicList()
            commit('getTopic', result.data.data)
        },
        async getTopicDetail({ commit }: { commit: any }, paload: any) {
            const result = await getTopicDetail(paload)
            commit('getDetail', result.data)
        },
        async getTopicsubList({ commit }: { commit: any }, paload: any) {
            const result = await getTopicRelated(paload)
            commit('getDetailSubList', result.data)
        },
        async getTopicComent({ commit }: { commit: any }, paload: any) {
            const result = await getTopicComent(paload)
            console.log(result.data.data,"**************")
            commit('getTopicComent', result.data.data)
        },
    }
}