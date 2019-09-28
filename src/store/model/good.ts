import {
    getGoodList, getManufacturerById, getGoodsDetails, getGoodsRelated
} from '@/service'

export default {
    namespaced: true,
    state: {
        getgoodlist: [],
        // 制造商详情页面  数据
        brand_detail_list: [],
        brand_detail_logo: {},
        // good/list 页面信息
        goods_details: [],
        goods_related: []
    },
    getters: {

    },
    mutations: {
        getGood(state: any, dispatch: any) {
            state.getgoodlist = dispatch
        },

        // 制造商详情页面  数据
        get_brand_list(state: any, dispatch: any) {
            state.brand_detail_list = dispatch
        },
        get_brand_logo(state: any, dispatch: any) {
            state.brand_detail_logo = dispatch
        },

        // good/list 页面信息
        get_goods_details(state: any, dispatch: string) {
            state.goods_details = dispatch
        },
        get_goods_related(state: any, dispatch: string) {
            state.goods_related = dispatch
        },

    },
    actions: {
        async getList({ commit }: { commit: any }, paload: any) {
            const result = await getGoodList({ categoryId: paload })
            commit('getGood', result.data.data)
        },

        //  获取good/list   制造商详情页面
        async get_brand_list({ commit }: { commit: any }, paload: any) {
            // console.log(paload, '_get_good_list   --payload')
            const result = await getGoodList(paload)
            // console.log(result, '_get_good_list   --result')
            commit('get_brand_list', result.data.goodsList)
        },
        async get_brand_logo({ commit }: { commit: any }, paload: any) {
            // console.log(paload, 'get_brand_logo   --payload')
            const result = await getManufacturerById(paload)
            // console.log(result, 'get_brand_logo   --result')
            commit('get_brand_logo', result.data.brand)
        },

        // 获取good/list 页面信息
        async get_goods_details({ commit }: { commit: any }, paload: any) {
            const result = await getGoodsDetails(paload)
            commit('get_goods_details', result.data)
        },
        async get_goods_related({ commit }: { commit: any }, paload: any) {
            const result = await getGoodsRelated(paload)
            commit('get_goods_related', result.data)
        }

    }
}