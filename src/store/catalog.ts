import { getNavList, getCurrentListById } from '@/service'

export default {
    namespaced: true,
    state: {
        getlist: [],
        getsublist: []
    },
    getters: {
    },
    mutations: {
        getCatalog(state: any, dispatch: any) {
            state.getlist = dispatch
        },
        getsubCatalog(state: any, dispatch: any) {
            state.getsublist = dispatch
        }
    },
    actions: {
        async getList({ commit, state }: { commit: any, state: any }) {
            const result = await getNavList()
            commit('getCatalog', result.data.categoryList)
            commit('getsubCatalog', result.data.currentCategory.subCategoryList)
        },
        async getListById({ commit }: { commit: any }, playload: any) {
            const result = await getCurrentListById(playload)
            commit('getsubCatalog', result.data.currentCategory.subCategoryList)
        }
    }
}