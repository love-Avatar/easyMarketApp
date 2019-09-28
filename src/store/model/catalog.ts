import { getNavList, getListById, getCurrentListById } from '@/service'

export default {
    namespaced: true,
    state: {
        getlist: [],
        getsublist: [],
        getNavlist: [],
        gettitlelist:null
    },
    getters: {
    },
    mutations: {
        getCatalog(state: any, dispatch: any) {
            state.getlist = dispatch
        },
        getsubCatalog(state: any, dispatch: any) {
            state.getsublist = dispatch
        },
        getNavById(state: any, dispatch: any) {
            state.getNavlist = dispatch
        },
        getNavBytitle(state: any, dispatch: any) {
            state.gettitlelist = dispatch
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
        },
        async getNavList({ commit }: { commit: any }, playload: any) {
            const result = await getListById(playload)
            //请求的导航数据
            commit('getNavById', result.data.brotherCategory)
            //请求的导航下title
            commit('getNavBytitle', result.data.currentCategory)
        }
    }
}