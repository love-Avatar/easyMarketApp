
import request from '@/utils/request';
export default {
  namespaced: true,

  state: {
    routeUrl: 1234567
  },
  getters: {
    routeUrl(state: any) {
      // return state.routeUrl || storage.get('productList__routeUrl', null)
    }
  },
  mutations: {
    routeUrl(state: any, url: any) {
      state.routeUrl = url
      // storage.set("productList__routeUrl", url)
    }
  },
  actions: {
    async init({ commit, state }: { commit: any, state: any }, pid: any) {
      // await request.get(url + '', params: { pid }).then((res) => {
      //   state.all = res.all
      //   commit('resolve', res.data)
      // })
      await request.get('url').then((res: any) => {
        state.all = res.all
        commit('resolve', res.data)
      })
    }
  }
}


// 页面调用   this.$store.dispatch('xxxx/fetchList');

// 改造命名空间的写法  参考  https://www.jianshu.com/p/80203ed29549