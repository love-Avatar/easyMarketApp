import request from "@utils/request"

// 获取首页数据
export let getHomePageList = () => {
    return request.get('/api')
}
