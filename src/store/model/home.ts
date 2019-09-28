import { getHomePageList } from '@/service'
export default {
  namespaced: true,
  state: {
    HomePageMSG: {}
  },
  getters: {

  },
  mutations: {
    homePageList(state: any, HomePageMSG: any) {
      // console.log(JSON.stringify(state))
      state.HomePageMSG = HomePageMSG.data
      console.log((state.HomePageMSG))
    }
  },

  actions: {
    async getHomePageList({ commit, state }: { commit: any, state: any }) {
      const result = await getHomePageList()
      console.log(result, 'result')
      commit('homePageList', result)
      // return result
    }
  }
}
// 页面调用   this.$store.dispatch('xxxx/fetchList');
// 改造命名空间的写法  参考  https://www.jianshu.com/p/80203ed29549