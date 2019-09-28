import { login } from '@/service'

export default {
  namespaced: true,

  state: {
    loginMSG: null
  },
  getters: {

  },
  mutations: {
    // login(state: any, loginMSG: any) {
    //   console.log(JSON.stringify(state))
    //   state.loginMSG = loginMSG
    //   console.log(JSON.stringify(state))
    // }
  },
  actions: {
    async login({ commit, state }: { commit: any, state: any }, opt: any) {
      const result = await login(opt)
      // commit('login', result)
      return result
    }
  }
}