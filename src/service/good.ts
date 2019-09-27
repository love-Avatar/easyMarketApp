import request from "@utils/request"


// 根据分类Id或者制造商Id获取商品
interface goodListInfo {
    brandId?: string,
    categoryId?: string,
    sort?: string,
    order?: string,
    page?: string,
    size?: string
}
export let getGoodList = (opt?: goodListInfo) => {
    return request.get('/api/goods/list', { params: { ...opt } })
}

// 获取在售商品数量
export let getGoodCountOnSell = (id: string) => {
    return request.get('/api/goods/count', { params: { id } })
}

// 根据制造商ID获取制造商详情
export let getManufacturerById = (id: string) => {
    return request.get('/api/brand/detail', { params: { id } })
}

// 对某个商品或专题ID进行评论
interface commentInfo {
    content: string,
    typeId: string,
    valueId: string,
}
export let postComment = (opt: commentInfo) => {
    return request.post('/api/comment/post', opt)
}

// 删除商品查询的历史记录
export let deleteGoodsHistory = () => {
    return request.get('/api/search/clearhistory')
}

// 根据制造商ID获取制造商相关商品
interface ManufacturerInfo {
    Id: string,
    page?: string,
    size?: string
}
export let getManufacturerDetail = (opt: ManufacturerInfo) => {
    return request.get('/api/brand/detail', { params: { ...opt } })
}

// 获取商品查询的相关信息
export let getSearchGoods = () => {
    return request.get('/api/search/index')
}

// 相关商品
export let getGoodsRelated = (id: string) => {
    return request.get('/api/goods/related', { params: { id } })
}

// 商品查询模糊查询关键字
export let getGoodsDim = (keyword: string) => {
    return request.get('/api/search/helper', { params: { keyword } })
}

// 获取商品详情

export let getGoodsDetails = (id: string) => {
    return request.get('/api/goods/detail', { params: { id } })
}


