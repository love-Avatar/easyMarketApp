import request from "@/utils/request"

// 添加到购物车
interface AddCardInfo {
    goodsId: string,
    number: string,
    productId: string
}
export let postAddCard = (opt: AddCardInfo) => {
    return request.post('/api/cart/add', opt)
}

// 添加到收藏栏  是否添加到收藏栏
interface AddCollect {
    typeId: string,
    valueId: string
}
export let postAddCollect = (opt: AddCollect) => {
    return request.post('/api/collect/addordelete', opt)
}

// 获取用户购物车商品数量
export let getShopcarCart = () => {
    return request.get('/api/cart/goodscount')
}

// 查询收藏栏商品
export let getColllectList = (typeId: string) => {
    return request.get('/api/collect/list', { params: { typeId } })
}

// 获取用户购物车数据
export let getShopcarList = () => {
    return request.get('/api/cart/index')
}

// 删除购物车商品
interface deleteShopcarItemInfo {
    productIds: string
}
export let deleteShopcarItem = (opt: deleteShopcarItemInfo) => {
    return request.post('/api/cart/delete', opt)
}

// 购物车商品是否选中
interface IsCheckedInfo {
    isChecked: number,
    productId: string
}
export let shopcarItemIsChecked = (opt: IsCheckedInfo) => {
    return request.post('/api/cart/checked', opt)
}


